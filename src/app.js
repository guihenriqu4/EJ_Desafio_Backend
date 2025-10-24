import { game } from './routes/game.routes.js';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import express from 'express';

//Configuração inicial do app
const app = express();

//Configuração dos dados a serem utilizados no Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0', // Versão da Especificação OpenAPI
    info: {
      title: 'API de Produtos - Desafio ASCII Backend',
      version: '1.0.0',
      description: 'Documentação da API para o desafio de back-end da EJ.',
    },
    servers: [
      {
        url: 'http://localhost:8080', // URL base da API
        description: 'Servidor de Desenvolvimento',
      },
    ],
  },
  // Caminho para o arquivo que contêm as anotações da API
  apis: ['./src/routes/game.routes.js'], // Aponta para os arquivos de rotas!
};

// Gera a especificação do Swagger com base nas opções
const swaggerSpec = swaggerJsDoc(swaggerOptions);

//Configuração necessária para trabalhar com o type: json
app.use(express.json());

//Configuração de rota para acesso à documentação Swagger
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
//Configuração de rota para acesso às funcionalidades da api
app.use('/api/produtos', game);

export { app }
