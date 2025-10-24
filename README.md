# API de Gerenciamento de Jogos - Desafio ASCII Backend

Esta é uma API desenvolvida em Node.js para gerenciar um catálogo de jogos, permitindo operações de criação, leitura, atualização e exclusão de registros.

## Tecnologias Utilizadas

* **Node.js**: Ambiente de execução do JavaScript no servidor.
* **Express**: Framework para a construção da API.
* **Prisma**: ORM para a comunicação com o banco de dados.
* **PostgreSQL**: Banco de dados relacional utilizado no projeto.
* **Swagger**: Para documentação das rotas da API.

---

## Pré-requisitos

Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:
* [Node.js](https://nodejs.org/en/) (que já vem com o npm)
* [Git](https://git-scm.com/) (para clonar o repositório)
* Uma instância do **PostgreSQL** rodando localmente ou em um container Docker.

---

## Passo a Passo para Instalação e Execução

Siga as instruções abaixo para configurar e rodar o projeto em seu ambiente de desenvolvimento.

### 1. Clonar o Repositório

Primeiro, clone este repositório para a sua máquina local usando o seguinte comando:
```bash
git clone <URL_DO_REPOSITORIO>
```

Em seguida, acesse a pasta do projeto:
```bash
cd ej_desafio_back
```

### 2. Instalar as Dependências

Com o projeto clonado, instale todas as dependências listadas no arquivo package.json:
```bash
npm install
```

### 3. Configurar o Banco de Dados e Variáveis de Ambiente

A API precisa se conectar a um banco de dados PostgreSQL. Para isso, você deve configurar as variáveis de ambiente.

Crie uma cópia do arquivo chamado **.env-example** na raiz do projeto e preencha como solicitado.

**Importante**: Certifique-se de que o banco de dados especificado já tenha sido criado na sua instância do PostgreSQL.

### 4. Executar as Migrations do Prisma

Com o arquivo **.env** configurado, o Prisma precisa criar as tabelas no seu banco de dados. Execute o seguinte comando para aplicar as migrations existentes:
```bash
npx prisma migrate dev
```

Este comando irá ler o arquivo **schema.prisma** e criar a tabela **games** conforme definido.

### 5. Iniciar a API

Agora que tudo está configurado, você pode iniciar o servidor da API.
```bash
npm start
```

Após executar o comando, o servidor estará rodando. Geralmente, o acesso padrão é feito em http://localhost:3000 (verifique o console para a porta exata).

---

## Documentação da API (Swagger)

Este projeto utiliza Swagger para documentar os endpoints. Após iniciar o servidor, você pode acessar a documentação interativa através da seguinte URL:

http://localhost:3000/api-docs (ou a porta que seu servidor estiver usando)