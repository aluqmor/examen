import { Juego } from "../js/Juego.js";

document.addEventListener("DOMContentLoaded", () => {
    const juego = new Juego('.contenedor-cartas', '.contenedor', '.carta');
    juego.iniciar();
});