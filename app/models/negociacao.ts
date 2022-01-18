// AULA 1

export class Negociacao {
    constructor(
        // PROPRIEDADE  PRIVADA:
        private _data: Date,

        // PROPRIEDADES SÃO PÚBLICAS, PORÉM, APENAS     LEITURA:
        public readonly quantidade: number,
        public readonly valor: number
    ) {}

    get data(): Date {
        const data = new Date(this._data.getTime());
        return this.data;
    }

    get volume(): number {
        // GETTER - POSSUI A FUNÇÃO DE ACESSAR AS PROPRIEDADES DO CONSTRUCTOR:
        return this.quantidade * this.valor;
    }

    /* 
        FORMA VERBOSA DE MODELAR A CLASSE E O CONSTRUCTOR:
            constructor(
                public data: Date,
                public quantidade: number,
                public valor: number
            ) {}

            get data(): Date {
                return this.data;
            }

            get quantidade(): number {
                return this.quantidade;
            }

            get valor(): number {
                return this.valor;
            }

            get volume(): number {
                return this.quantidade * this.valor;
            }
    */
}
