/*Escreva um código em que, após o cliente solicitar a escolha da bebida, 
a opção ‘switch’ deve avaliar a opção selecionada e atribuir o valor correspondente à variável ‘valor’. 
Caso o cliente escolha uma opção inválida, uma mensagem informativa é exibida, 
indicando que a escolha deve ser feita entre café, leite ou chá. Por fim, 
se uma opção válida for selecionada, exibimos uma mensagem personalizada informando 
o nome da bebida escolhida e o valor a ser pago, formatado com duas casas decimais.*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true
});

rl.question('Digite a opção desejada: café, leite ou chá: ', (option) => {
    let value = 0;

    switch (option.trim()) {
        case 'café':
            value = 7;
            break;

        case 'leite':
            value = 3.50;
            break;

        case 'chá':
            value = 2.10;
            break;

        default:
            value = 0.00;
            console.log(`Opção não encontrada. Você deve selecionar uma das opções: café, leite ou chá.`);
            rl.close();
            return;
    }

    console.log(`Você selecionou a bebida ${option} e custa ${value.toFixed(2)}`);
    rl.close();
});
