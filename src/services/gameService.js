import { CreateGameDTO } from '../dtos/CreateGameDTO.js';
import { UpdateGameDTO } from '../dtos/UpdateGameDTO.js';
import { del, findAll, findById, save, update } from '../models/gameModel.js';


async function createGameService(data) {
    const dto = new CreateGameDTO(data);
    const result = await save(dto);
    return result;
}

async function findIdService(id) {
    const result = await findById(id);
    if(result === null) throw new Error("Jogo nao encontrado.");
    return result;
}

async function listGamesService() {
    const result = await findAll();
    if(result === null) throw new Error("Nenhum jogo encontrado");
    return result;
}

async function updateGameService(productId, data) {
    const dto = new UpdateGameDTO(data);

    const exists = await findById(productId);
    if(exists === null) throw new Error("Jogo nao encontrado.");

    const result = await update(productId, dto);
    return result;
}

async function deleteGameService(productId) {
    const exists = await findById(productId);

    if(exists === null) throw new Error("Jogo nao encontrado.");

    const result = await del(productId);
    return result;
}

export { createGameService, findIdService, listGamesService, updateGameService, deleteGameService }