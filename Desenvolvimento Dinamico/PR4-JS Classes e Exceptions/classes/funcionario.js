class Funcionario {
    constructor(nome, idade, cargo) {
        if (!nome) {
            throw new Error("Nome é obrigatório.");
        }
        if (!idade || isNaN(idade) || idade <= 0) {
            throw new Error("Idade inválida.");
        }
        if (!cargo) {
            throw new Error("Cargo é obrigatório.");
        }

        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`;
    }

    trabalhar() {
        return `${this.nome} está trabalhando.`;
    }
}