const Gerente = require('./gerente');
const Desenvolvedor = require('./desenvolvedor');

const gerente = new Gerente("Admir", 43, "Gerente", "TI");
console.log(gerente.seApresentar());
console.log(gerente.trabalhar());
console.log(gerente.gerenciar());

console.log("=============================================================================================")

const dev = new Desenvolvedor("Admir", 43, "Desenvolvedor", "Javascript");
console.log(dev.seApresentar());
console.log(dev.trabalhar());
console.log(dev.programar());