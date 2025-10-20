import { prod } from './routes/produto.routes.js';
import express from 'express';

const app = express();

app.use(express.json());
app.use('/api/produto', prod);

export { app }
