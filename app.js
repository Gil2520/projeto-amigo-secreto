let adicionarAmigo = document.querySelector(".button-add");
let mostrarListaAmigos = document.getElementById("listaAmigos");
let inputAmigo = document.getElementById("amigo");
let botaoSortear = document.querySelector(".button-draw");
let resultado = document.getElementById("resultado");
const listaDeAmigos = [];

function adicionarAmigoNaLista(nome) {
  console.log("adicionarAmigo", nome);
  if (!nome.trim()) {
    alert("Por favor, insira um nome.");
    return;
  } else {
    const novoAmigo = { nome: nome.trim() };
    listaDeAmigos.push(novoAmigo);
  }
}

adicionarAmigo.addEventListener("click", function () {
  let nomeAmigo = inputAmigo.value;
  adicionarAmigoNaLista(nomeAmigo);

  mostrarListaAmigos.innerHTML = listaDeAmigos
    .map((amigo) => `<li>${amigo.nome}</li>`)
    .join("");

  inputAmigo.value = "";
});

function sortearAmigo() {
  if (listaDeAmigos.length === 0) {
    alert("Digite mais de um amigo para sortear.");
    return;
  }
  const indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
  const amigoSorteado = listaDeAmigos[indiceSorteado];
  resultado.textContent = `O amigo secreto sorteado é: ${amigoSorteado.nome}`;
  mostrarListaAmigos.innerHTML = [];
}

botaoSortear.addEventListener("click", function () {
  sortearAmigo();
});
