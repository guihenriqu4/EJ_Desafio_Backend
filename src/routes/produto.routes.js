import { Router } from 'express';
import { createProductController, deleteProductController, findIdController, listProductsController, updateProductController } from '../controllers/productController.js';

const prod = Router();

prod.get('/', listProductsController);

prod.get('/:id', findIdController);

prod.post('/', createProductController);

prod.put('/:id', updateProductController);

prod.delete('/:id', deleteProductController);

export { prod }
