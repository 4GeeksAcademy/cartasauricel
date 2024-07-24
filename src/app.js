/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //boton click
  document
    .getElementById("generateButtom")
    .addEventListener("click", generateCard);

  // clic al boton aplicar dimensiones
  document
    .getElementById("generarDimensiones")
    .addEventListener("click", generarDimensiones);

  //funcion para generar la carta
  function generateCard() {
    const palos = ["pica", "trebol", "corazon", "diamante"];
    const valores = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    const simbolosPalos = {
      pica: "♠",
      trebol: "♣",
      corazon: "♥",
      diamante: "♦"
    };

    const paloAleatorio = palos[Math.floor(Math.random() * palos.length)];
    const valosAleatorio = valores[Math.floor(Math.random() * valores.length)];
    const carta = document.getElementById("card");

    carta.className = `card ${paloAleatorio}`;
    carta.innerHTML = `
        <span class="top-left simbol">${simbolosPalos[paloAleatorio]}</span>
        <span class="center number">${valosAleatorio} </span>
        <span class="bottom-right simbol">${simbolosPalos[paloAleatorio]} </span>
        `;
  }

  // El Usuario Aplicara las dimensiones
  function generarDimensiones() {
    const width = document.getElementById("width").value;
    const height = document.getElementById("height").value;
    const carta = document.getElementById("card");

    if (width && height) {
      carta.style.width = width + "px";
      carta.style.height = height + "px";
    } else {
      alert("Por favor, ingresa valores válidos para el ancho y altura.");
    }
  }

  // carta inicial cuando cargue la pagina
  generateCard();

  // temporizador para generar nueva carta cada 10 seg
  setInterval(generateCard, 10000);
};
