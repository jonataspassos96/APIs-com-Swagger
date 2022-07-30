import { Router } from 'express'
import userController from '../controllers/user.controller'

const userRouter = Router()

userRouter.route('/')
  .get(userController.getAll)
  .post(userController.create)

userRouter.route('/:id')
  .get(userController.getById)

export default userRouter
