
/*funcão responsavel pela troca de back */
function togglemode() {
const html = document.documentElement

html.classList.toggle('light')    
///if (html.classList.contains('light')) 
   /// html.classList.remove('light')
/// else 
   /// html.classList.add('light')

const img = document.querySelector('#box-1')
 
if (html.classList.contains('light'))
    {

    img.setAttribute('src','./assets/lima.png')
}

 else {
    img.setAttribute('src', './assets/Brunogomes.jpg')
}


}
/* ↓ Função responsável por fazer desaparecer o item com ID "tnt" após a animação terminar */
document.addEventListener("DOMContentLoaded", () => {
  const item = document.getElementById("tnt");
/* ↓ Adiciona um ouvinte de evento para quando a animação terminar */
  item.addEventListener("animationend", () => {
    item.style.display = "none"; // Faz desaparecer
  });
});

/* ↓ Função responsável por fazer desaparecer o item com ID "conquista" após a animação terminar */
document.addEventListener("DOMContentLoaded", () => {
  const item = document.getElementById("conquista");
/* ↓ Adiciona um ouvinte de evento para quando a animação terminar */
  item.addEventListener("animationend", () => {
    item.style.display = "none"; // Faz desaparecer
  });
});


/* ↓ Função responsável por abrir a gaveta */
function abrirGaveta() {
  document.getElementById("gaveta").style.width = "250px";
}
/* ↓ Função responsável por fechar a gaveta */
function fecharGaveta() {
  document.getElementById("gaveta").style.width = "0";
}
/* ↓ Função responsável por exibir os botões de navegação */
function proximo() {
    document.getElementById("next").style.display = ""
    document.getElementById("return").style.display = ""
}

/* ↓ Função responsável por exibir a área de informações */
function exibirformacoes() {

    /* ↓ Procura o elemento com o ID "formacoesinfo"
       ↓ e altera sua largura para 250px */
    document.getElementById("formacoesinfo").style.width = "250px";
}


/* ↓ Função responsável por fechar a área de informações */
function fecharinformacoes() {

    /* ↓ Procura o elemento com o ID "formacoesinfo"
       ↓ e altera sua largura para 0 */
    document.getElementById("formacoesinfo").style.width = "0";
}



/* ↓ Guarda o botão que está atualmente selecionado */
let botaoAtual = null;



/* ↓ Função responsável por abrir ou fechar o popup */
function togglePopup(botao, titulo, texto) {

    /* ↓ Procura o popup pelo ID */
    const popup = document.getElementById("popup");


    /* ↓ Verifica se clicou novamente no mesmo botão */
    if (botaoAtual === botao) {

        /* ↓ Fecha o popup */
        popup.classList.remove("ativo");

        /* ↓ Limpa o botão atual */
        botaoAtual = null;

        return;
    }


    /* ↓ Coloca o título dentro do popup */
    document.getElementById("popup-titulo").textContent = titulo;


    /* ↓ Coloca o texto dentro do popup */
    document.getElementById("popup-texto").textContent = texto;


    /* ↓ Abre o popup */
    popup.classList.add("ativo");


    /* ↓ Guarda qual botão foi clicado */
    botaoAtual = botao;
}



/* ↓ Função responsável por fechar o popup através do X */
function fecharPopup() {

    /* ↓ Procura o popup */
    const popup = document.getElementById("popup");


    /* ↓ Remove a classe "ativo"
       ↓ fazendo o popup desaparecer */
    popup.classList.remove("ativo");


    /* ↓ Informa que nenhum botão está selecionado */
    botaoAtual = null;
}

/* ↓ Guarda a posição atual do carrossel */
let posicao = 0;


/* ↓ Define quantos pixels cada clique vai movimentar */
const distancia = 116; // Ajuste conforme necessário


/* ↓ Função da seta → */
function proximo() {

    /* ↓ Pega o <ul> que contém todas as tecnologias */
    const lista = document.querySelector("#formacoes ul");


    /* ↓ Conta quantos <li> existem */
    const itens = lista.querySelectorAll("li");


    /* ↓ Avança uma posição */
    posicao++;


    /* ↓ Define quantos itens podem ficar visíveis */
    const visiveis = 6;


    /* ↓ Calcula o limite */
    const limite = itens.length - visiveis;


    /* ↓ Impede que passe do último item */
    if (posicao > limite) {
        posicao = limite;
    }


    /* ↓ Move o <ul> para a esquerda */
    lista.style.transform =
        `translateX(-${posicao * distancia}px)`;
}



/* ↓ Função da seta ← */
function voltar() {

    /* ↓ Pega o <ul> */
    const lista = document.querySelector("#formacoes ul");


    /* ↓ Volta uma posição */
    posicao--;


    /* ↓ Impede de passar do primeiro item */
    if (posicao < 0) {
        posicao = 0;
    }


    /* ↓ Move o <ul> para a direita */
    lista.style.transform =
        `translateX(-${posicao * distancia}px)`;
}