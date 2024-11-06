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
