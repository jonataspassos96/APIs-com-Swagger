const swaggerConfig = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "Express API com Swagger",
      description: "Api simples utilizando express documentada pelo swagger",
      termsOfService: "http://localhost:3334/terms",
      contact: {
        email: "jpc080496@gmail.com"
      },
      version: "1.0"
    },
    servers: [{
      url: "http://localhost:3334",
      description: "servidor local"
    }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    }
  },
  apis: ["./src/routes/user.routes.ts"]
}

export default swaggerConfig
