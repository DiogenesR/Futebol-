const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Desde que viemos ao mudo existe um esporte chamado futebol, mais voce já se perguntou como o futebol surgiu?",
        alternativas: [
            {
                texto: "nao",
                afirmacao: "Não se interessa pelo futebol. "
            },
            {
                texto: "sim ",
                afirmacao: "Você é um craque de bola."
            }
        ]
    },
    {
        enunciado: " Não se sabe com precisão a data em que o futebol surgiu. Historiadores contam que os ingleses adquiriram o hábito de chutar uma bola de couro, símbolo da cabeça de um membro do exército da Dinamarca, como forma de comemorar a expulsão dos dinamarqueses de seu país ainda no século X. Você sabe quando foi a primeira partida de futebol? ",
        alternativas: [
            {
                texto: "Não, nunca pesquisei.",
                afirmacao: "Não se interessa pelo assunto."
            },
            {
                texto: "Não, mais quero saber.",
                afirmacao: "Você é um brasileiro legitimo."
            }
        ]
    },
    {
        enunciado: "A primeira partida de futebol foi realizada em 1864. Com quantas regras essa partida foi realizada?",
        alternativas: [
            {
                texto: "Não sei,nunca procurei.",
                afirmacao: "Você nasceu no Brasil mesmo ?."
            },
            {
                texto: "foi com 14 regras.",
                afirmacao: "Você é curioso, a vida nao é só futebol."
            }
        ]
    },
    {
        enunciado: "Dentre todos os seculos do futebol, existe dois grandes jogadores que revolucionaram o futebol, quem sssssssão eles ?",
        alternativas: [
            {
                texto: "Pelé e Maradona.",
                afirmacao: "Você sabe muito, porem está errado."
            },
            {
                texto: "Messi e Cristiano Ronaldo.",
                afirmacao: "Seu conhecimento é muito grande, incrível!"
            }
        ]
    },
    {
        enunciado: "Esses dois jogadores são os maiores de todos os tempos, mais qual você acha que é o GOAT? ",
        alternativas: [
            {
                texto: "Cristiano Ronaldo.",
                afirmacao: "Boa escolha, Mais está errado."
            },
            {
                texto: "Messi.",
                afirmacao: "Perfeito, você é um entendedor de futebol. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Futuramente...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
