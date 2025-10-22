import { createGameService, findIdService, listGamesService, updateGameService, deleteGameService } from "../services/gameService.js";

async function createGameController(req, res) {
    try{
        const created = await createGameService(req.body);
        return res.status(201).json(created);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
}

async function findIdController(req, res) {
    try{
        const game = await findIdService(req.params.id);
        return res.status(200).json(game);
    } catch (err) {
        return res.status(404).json({ error: err.message });
    }
}

async function listGamesController(req, res) {
    try{
        const games = await listGamesService();
        return res.status(200).json(games);
    } catch (err) {
        return res.status(404).json({ error: err.message });
    }
}

async function updateGameController(req, res) {
    try{
        const upd = await updateGameService(req.params.id, req.body);
        return res.status(200).json(upd);
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
}

async function deleteGameController(req, res) {
    try{
        const delt = await deleteGameService(req.params.id);
        return res.status(200).json(delt);
    } catch (err) {
        return res.status(404).json({ message: err.message });
    }
}

export { createGameController, findIdController, listGamesController, updateGameController, deleteGameController }