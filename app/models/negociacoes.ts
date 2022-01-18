import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Negociacao[] = [];

    /* 
        OUTRA FORMA DE DECLARAR O TIPO DE ARRAY: 
            private negociacoes: Array<Negociacao> = [];
    */
    
    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    lista(): readonly Negociacao[] {
        /* 
        OUTRA FORMA DE DECLARAR O TIPO DE ARRAY USANDO O READONLY: 
            lista(): ReadonlyArray<Negociacao>    
    */
        return this.negociacoes;
    }
}