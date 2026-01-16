import { Router, Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'
import { z } from 'zod'
import { auth, AuthRequest } from '../middleware/auth'

const router = Router()

// 验证 schema
const registerSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().email(),
  password: z.string().min(6)
})

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string()
})

// 注册
router.post('/register', async (req: Request, res: Response) => {
  try {
    const prisma: PrismaClient = req.app.get('prisma')
    const { username, email, password } = registerSchema.parse(req.body)

    // 检查用户是否存在
    const existingUser = await prisma.user.findFirst({
      where: { OR: [{ email }, { username }] }
    })

    if (existingUser) {
      return res.status(400).json({ error: '用户名或邮箱已存在' })
    }

    // 加密密码
    const hashedPassword = await bcrypt.hash(password, 10)

    // 创建用户
    const user = await prisma.user.create({
      data: { username, email, password: hashedPassword }
    })

    // 生成 token
    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET!,
      { expiresIn: '7d' }
    )

    res.json({
      token,
      user: { id: user.id, username: user.username, email: user.email, role: user.role }
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: '参数格式错误', details: error.errors })
    }
    console.error(error)
    res.status(500).json({ error: '注册失败' })
  }
})

// 登录
router.post('/login', async (req: Request, res: Response) => {
  try {
    const prisma: PrismaClient = req.app.get('prisma')
    const { email, password } = loginSchema.parse(req.body)

    // 查找用户
    const user = await prisma.user.findUnique({ where: { email } })

    if (!user) {
      return res.status(400).json({ error: '邮箱或密码错误' })
    }

    // 验证密码
    const validPassword = await bcrypt.compare(password, user.password)

    if (!validPassword) {
      return res.status(400).json({ error: '邮箱或密码错误' })
    }

    // 生成 token
    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET!,
      { expiresIn: '7d' }
    )

    res.json({
      token,
      user: { id: user.id, username: user.username, email: user.email, role: user.role, avatar: user.avatar }
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: '参数格式错误' })
    }
    console.error(error)
    res.status(500).json({ error: '登录失败' })
  }
})

// 获取当前用户信息
router.get('/me', auth, async (req: AuthRequest, res: Response) => {
  try {
    const prisma: PrismaClient = req.app.get('prisma')
    const user = await prisma.user.findUnique({
      where: { id: req.userId },
      select: { id: true, username: true, email: true, avatar: true, role: true, createdAt: true }
    })

    if (!user) {
      return res.status(404).json({ error: '用户不存在' })
    }

    res.json(user)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: '获取用户信息失败' })
  }
})

// 获取用户统计
router.get('/stats', auth, async (req: AuthRequest, res: Response) => {
  try {
    const prisma: PrismaClient = req.app.get('prisma')
    
    // 获取帖子数量
    const postsCount = await prisma.post.count({
      where: { authorId: req.userId }
    })
    
    // 获取获赞数量
    const likesCount = await prisma.like.count({
      where: {
        post: { authorId: req.userId }
      }
    })
    
    res.json({ posts: postsCount, likes: likesCount })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: '获取统计失败' })
  }
})

export default router
