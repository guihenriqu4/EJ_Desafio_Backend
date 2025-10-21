import { prod } from "../routes/produto.routes.js";
import { createProductService, findIdService, listProductsService, updateProductService, deleteProductService } from "../services/productService.js";

async function createProductController(req, res) {
    try{
        const created = await createProductService(req.body);
        return res.status(201).json(created);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
}

async function findIdController(req, res) {
    try{
        const product = await findIdService(req.params.id);
        return res.status(200).json(product);
    } catch (err) {
        return res.status(404).json({ error: err.message });
    }
}

async function listProductsController(req, res) {
    try{
        const products = await listProductsService();
        return res.status(200).json(products);
    } catch (err) {
        return res.status(404).json({ error: err.message });
    }
}

async function updateProductController(req, res) {
    try{
        const upd = await updateProductService(req.params.id, req.body);
        return res.status(200).json(upd);
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
}

async function deleteProductController(req, res) {
    try{
        const delt = await deleteProductService(req.params.id);
        return res.status(200).json(delt);
    } catch (err) {
        return res.status(404).json({ message: err.message });
    }
}

export { createProductController, findIdController, listProductsController, updateProductController, deleteProductController }