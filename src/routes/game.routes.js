import { Router } from 'express';
import { createGameController, findIdController, listGamesController, updateGameController, deleteGameController } from '../controllers/gameController.js';

const game = Router();

game.get('/', listGamesController);

game.get('/:id', findIdController);

game.post('/', createGameController);

game.put('/:id', updateGameController);

game.delete('/:id', deleteGameController);

export { game }
