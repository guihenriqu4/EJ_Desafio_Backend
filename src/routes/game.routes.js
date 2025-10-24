import { Router } from 'express';
import { createGameController, findIdController, listGamesController, updateGameController, deleteGameController } from '../controllers/gameController.js';

const game = Router();


/**
 * @swagger
 * components:
 *  schemas:
 *      ProdutoCreate:
 *          type: object
 *          required:
 *              - nome
 *              - preco
 *              - categoria
 *          properties:
 *              nome:
 *                  type: string
 *                  description: O nome do produto.
 *              preco:
 *                  type: number
 *                  format: float
 *                  description: O preço do produto.
 *              categoria:
 *                  type: string
 *                  description: A categoria do produto.
 *          example:
 *              nome: Dead By Daylight
 *              preco: 59.90
 *              categoria: Sobrevivência
 *      ProdutoSaida:
 *          type: object
 *          properties:
 *              id:
 *                  type: integer
 *                  description: O ID gerado automaticamente do produto.
 *              nome:
 *                  type: string
 *                  description: O nome do produto.
 *              preco:
 *                  type: number
 *                  format: float
 *                  description: O preço do produto.
 *              categoria:
 *                  type: string
 *                  description: A categoria do produto.
 *              createdAt:
 *                  type: string
 *                  format: date-time
 *                  description: Data e horário em que foi criado.
 *              updatedAt:
 *                  type: string
 *                  format: date-time
 *                  description: Data e horário em que foi alterado.
 *          example:
 *              id: 1
 *              nome: Dead By Daylight
 *              preco: 59.90
 *              categoria: Sobrevivência
 *              createdAt: 2025-10-22T14:20:33.902Z
 *              updatedAt: 2025-10-23T19:36:34.065Z
 *      ProdutoUpdate:
 *          type: object
 *          properties:
 *              nome:
 *                  type: string
 *                  description: O nome do produto.
 *              preco:
 *                  type: number
 *                  format: float
 *                  description: O preço do produto.
 *              categoria:
 *                  type: string
 *                  description: A categoria do produto.
 *          example:
 *              nome: Dead By Daylight
 *              preco: 59.90
 *              categoria: Sobrevivência
 */

/**
 * @swagger
 * tags:
 *  name: Produtos
 *  description: API para gerenciamento de jogos
 */

/**
 * @swagger
 * /api/produtos:
 *  get:
 *      summary: Lista todos os jogos
 *      tags: [Produtos]
 *      responses:
 *          '200':
 *              description: A lista de todos os jogos.
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/ProdutoSaida'
 *          '404':
 *              description: Nenhum jogo encontrado.
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              error:
 *                                  type: string
 *                                  description: A mensagem de erro retornada pela API.
 *                          example:
 *                              error: "Ocorreu um erro ao buscar os jogos."
 */
game.get('/', listGamesController);

/**
 * @swagger
 * /api/produtos/{id}:
 *  get:
 *      summary: Lista um jogo de acordo com o id
 *      tags: [Produtos]
 *      parameters:
 *      -   in: path
 *      name: id
 *      required: true
 *      schema:
 *          type: integer
 *          description: O ID do jogo a ser buscado.
 *      responses:
 *          '200':
 *              description: Um objeto com a descrição do elemento vinculado ao id.
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/ProdutoSaida'
 *          '404':
 *              description: Não foi possível encontrar o jogo.
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              error:
 *                                  type: string
 *                                  description: A mensagem de erro retornada pela API.
 *                          example:
 *                              error: "Ocorreu um erro ao buscar o jogo."
 */
game.get('/:id', findIdController);

/**
 * @swagger
 * /api/produtos:
 *  post:
 *      summary: Cria um novo jogo
 *      tags: [Produtos]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/ProdutoCreate'
 *      responses:
 *          '201':
 *              description: O jogo foi criado com sucesso.
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/ProdutoSaida'
 *          '400':
 *              description: "Erro na requisição (ex: dados inválidos)."
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              error:
 *                                  type: string
 *                                  description: A mensagem de erro retornada pela API.
 *                          example:
 *                              error: "Ocorreu um erro ao criar o jogo."
 */
game.post('/', createGameController);

/**
 * @swagger
 * /api/produtos/{id}:
 *  put:
 *      summary: Atualiza um jogo existente
 *      tags: [Produtos]
 *      parameters:
 *      -   in: path
 *      name: id
 *      required: true
 *      schema:
 *          type: integer
 *          description: O ID do jogo a ser atualizado.
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/ProdutoUpdate'
 *      responses:
 *          '200':
 *              description: O jogo foi atualizado com sucesso.
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/ProdutoSaida'
 *          '400':
 *              description: "Erro na requisição (ex: dados inválidos ou jogo não encontrado)."
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  description: A mensagem de erro retornada pela API.
 *                          example:
 *                              message: "Erro ao atualizar o jogo."
 */
game.put('/:id', updateGameController);

/**
 * @swagger
 * /api/produtos/{id}:
 *  delete:
 *      summary: Deleta um jogo pelo ID
 *      tags: [Produtos]
 *      parameters:
 *      -   in: path
 *      name: id
 *      required: true
 *      schema:
 *          type: integer
 *          description: O ID do jogo a ser deletado.
 *      responses:
 *          '204':
 *              description: O jogo foi deletado com sucesso.
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/ProdutoSaida'
 *          '404':
 *              description: Não foi possível encontrar o jogo para deletar.
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  description: A mensagem de erro retornada pela API.
 *                          example:
 *                              message: "Jogo não encontrado."
 */
game.delete('/:id', deleteGameController);

export { game }
