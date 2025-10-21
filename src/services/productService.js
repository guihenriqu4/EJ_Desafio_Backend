import { CreateProductDTO } from '../dtos/CreateProductDTO.js';
import { UpdateProductDTO } from '../dtos/UpdateProductDTO.js';
import { del, findAll, findById, save, update } from '../models/productModel.js';


async function createProductService(data) {
    const dto = new CreateProductDTO(data);
    const result = await save(dto);
    return result;
}

async function findIdService(id) {
    const result = await findById(id);
    if(result === null) throw new Error("Produto nao encontrado.");
    return result;
}

async function listProductsService() {
    const result = await findAll();
    if(result === null) throw new Error("Nenhum produto encontrado");
    return result;
}

async function updateProductService(productId, data) {
    const dto = new UpdateProductDTO(data);

    const exists = await findById(productId);
    if(exists === null) throw new Error("Produto nao encontrado.");

    const result = await update(productId, dto);
    return result;
}

async function deleteProductService(productId) {
    const exists = await findById(productId);

    if(exists === null) throw new Error("Produto nao encontrado.");

    const result = await del(productId);
    return result;
}

export { createProductService, findIdService, listProductsService, updateProductService, deleteProductService }