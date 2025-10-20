import { PrismaClient } from '../generated/prisma/index.js';
import { CreateProductDTO } from '../dtos/CreateProductDTO.js';
import { ProductDTO } from '../dtos/ProductDTO.js';

const prisma = new PrismaClient();

async function save(data) {
    const dto = new CreateProductDTO(data);

    const product = await prisma.product.create({
        data: {
            nome: dto.nome,
            preco: dto.preco,
            categoria: dto.categoria
        }
    });

    return new ProductDTO(product);
}

async function findById(id) {
    const product = await prisma.product.findUnique({
        where: {
            id: Number(id)
        }
    });

    if(!product) throw new Error("Nenhum produto encontrado.");

    return new ProductDTO(product);
}

async function list() {
    const products = await prisma.product.findMany();

    return products.map((p) => new ProductDTO(p));
}

export { save, list, findById }