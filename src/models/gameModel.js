import { GameDTO } from '../dtos/GameDTO.js';
import { PrismaClient } from '../generated/prisma/index.js';
const prisma = new PrismaClient();

/**
 * 
 * @async
 * @param {{ nome: string, preco: number, categoria: string }} dto - Objeto com os dados jogo a ser salvo
 * @returns {Promise<GameDTO>} Retorna um objeto com os dados do jogo salvo formatado como GameDTO
 */
async function save(dto) {
    const saved = await prisma.game.create({
        data: {
            nome: dto.nome,
            preco: dto.preco,
            categoria: dto.categoria
        }
    });

    return new GameDTO(saved);
}


/**
 * 
 * @async
 * @param { number } productId - Id do jogo a ser buscado no banco de dados
 * @returns { Promise<GameDTO | null } Retorna um objeto com os dados do jogo em formato GameDTO caso ele exista, ou 'null' caso não
 */
async function findById(productId) {
    const found = await prisma.game.findUnique({
        where: { id: Number(productId) }
    });

    if(!found) return null;

    return new GameDTO(found);
}

/**
 * 
 * @async
 * @returns { Promise<GameDTO> | null } - Lista de jogos armazenados no banco de dados
 */
async function findAll() {
    const list = await prisma.game.findMany();

    if(Object.keys(list).length === 0) return null;

    return list.map((p) => new GameDTO(p));
}

/**
 * 
 * @async
 * @param { number } productId - Id do produto a ser alterado no banco de dados
 * @param {{ nome: string, preco: number, categoria: string }} dto - Objeto no formato updateGameDTO com os dados a serem alterados
 * @returns { Promise<GameDTO> } Retorna um objeto com os dados do jogo atualizado
 */
async function update(productId, dto) {
    const updated = await prisma.game.update({
        where: { id: Number(productId) },
        data: {
            nome: dto.nome,
            preco: dto.preco,
            categoria: dto.categoria
        }
    });

    return new GameDTO(updated);
}

/**
 * 
 * @async
 * @param { number } productId  - Id do jogo a ser eliminado do banco de dados
 * @returns { Promise<GameDTO> } Retorna um objeto com os dados do jogo excluído
 */
async function del(productId) {
    const delt = await prisma.game.delete({
        where: { id: Number(productId) }
    });

    return new GameDTO(delt);
}

export { save, findById, findAll, update, del }
