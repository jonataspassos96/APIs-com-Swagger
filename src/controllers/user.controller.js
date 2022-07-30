import { randomUUID } from 'crypto'
const users = []

const getAll = (req, res) => res.json(users)

const create = (req, res) => {
  const { email, password } = req.body
  const user = { email, password, id: randomUUID() }

  users.push(user)
  return res.status(201).json(user)
}

const getById = (req, res) => {
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
