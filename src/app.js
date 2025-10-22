import { game } from './routes/game.routes.js';
import express from 'express';

const app = express();

app.use(express.json());
app.use('/api/produtos', game);

export { app }
