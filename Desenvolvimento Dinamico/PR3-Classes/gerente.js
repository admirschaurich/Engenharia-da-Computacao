const Funcionario = require("./funcionario");

class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);

        this.departamento = departamento;
    }

    gerenciar() {
        return `${this.nome} está gerenciando o departamento de ${this.departamento}.`;
    }
}

module.exports = Gerente;