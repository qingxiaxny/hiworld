import { Router, Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import { z } from 'zod'
import { auth, optionalAuth, AuthRequest } from '../middleware/auth'

const router = Router()

// 验证 schema
const createPostSchema = z.object({
  title: z.string().min(1).max(200),
  content: z.string().min(1),
  category: z.string().min(1).max(50),
  tags: z.string().optional()
})

// 帖子分类
const CATEGORIES = ['前端', '后端', 'AI', '数据库', '运维', '算法', '职业', '其他']

// 获取帖子列表
router.get('/', optionalAuth, async (req: AuthRequest, res: Response) => {
  try {
    const prisma: PrismaClient = req.app.get('prisma')
    const { category, page = '1', limit = '20', search, authorId, sort = 'latest' } = req.query

    const where: any = {}
    if (category && category !== 'all') {
      where.category = category
    }
    if (authorId) {
      where.authorId = parseInt(authorId as string)
    }
    if (search) {
      where.OR = [
        { title: { contains: search as string } },
        { content: { contains: search as string } }
      ]
    }

    // 排序方式
    let orderBy: any = { createdAt: 'desc' }
    if (sort === 'hot') {
      orderBy = { views: 'desc' }
    } else if (sort === 'likes') {
      orderBy = [{ likes: { _count: 'desc' } }, { createdAt: 'desc' }]
    }

    const skip = (parseInt(page as string) - 1) * parseInt(limit as string)

    const [posts, total] = await Promise.all([
      prisma.post.findMany({
        where,
        include: {
          author: { select: { id: true, username: true, avatar: true } },
          _count: { select: { comments: true, likes: true } }
        },
        orderBy,
        skip,
        take: parseInt(limit as string)
      }),
      prisma.post.count({ where })
    ])

    res.json({
      posts,
      pagination: {
        page: parseInt(page as string),
        limit: parseInt(limit as string),
        total,
        totalPages: Math.ceil(total / parseInt(limit as string))
      }
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: '获取帖子列表失败' })
  }
})

// 获取帖子详情
router.get('/:id', optionalAuth, async (req: AuthRequest, res: Response) => {
  try {
    const prisma: PrismaClient = req.app.get('prisma')
    const { id } = req.params

    const post = await prisma.post.findUnique({
      where: { id: parseInt(id) },
      include: {
        author: { select: { id: true, username: true, avatar: true } },
        comments: {
          where: { parentId: null },
          include: {
            author: { select: { id: true, username: true, avatar: true } },
            replies: {
              include: {
                author: { select: { id: true, username: true, avatar: true } }
              }
            }
          },
          orderBy: { createdAt: 'desc' }
        },
        _count: { select: { likes: true } }
      }
    })

    if (!post) {
      return res.status(404).json({ error: '帖子不存在' })
    }

    // 增加浏览量
    await prisma.post.update({
      where: { id: parseInt(id) },
      data: { views: { increment: 1 } }
    })

    // 检查当前用户是否点赞
    let isLiked = false
    if (req.userId) {
      const like = await prisma.like.findUnique({
        where: { userId_postId: { userId: req.userId, postId: parseInt(id) } }
      })
      isLiked = !!like
    }

    res.json({ ...post, isLiked })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: '获取帖子详情失败' })
  }
})

// 创建帖子
router.post('/', auth, async (req: AuthRequest, res: Response) => {
  try {
    const prisma: PrismaClient = req.app.get('prisma')
    const { title, content, category, tags } = createPostSchema.parse(req.body)

    if (!CATEGORIES.includes(category)) {
      return res.status(400).json({ error: '无效的分类' })
    }

    const post = await prisma.post.create({
      data: {
        title,
        content,
        category,
        tags,
        authorId: req.userId!
      },
      include: {
        author: { select: { id: true, username: true, avatar: true } }
      }
    })

    res.status(201).json(post)
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: '参数格式错误', details: error.errors })
    }
    console.error(error)
    res.status(500).json({ error: '创建帖子失败' })
  }
})

// 更新帖子
router.put('/:id', auth, async (req: AuthRequest, res: Response) => {
  try {
    const prisma: PrismaClient = req.app.get('prisma')
    const { id } = req.params
    const { title, content, category, tags } = createPostSchema.parse(req.body)

    // 检查权限
    const post = await prisma.post.findUnique({ where: { id: parseInt(id) } })
    if (!post) {
      return res.status(404).json({ error: '帖子不存在' })
    }
    if (post.authorId !== req.userId && req.userRole !== 'ADMIN') {
      return res.status(403).json({ error: '无权限修改' })
    }

    const updated = await prisma.post.update({
      where: { id: parseInt(id) },
      data: { title, content, category, tags }
    })

    res.json(updated)
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: '参数格式错误' })
    }
    console.error(error)
    res.status(500).json({ error: '更新帖子失败' })
  }
})

// 删除帖子
router.delete('/:id', auth, async (req: AuthRequest, res: Response) => {
  try {
    const prisma: PrismaClient = req.app.get('prisma')
    const { id } = req.params

    // 检查权限
    const post = await prisma.post.findUnique({ where: { id: parseInt(id) } })
    if (!post) {
      return res.status(404).json({ error: '帖子不存在' })
    }
    if (post.authorId !== req.userId && req.userRole !== 'ADMIN') {
      return res.status(403).json({ error: '无权限删除' })
    }

    await prisma.post.delete({ where: { id: parseInt(id) } })

    res.json({ message: '删除成功' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: '删除帖子失败' })
  }
})

// 点赞/取消点赞
router.post('/:id/like', auth, async (req: AuthRequest, res: Response) => {
  try {
    const prisma: PrismaClient = req.app.get('prisma')
    const { id } = req.params

    const existing = await prisma.like.findUnique({
      where: { userId_postId: { userId: req.userId!, postId: parseInt(id) } }
    })

    if (existing) {
      // 取消点赞
      await prisma.like.delete({
        where: { userId_postId: { userId: req.userId!, postId: parseInt(id) } }
      })
      res.json({ liked: false })
    } else {
      // 点赞
      await prisma.like.create({
        data: { userId: req.userId!, postId: parseInt(id) }
      })
      res.json({ liked: true })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: '操作失败' })
  }
})

// 获取分类列表
router.get('/meta/categories', (req: Request, res: Response) => {
  res.json(CATEGORIES)
})

export default router
