import { prod } from "../routes/produto.routes.js";
import { save, list, findById } from "../services/productService.js";

async function createProductController(req, res) {
    try{
        const product = await save(req.body);
        return res.status(201).json(product);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
}

async function getProductById(req, res) {
    try{
        const product = await findById(req.params.id);
        return res.json(product);
    } catch (err) {
        return res.status(404).json({ error: err.message });
    }
}

async function listProductsController(req, res) {
    try{
        const products = await list();
        return res.json(products);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
}

export { createProductController, getProductById, listProductsController }