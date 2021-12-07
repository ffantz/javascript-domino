class Peca {
    constructor(valorEsquerda, valorDireita) {
        if (valorEsquerda !== undefined && valorDireita !== undefined) {
            this.valorEsquerda = valorEsquerda
            this.valorDireita  = valorDireita
        } else {
            console.log("peca vazia")
        }
    }

    // Imprimir o valor da peca
    imprimePeca() {
        console.log("[" + this.valorEsquerda + "|" + this.valorDireita + "]")
    }

    // Getters
    getValorPeca() {
        return this.valorEsquerda + this.valorDireita
    }
}