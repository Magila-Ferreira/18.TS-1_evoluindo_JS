// AULA 1

import { Negociacao } from "./models/negociacao.js";
import { NegociacaoController } from "./controllers/negociacao-controller.js";

/* INSTANCIANDO A CLASSE_NEGOCIAÇÃO */
const negociacao = new Negociacao(new Date(), 10, 100);

/* INSTANCIANDO A CLASSE_NEGOCIAÇÃO-CONTROLLER */
const controller = new NegociacaoController();

/* LINKE DO FORMULÁRIO AO JS */
const form = document.querySelector('.form');

/* ADICIONA UM EVENTO DO TIPO SUBMIT AO FORMULÁRIO */
form.addEventListener('submit', event => {
    event.preventDefault();
    /* O EVENTO CHAMA A FUNÇÃO_ADICIONA DA CLASSE_NEGOCIAÇÃO-CONTROLLER */
    controller.adiciona();
})



/* RODAR APLICAÇÃO NO NAVEGADOR:
    npm run start
*/