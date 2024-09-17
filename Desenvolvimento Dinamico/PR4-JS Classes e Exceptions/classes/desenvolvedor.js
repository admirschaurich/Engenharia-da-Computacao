class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        
        if (!linguagem) {
            throw new Error("Linguagem de Programação é obrigatória para o cargo de Desenvolvedor.");
        }

        this.linguagem = linguagem;
    }

    programar() {
        return `${this.nome} está programando em ${this.linguagem}.`;
    }
}