class CreateProductDTO {
    constructor({ nome, preco, categoria }) {

        //Verifica a presença dos elementos necessários
        if(!nome) throw new Error("o campo 'nome' e obrigatorio.");
        if(!preco) throw new Error("o campo 'preco' e obrigatorio.");
        if(!categoria) throw new Error("o campo 'categoria' e obrigatorio.");

        //Verifica se os tipos dos elementos recebidos estão de acordo com o desejado
        if(typeof nome !== 'string' || nome.trim() === '') throw new Error("O campo 'nome' deve ser um texto nao vazio.");
        if(typeof preco !== 'number' || preco < 0) throw new Error("O campo 'preco' deve ser um numero positivo");
        if(typeof categoria !== 'string' || categoria.trim() == '') throw new Error("O campo 'categoria' deve ser um texto nao vazio");

        //Cria o objeto após as verificações
        this.nome = nome.trim();
        this.preco = preco;
        this.categoria = categoria.trim();
    }
}

export { CreateProductDTO }
