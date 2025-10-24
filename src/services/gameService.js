import { CreateGameDTO } from '../dtos/CreateGameDTO.js';
import { GameDTO } from '../dtos/GameDTO.js';
import { UpdateGameDTO } from '../dtos/UpdateGameDTO.js';
import { del, findAll, findById, save, update } from '../models/gameModel.js';

/**
 * 
 * @async
 * @param {{ nome: string, preco: number, categoria: string }} data - Dados disponibilizados pelo usuário no corpo da requisição 
 * @returns { Promise<GameDTO> } Retorna um objeto com os dados adquiridos da classe service
 */
async function createGameService(data) {
    const dto = new CreateGameDTO(data);
    const result = await save(dto);
    return result;
}

/**
 * 
 * @async
 * @param { number } id - Id a ser passado para a classe service
 * @returns { Promise<GameDTO> } Retorna um objeto com os dados do jogo retornado pela classe service
 * @throws { Error } Lança um erro caso o resultado retornado pela classe service seja nulo, isto é, o jogo não tenha sido encontrado
 */
async function findIdService(id) {
    const result = await findById(id);
    if(result === null) throw new Error("Jogo nao encontrado.");
    return result;
}

/**
 * 
 * @async
 * @returns { Promise<GameDTO> } Retorna uma lista de objetos com os dados de todos os registros de jogos recebidos da classe service
 * @throws { Error } Lança um erro caso o resultado retornado pela classe service seja nulo, isto é, não tenha sido encontrado registros de jogos
 */
async function listGamesService() {
    const result = await findAll();
    if(result === null) throw new Error("Nenhum jogo encontrado");
    return result;
}

/**
 * 
 * @async
 * @param { number } productId - Id a ser passado para a classe service com o objetivo de atualizar jogo
 * @param {{ nome?: string, preco?: number, categoria?: string }} data - Dados a serem atualizados disponibilizados pelo usuário no corpo da requisição
 * @returns { Promise<GameDTO> } Retorna um objeto recebido da classe service com os dados do jogo atualizado
 * @throws { Error } Lança um erro caso o resultado retornado pela classe service seja nulo, isto é, o jogo a ser atualizado não tenha sido encontrado
 */
async function updateGameService(productId, data) {
    const dto = new UpdateGameDTO(data);

    const exists = await findById(productId);
    if(exists === null) throw new Error("Jogo nao encontrado.");

    const result = await update(productId, dto);
    return result;
}

/**
 * 
 * @async
 * @param { number } productId - Id a ser passado para a classe service com o objetivo de excluir um jogo
 * @returns { Promise<GameDTO> } Retorna um objeto recebido da classe service com os dados do jogo excluído
 * @throws { Error } Lança um erro caso o resultado retornado pela classe service seja nulo, isto é, o jogo a ser excluído não tenha sido encontrado
 */
async function deleteGameService(productId) {
    const exists = await findById(productId);

    if(exists === null) throw new Error("Jogo nao encontrado.");

    const result = await del(productId);
    return result;
}

export { createGameService, findIdService, listGamesService, updateGameService, deleteGameService }