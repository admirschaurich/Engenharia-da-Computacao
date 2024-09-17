function criarFuncionario() {
    try {
        const nome = document.getElementById("nome").value;
        const idade = document.getElementById("idade").value;
        const cargo = document.getElementById("cargo").value;
        const departamento = document.getElementById("departamento").value;
        const linguagem = document.getElementById("linguagem").value;

        let funcionario;
        if (cargo === "gerente") {
            funcionario = new Gerente(nome, idade, cargo, departamento);            
        } else if (cargo === "desenvolvedor") {
            funcionario = new Desenvolvedor(nome, idade, cargo, linguagem);
        } else {
            throw new Error("Cargo inválido. Por favor, selecione 'Gerente' ou 'Desenvolvedor'.");
        }

        exibirResultado(funcionario.seApresentar(), 
                        funcionario.trabalhar(), 
                        cargo === "gerente" ? funcionario.gerenciar() : funcionario.programar());

        document.getElementById("erro").innerHTML = "";
    } catch (error) {
        exibirErro(error.message);
    }
}

function exibirResultado(apresentacao, trabalho, acao) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <p>${apresentacao}</p>
        <p>${trabalho}</p>
        <p>${acao}</p>
    `;
}

function exibirErro(mensagem) {
    const erroDiv = document.getElementById("erro");
    erroDiv.innerHTML = mensagem;
}

function atualizarCampos() {
    const cargoSelecionado = document.getElementById("cargo").value;
    const campoDepartamento = document.getElementById("campo-departamento");
    const campoLinguagem = document.getElementById("campo-linguagem");

    if (cargoSelecionado === "gerente") {
        campoDepartamento.style.display = "block";
        campoLinguagem.style.display = "none";
    } 
    else if (cargoSelecionado === "desenvolvedor") {
        campoDepartamento.style.display = "none";
        campoLinguagem.style.display = "block";
    } 
    else {
        campoDepartamento.style.display = "none";
        campoLinguagem.style.display = "none";
    }
}