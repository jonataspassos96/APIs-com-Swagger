const swaggerConfig = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'Express API com Swagger',
      description: 'Api simples utilizando express documentada pelo swagger',
      version: '1.0'
    },
    server: [{
      url: 'http://localhost:3334',
      description: 'servidor local'
    }]
  },
  apis: ['./src/routes/user.routes.ts']
}

export default swaggerConfig