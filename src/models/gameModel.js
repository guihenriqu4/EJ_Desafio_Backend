import { GameDTO } from '../dtos/GameDTO.js';
import { PrismaClient } from '../generated/prisma/index.js';
const prisma = new PrismaClient();

/**
 * 
 * @param {*} dto 
 * @returns 
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

async function findById(productId) {
    const found = await prisma.game.findUnique({
        where: { id: Number(productId) }
    });

    if(!found) return null;

    return new GameDTO(found);
}

async function findAll() {
    const list = await prisma.game.findMany();

    if(Object.keys(list).length === 0) return null;

    return list.map((p) => new GameDTO(p));
}

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

async function del(productId) {
    const delt = await prisma.game.delete({
        where: { id: Number(productId) }
    });

    return new GameDTO(delt);
}

export { save, findById, findAll, update, del }
