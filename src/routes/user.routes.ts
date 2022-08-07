import { Router } from 'express';
import userController from '../controllers/user.controller';
import ensureAuth from '../middlewares/ensureAth';

const userRouter = Router();

/**
 * @swagger
 *  tags:
 *      name: Users
 *      description: Endpoints de usuário
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          User:
 *              type: object
 *              required:
 *                  - email
 *                  - password
 *              properties:
 *                  id:
 *                      type: string
 *                  email:
 *                      type: string
 *                  password:
 *                      type: string
 *              example:
 *                  email: trybe@trybe.com
 *                  password: 12345678
 */

/**
 * @swagger
 *  /users:
 *    get:
 *      tags: [Users]
 *      description: Endpoint retorna uma lista de usuários
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/User'
 */
userRouter.get('/', ensureAuth, userController.getAll)

/**
 * @swagger
 *  /users/{id}:
 *    get:
 *      tags: [Users]
 *      description: Endpoint que retorna um usuário por id
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        - in: path
 *          name: id
 *          type: string
 *          required: true
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                $ref: '#/components/schemas/User'
 */
userRouter.get('/:id', userController.getById)

/**
 * @swagger
 *  /users:
 *    post:
 *      tags: [Users]
 *      description: Endpoint para cadastrar um usuário
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/User'
 *      responses:
 *        201:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                $ref: '#/components/schemas/User'
 */
userRouter.post('/', userController.create)

/**
 * @swagger
 *  /users/{id}:
 *    put:
 *      tags: [Users]
 *      description: Endpoint para atualizar um usuário
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        - in: path
 *          name: id
 *          type: string
 *          required: true
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/User'
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                $ref: '#/components/schemas/User'
 */
userRouter.put('/:id', userController.update)

/**
 * @swagger
 *  /users/{id}:
 *    delete:
 *      tags: [Users]
 *      description: Endpoint que remover um usuário por id
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        - in: path
 *          name: id
 *          type: string
 *          required: true
 *      responses:
 *        200:
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                      type: string
 *              example:
 *                  message: User removed successfully
 *        401:
 *          description: Unauthorized
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                      type: string
 *              example:
 *                  message: Unauthorized
 *        400:
 *          description: User not found
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                      type: string
 *              example:
 *                  message: User not found
 */
userRouter.delete('/:id', userController.remove)

export default userRouter
