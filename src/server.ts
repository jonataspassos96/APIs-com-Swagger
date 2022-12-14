import express, { Request, Response } from 'express'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import swaggerConfig from './docs/swagger.config'
import userRouter from './routes/user.routes'

const app = express()

app.use(express.json())

const swaggerDoc = swaggerJSDoc(swaggerConfig)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

app.get('/terms', (req: Request, res: Response) => {
  return res.json({
    message: 'Termos de Serviço'
  })
})

app.use('/users', userRouter)

app.listen(3334, () => console.log('running at port 3334'))
