import { PALAVRAS RUINS } from "./palavrasruins.js";

const botaoMostraPalavras = document.querySelector('#botao mostraPalavrasChave');

botaoMostraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave() {
    const texto = document.querySelector('#entrada-de-texto').value;
    constcampoResultado = document.querySelector('#resultado-palavrachave');
    const palavraschave = processaTexto(texto);

    campoResultado.textContent = palavraschave.join(",");
}
