import { Router, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import { z } from 'zod'
import { auth, AuthRequest } from '../middleware/auth'

const router = Router()

const createCommentSchema = z.object({
  content: z.string().min(1).max(2000),
  postId: z.number(),
  parentId: z.number().optional()
})

// 创建评论
router.post('/', auth, async (req: AuthRequest, res: Response) => {
  try {
    const prisma: PrismaClient = req.app.get('prisma')
    const { content, postId, parentId } = createCommentSchema.parse(req.body)

    // 检查帖子是否存在
    const post = await prisma.post.findUnique({ where: { id: postId } })
    if (!post) {
      return res.status(404).json({ error: '帖子不存在' })
    }

    // 如果是回复，检查父评论是否存在
    if (parentId) {
      const parent = await prisma.comment.findUnique({ where: { id: parentId } })
      if (!parent || parent.postId !== postId) {
        return res.status(400).json({ error: '无效的回复目标' })
      }
    }

    const comment = await prisma.comment.create({
      data: {
        content,
        postId,
        parentId,
        authorId: req.userId!
      },
      include: {
        author: { select: { id: true, username: true, avatar: true } }
      }
    })

    res.status(201).json(comment)
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: '参数格式错误' })
    }
    console.error(error)
    res.status(500).json({ error: '评论失败' })
  }
})

// 删除评论
router.delete('/:id', auth, async (req: AuthRequest, res: Response) => {
  try {
    const prisma: PrismaClient = req.app.get('prisma')
    const { id } = req.params

    const comment = await prisma.comment.findUnique({ where: { id: parseInt(id) } })
    if (!comment) {
      return res.status(404).json({ error: '评论不存在' })
    }
    if (comment.authorId !== req.userId && req.userRole !== 'ADMIN') {
      return res.status(403).json({ error: '无权限删除' })
    }

    await prisma.comment.delete({ where: { id: parseInt(id) } })

    res.json({ message: '删除成功' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: '删除评论失败' })
  }
})

export default router
