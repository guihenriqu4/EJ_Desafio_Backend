import { Router } from 'express';
import { createProductController, getProductById, listProductsController } from '../controllers/productController.js';

const prod = Router();

prod.get('/', listProductsController);

prod.get('/:id', getProductById);

prod.post('/', createProductController);

// prod.put('/:id', (req, res) => {
//     return res.status(201).send("Hello World!");
// });

// prod.delete('/:id', (req, res) => {
//     return res.status(201).send("Hello World!");
// });

export { prod }
