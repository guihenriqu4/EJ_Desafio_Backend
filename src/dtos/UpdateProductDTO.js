class UpdateProductDTO {
    constructor ({ nome, preco, categoria }) {
        if(nome !== undefined && (typeof nome !== 'string' || nome.trim() == '')) throw new Error("O campo nome deve ser um texto nao vazio");

        if(preco !== undefined && (typeof preco !== 'number' || preco < 0)) throw new Error("O campo preco deve ser um numero positivo");

        if(categoria !== undefined && (typeof categoria !== 'string' || categoria.trim() == '')) throw new Error("O campo categoria deve ser um texto nao vazio");

        this.nome = nome?.trim();
        this.preco = preco;
        this.categoria = categoria?.trim();
    }
}

export { UpdateProductDTO }