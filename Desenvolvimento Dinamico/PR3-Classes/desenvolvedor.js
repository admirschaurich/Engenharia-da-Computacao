const Funcionario = require("./funcionario");

class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);

        this.linguagem = linguagem;
    }

    programar() {
        return `${this.nome} está programando em ${this.linguagem}.`;
    }
}

module.exports = Desenvolvedor;