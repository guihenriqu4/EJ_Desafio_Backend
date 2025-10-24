import { createGameService, findIdService, listGamesService, updateGameService, deleteGameService } from "../services/gameService.js";

/**
 * 
 * @async
 * @param { Request } req - Requisição HTTP a ser utilizada para adquirir os dados necessários para atender ao desejo do usuário
 * @param { Response } res - Resposta HTTP utilizada para retornar os dados solicitados pelo usuário
 * @returns { Promise<GameDTO> } Retorna um objeto com os dados do objeto criado através das funcionalidades das demais classes das quais esta depende
 */
async function createGameController(req, res) {
    try{
        const created = await createGameService(req.body);
        return res.status(201).json(created);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
}

/**
 * 
 * @param { Request } req - Requisição HTTP a ser utilizada para adquirir os dados necessários para atender ao desejo do usuário
 * @param { Response } res - Resposta HTTP utilizada para retornar os dados solicitados pelo usuário
 * @returns { Promise<GameDTO> } Retorna um objeto adquirido através das demais classes com os dados do jogo vinculado ao id informado pela usuário
 */
async function findIdController(req, res) {
    try{
        const game = await findIdService(req.params.id);
        return res.status(200).json(game);
    } catch (err) {
        return res.status(404).json({ error: err.message });
    }
}

/**
 * 
 * @param { Request } req - Requisição HTTP a ser utilizada para adquirir os dados necessários para atender ao desejo do usuário
 * @param { Response } res - Resposta HTTP utilizada para retornar os dados solicitados pelo usuário
 * @returns { Promise<GameDTO> } Retorna uma lista adquirida através das demais classes com todos os registros dos jogos encontrados
 */
async function listGamesController(req, res) {
    try{
        const games = await listGamesService();
        return res.status(200).json(games);
    } catch (err) {
        return res.status(404).json({ error: err.message });
    }
}

/**
 * 
 * @param { Request } req - Requisição HTTP a ser utilizada para adquirir os dados necessários para atender ao desejo do usuário
 * @param { Response } res - Resposta HTTP utilizada para retornar os dados solicitados pelo usuário
 * @returns { Promise<GameDTO> } Retorna um objeto com os dados do objeto atualizado
 */
async function updateGameController(req, res) {
    try{
        const upd = await updateGameService(req.params.id, req.body);
        return res.status(200).json(upd);
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
}

/**
 * 
 * @param { Request } req - Requisição HTTP a ser utilizada para adquirir os dados necessários para atender ao desejo do usuário
 * @param { Response } res - Resposta HTTP utilizada para retornar os dados solicitados pelo usuário
 * @returns { Promise<GameDTO> } Retorna um objeto com os dados do jogo excluído
 */
async function deleteGameController(req, res) {
    try{
        const delt = await deleteGameService(req.params.id);
        return res.status(200).json(delt);
    } catch (err) {
        return res.status(404).json({ message: err.message });
    }
}

export { createGameController, findIdController, listGamesController, updateGameController, deleteGameController }