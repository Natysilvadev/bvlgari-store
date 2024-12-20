const links = document.querySelectorAll(".header-menu a");
function ativarLink(link) {
  const url = location.href;
  console.log(url);
  const href = link.href;
  console.log(href);
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}
links.forEach(ativarLink);
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  console.log(parametro);
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);
  console.log(resposta);

  const ativa = resposta.classList.contains("ativa");
  resposta.classList.toggle("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventoPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventoPerguntas);

// const galeria = document.querySelectorAll(".relogio-imagens img");
// const galeriaContainer = document.querySelector(".relogio-imagens");

// function trocarImagem(event) {
//   const img = event.currentTarget;
//   const media = matchMedia("(min-width: 1000px)").matches;
//   if (media) {
//     galeriaContainer.prepend(img);
//   }
// }

// function eventosGaleria(img) {
//   img.addEventListener("click", trocarImagem);
// }

// galeria.forEach(eventosGaleria);
