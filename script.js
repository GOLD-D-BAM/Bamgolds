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
} else {
    img.setAttribute('src', './assets/Brunogomes.jpg')
}

}

document.addEventListener("DOMContentLoaded", () => {
  const item = document.getElementById("tnt");

  item.addEventListener("animationend", () => {
    item.style.display = "none"; // Faz desaparecer
  });
});

function abrirGaveta() {
  document.getElementById("gaveta").style.width = "250px";
}

function fecharGaveta() {
  document.getElementById("gaveta").style.width = "0";
}

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