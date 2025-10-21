import { PrismaClient } from '../generated/prisma/index.js';
import { CreateProductDTO } from '../dtos/CreateProductDTO.js';
import { ProductDTO } from '../dtos/ProductDTO.js';
import { UpdateProductDTO } from '../dtos/UpdateProductDTO.js';

const prisma = new PrismaClient();

async function save(data) {
    const dto = new CreateProductDTO(data);

    const saved = await prisma.product.create({
        data: {
            nome: dto.nome,
            preco: dto.preco,
            categoria: dto.categoria
        }
    });

    return new ProductDTO(saved);
}

async function findById(id) {
    const found = await prisma.product.findUnique({
        where: {
            id: Number(id)
        }
    });

    if(!found) throw new Error("Nenhum produto encontrado.");

    return new ProductDTO(found);
}

async function list() {
    const listed = await prisma.product.findMany();

    return listed.map((p) => new ProductDTO(p));
}

async function update(productId, data) {
    const dto = new UpdateProductDTO(data);

    const exists = await findById(productId);

    if(!exists) throw new Error("Produto nao encontrado.");

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
    const exists = await findById(productId);

    if(!exists) throw new Error("Produto nao encontrado.");

    const deleted = await prisma.product.delete({
        where: { id: Number(productId) }
    });

    return new ProductDTO(deleted);
}

export { save, list, findById, update, del }