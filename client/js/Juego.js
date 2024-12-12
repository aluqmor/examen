import { uiDrag } from "../js/uiDrag.js";
import { Carta } from "../js/Carta.js";

export class Juego {
    constructor(contenedorCartasSelector, contenedorSelector, cartaSelector) {
        this.contenedorCartasSelector = contenedorCartasSelector;
        this.contenedorSelector = contenedorSelector;
        this.cartaSelector = cartaSelector;
        this.palos = ['bastos', 'espadas', 'copas', 'oros'];
        this.numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }

    iniciar() {
        this.crearElementosDOM();
        this.crearCartas();
        this.drag();
    }

    crearElementosDOM() {
        const body = document.body;
        const mesa = document.createElement('div');
        mesa.classList.add('mesa');
        const contenedores = [
            { palo: 'bastos', texto: 'BASTOS (VERDE)' },
            { palo: 'espadas', texto: 'ESPADAS (AZUL)' },
            { palo: 'copas', texto: 'COPAS (ROJO)' },
            { palo: 'oros', texto: 'OROS (AMARILLO)' }
        ];
        contenedores.forEach(contenedorInfo => {
            const contenedor = document.createElement('div');
            contenedor.classList.add('contenedor');
            contenedor.dataset.palo = contenedorInfo.palo;
            contenedor.textContent = contenedorInfo.texto;
            mesa.appendChild(contenedor);
        });
        const contenedorCartas = document.createElement('div');
        contenedorCartas.classList.add('contenedor-cartas');
        body.appendChild(mesa);
        body.appendChild(contenedorCartas);
        this.contenedorCartas = contenedorCartas;
    }
    
    crearCartas() {
        this.palos.forEach(palo => {
            this.numeros.forEach(numero => {
                const carta = Carta.crearCarta(palo, numero);
                this.contenedorCartas.appendChild(carta);
            });
        });
    }

    drag() {
        uiDrag.init(this.contenedorSelector, this.cartaSelector);
    }
    
}