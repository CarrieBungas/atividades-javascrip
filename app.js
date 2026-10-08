
/* ==========================================
   BLOCO 1 – FUNDAMENTOS E VARIÁVEIS
========================================== */

let pontos = 20;
pontos = pontos + 10;
console.log("Pontos:", pontos); // 30

// 2. Constante MAX_PONTOS
const MAX_PONTOS = 100;
console.log("Máximo de pontos:", MAX_PONTOS);


try {
    MAX_PONTOS = 200;
} catch (erro) {
    console.log("Erro ao reatribuir MAX_PONTOS:", erro.name);
    console.log("Motivo: uma constante não pode receber outro valor.");
}

const texto = "Olá, JavaScript!";
const numero = 42;
const ativo = true;
let indefinido;
const nulo = null;

console.log("Tipo de texto:", typeof texto);      
console.log("Tipo de numero:", typeof numero);    
console.log("Tipo de ativo:", typeof ativo);   
console.log("Tipo de indefinido:", typeof indefinido); 
console.log("Tipo de nulo:", typeof nulo);         




const nome = "Ana";
const idade = 20;

const fraseTemplate = `Meu nome é ${nome} e tenho ${idade} anos.`;
const fraseConcatenacao =
    "Meu nome é " + nome + " e tenho " + idade + " anos.";

console.log("Template Literals:", fraseTemplate);
console.log("Concatenação:", fraseConcatenacao);


/* ==========================================
   BLOCO 2 – FUNÇÕES
========================================== */


console.log("Maior de idade:", ehMaiorDeIdade(20));

function ehMaiorDeIdade(idade) {
    return idade >= 18;
}

try {
    console.log(ehMaiorDeIdadeExpressao(20));
} catch (erro) {
    console.log("Erro na função de expressão:", erro.name);
}

const ehMaiorDeIdadeExpressao = function (idade) {
    return idade >= 18;
};

console.log(
    "Função de expressão após declaração:",
    ehMaiorDeIdadeExpressao(20)
);


function dobro(n) {
    return n * 2;
}

const dobroExpressao = function (n) {
    return n * 2;
};


const dobroArrow = n => n * 2;

console.log("Dobro (declarada):", dobro(5));
console.log("Dobro (expressão):", dobroExpressao(5));
console.log("Dobro (arrow):", dobroArrow(5));


function dobroPadrao(n = 1) {
    return n * 2;
}

console.log("Dobro de 5:", dobroPadrao(5));
console.log("Dobro sem argumento:", dobroPadrao());


/* ==========================================
   BLOCO 3 – CONTROLE DE FLUXO
========================================== */


function classificarNota(nota) {
    if (nota >= 6) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

console.log("Nota 8:", classificarNota(8));
console.log("Nota 4:", classificarNota(4));


const corSemaforo = "amarelo";

switch (corSemaforo) {
    case "vermelho":
        console.log("Pare");
        break;
    case "amarelo":
        console.log("Atenção");
        break;
    case "verde":
        console.log("Siga");
        break;
    default:
        console.log("Cor inválida");
}


console.log("Tabuada do 5:");

for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}


console.log("Contagem regressiva:");

let contagem = 5;

while (contagem >= 1) {
    console.log(contagem);
    contagem--;
}


console.log("Par ou ímpar com for:");

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`${i}: par`);
    } else {
        console.log(`${i}: ímpar`);
    }
}


console.log("Par ou ímpar com while:");

let numeroAtual = 1;

while (numeroAtual <= 20) {
    if (numeroAtual % 2 === 0) {
        console.log(`${numeroAtual}: par`);
    } else {
        console.log(`${numeroAtual}: ímpar`);
    }

    numeroAtual++;
}


function diaDaSemana(numero) {
    switch (numero) {
        case 1:
            return "Domingo";
        case 2:
            return "Segunda-feira";
        case 3:
            return "Terça-feira";
        case 4:
            return "Quarta-feira";
        case 5:
            return "Quinta-feira";
        case 6:
            return "Sexta-feira";
        case 7:
            return "Sábado";
        default:
            return "Número inválido";
    }
}

console.log("Dia 1:", diaDaSemana(1));
console.log("Dia 4:", diaDaSemana(4));
console.log("Dia 7:", diaDaSemana(7));
console.log("Dia 9:", diaDaSemana(9));