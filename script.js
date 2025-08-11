const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "h2o",
        alternativas: [
            {
                texto: "Agua",
                afirmacao: "Agua!"
            },
            {
                texto: "Refrigerante",
                afirmacao: "Não e agua"
            }
        ]
    },
    {
        enunciado: "Siginificado de RG",
        alternativas: [
            {
                texto: "Resgate de Animais marinhos",
                afirmacao: "Algo normalmente feito por ONG's"
            },
            {
                texto: "Registro Geral",
                afirmacao: "Numero unico, dado a todos os brasileiros"
            }
        ]
    },
    {
        enunciado: "Sigla PC",
        alternativas: [
            {
                texto: "Partido Comunista",
                afirmacao: "Auto descritivo"
            },
            {
                texto: "Computador",
                afirmacao: "Uma especie de celular fixo"
            }
        ]
    },
    {
        enunciado: "Brasil",
        alternativas: [
            {
                texto: "E um pais",
                afirmacao: "se que sabe"
            },
            {
                texto: "E um país",
                afirmacao: "fica a duvida"
            }
        ]
    },
    {
        enunciado: "Positivo",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Boa sorte"
            },
            {
                texto: "Não",
                afirmacao: "OK"
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
    caixaPerguntas.textContent = "";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
