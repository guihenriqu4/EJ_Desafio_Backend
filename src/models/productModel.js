import { ProductDTO } from '../dtos/ProductDTO.js';
import { PrismaClient } from '../generated/prisma/index.js';
const prisma = new PrismaClient();

async function save(dto) {
    const saved = await prisma.product.create({
        data: {
            nome: dto.nome,
            preco: dto.preco,
            categoria: dto.categoria
        }
    });

    return new ProductDTO(saved);
}

async function findById(productId) {
    const found = await prisma.product.findUnique({
        where: { id: Number(productId) }
    });

    if(!found) return null;

    return new ProductDTO(found);
}

async function findAll() {
    const list = await prisma.product.findMany();

    if(Object.keys(list).length === 0) return null;

    return list.map((p) => new ProductDTO(p));
}

async function update(productId, dto) {
    const updated = await prisma.product.update({
        where: { id: Number(productId) },
        data: {
            nome: dto.nome,
            preco: dto.preco,
            categoria: dto.categoria
        }
    });

    return new ProductDTO(updated);
}

async function del(productId) {
    const delt = await prisma.product.delete({
        where: { id: Number(productId) }
    });

    return new ProductDTO(delt);
}

export { save, findById, findAll, update, del }
