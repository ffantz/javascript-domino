class Jogador {
    constructor(nome, numeroJogador) {
        this.nome = (nome !== undefined && nome !== null && nome !== "") ? nome : "jogador " + numeroJogador
        this.listaPecas = []
    }

    // Adiciona +1 peca na mao do jogador
    compraPeca(peca) {
        this.listaPecas.push(peca)
    }

    // Remove uma peca da mao do jogador
    jogaPeca(indexPeca) {
        if (indexPeca > -1) {
            let peca = this.listaPecas[indexPeca]
            this.listaPecas.splice(indexPeca, 1)
            return peca
        } else {
            return false
        }
    }

    // Exibe informacoes do jogador
    imprimeInformacoesJogador() {
        this.imprimePecasJogador()
    }

    // Exibe nome do jogador
    imprimeNomeJogador() {
        console.log(this.nome)
    }

    // Exibe pecas do jogador
    imprimePecasJogador() {
        console.log("Pecas do " + this.nome)
        this.listaPecas.forEach(peca => {
            peca.imprimePeca()
        })
    }
}