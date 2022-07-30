import { Request, Response } from 'express'
import { randomUUID } from 'crypto'

interface IUser {
  id: string
  email: string
  password: string
}

const users: Array<IUser> = []

const getAll = (req: Request, res: Response) => res.json(users)

const create = (req: Request, res: Response) => {
  const { email, password } = req.body
  const user: IUser = { email, password, id: randomUUID() }

  users.push(user)
  return res.status(201).json(user)
}

const getById = (req: Request, res: Response) => {
  const { id } = req.params
  const userFinded = users.find(u => u.id === id)

  if (!userFinded) return res.status(404).json({ message: 'User not found' })

  return res.json(userFinded)
}

export default {
  getAll,
  getById,
  create
}
