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
    .getElementById("aplicarDimensiones")
    .addEventListener("click", aplicarDimensiones);

  //funcion para generar la carta

  function generateCard() {
    const palos = ["spade", "club", "heart", "diamond"];
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
      spade: "♠",
      club: "♣",
      heart: "♥",
      diamond: "♦"
    };

    const paloAleatorio = palos[Math.floor(Math.random() * palos.length)];
    const valosAleatorio = valores[Math.floor(Math.random() * valores.length)];
    const carta = document.getElementById("card");

    carta.className = `card ${paloAleatorio}`;
    carta.innerHTML = `
        <span class="top-left simbol">${simbolosPalos[paloAleatorio]}</span>
        <span class="center number">${valosAleatorio} </span>
        <span class="botton-rigth simbol">${simbolosPalos[paloAleatorio]} </span>
        `;
  }

  // Funcion para aplicar dimensiones especificas por el usuario
  function aplicarDimensiones(){
    const width = document.getElementById("width").value;
    const height = document.getElementById("height").value;
    const carta = document.getElementById("carta");

    if (width && height) {
      carta.style.width = width + "px";
      carta.style.height = height + "px";}
      else {
        aleert("Por favor, ingresa valores validos para el ancho y altura.");
      }
    }
    
  }
  // carta inicial cuando cargue la pagina
  generateCard();

  //temporizador para generar nueva carta cada 10seg
  setInterval(generateCard, 10000);
};
