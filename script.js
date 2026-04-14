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
