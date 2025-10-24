import { app } from './app.js';

//Configuração da porta via variável ambiente a ser definida pelo desenvolvedor ou constante
const port = process.env.PORT || 8080;

//Acionamento do servidor com retorno via log
app.listen(port, () => console.log(`Servidor inicializado no endereco http://localhost:${port}`));
