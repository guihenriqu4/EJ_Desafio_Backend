//DTO responsável por gerenciar os dados recebidos do banco de dados e retornados para o usuário
class GameDTO {
    constructor({ id, nome, preco, categoria, createdAt, updatedAt }) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}

export { GameDTO }