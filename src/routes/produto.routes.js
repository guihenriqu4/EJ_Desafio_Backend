import { Router } from 'express';
import { createProductController, delProductController, getProductById, listProductsController, updateProductController } from '../controllers/productController.js';

const prod = Router();

prod.get('/', listProductsController);

prod.get('/:id', getProductById);

prod.post('/', createProductController);

prod.put('/:id', updateProductController);

prod.delete('/:id', delProductController);

export { prod }
