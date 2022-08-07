import { Request, Response } from 'express'
import { randomUUID } from 'crypto'

interface IUser {
  id?: string
  email: string
  password: string
}

let users: Array<IUser> = []

const getAll = (req: Request, res: Response) => res.json(users)

const getById = (req: Request, res: Response) => {
  const { id } = req.params
  const userFinded = users.find(u => u.id === id)

  if (!userFinded) return res.status(404).json({ message: 'User not found' })

  return res.json(userFinded)
}

const create = (req: Request, res: Response) => {
  const { email, password } = req.body
  console.log(req.body);

  const user: IUser = { email, password, id: randomUUID() }

  users.push(user)
  return res.status(201).json(user)
}

const update = (req: Request, res: Response) => {
  const { id } = req.params
  const { email, password } = req.body

  const userIndex = users.findIndex(u => u.id === id)

  if (userIndex === -1) return res.status(404).json({ message: 'User not found' })

  const user = { id, email, password }

  users[userIndex] = user
  return res.json(user)
}

const remove = (req: Request, res: Response) => {
  const { id } = req.params
  const userFinded = users.find(u => u.id === id)

  if (!userFinded) return res.status(404).json({ message: 'User not found' })

  const newUsers = users.filter(u => u.id !== userFinded.id)
  users = newUsers

  return res.json({ message: 'User removed successfully' })
}

export default {
  getAll,
  getById,
  create,
  update,
  remove
}
