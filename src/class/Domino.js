class Domino {
    constructor(){
        this.valorPecasJogadorInicial = 6
        this.listaPecasMesa = []
        this.inicializaPecasCompraveis()
        this.inicializaJogadores()
    }

    // Distribui pecas entre os jogadores
    distribuiPecasEntreJogadores() {
        for (let i = 0; i < this.valorPecasJogadorInicial; i++) {
            this.listaJogadores.forEach(jogador => {
                let peca = this.listaPecasCompraveis.shift()
                jogador.compraPeca(peca)
            })
        }
    }

    // Imprime a lista de pecas de cada jogador
    imprimePecasJogadores() {
        this.listaJogadores.forEach(jogador => {
            jogador.imprimeInformacoesJogador()
        })
    }

    // Inicializando lista de jogadores
    inicializaJogadores() {
        this.listaJogadores = []

        this.perguntaQuantidadeJogadores() // pegar a quantidade de jogadores

        for (let i = 1; i <= this.numeroJogadores; i++) {
            let nomeJogador = prompt("Jogador " + i + ", qual o seu nome?")
            let jogador = new Jogador(nomeJogador, i)
            this.listaJogadores.push(jogador)
        }
    }

    // Define a quantidade de jogadores
    perguntaQuantidadeJogadores() {
        this.numeroJogadores = 0
        do {
            this.numeroJogadores = prompt("Informe a quantidade de jogadores: ")
        } while (this.numeroJogadores < 1 || this.numeroJogadores > 4)
    }

    // Inicializando lista de pecas compraveis
    inicializaPecasCompraveis() {
        this.listaPecasCompraveis = []

        let peca = null
        for (let i = 0; i <= 6; i++) {
            for (let j = 0; j <= i; j++) {
                peca = new Peca(i, j)
                this.listaPecasCompraveis.push(peca)
            }
        }
    }

    // Imprime o valor da lista de pecas
    imprimeListaPecasCompraveis(isLog) {
        if (isLog) {
            console.log(this.listaPecasCompraveis)
            return
        }

        console.log("Quantidade de pecas da mesa: " + this.listaPecasCompraveis.length)
        console.log("Pecas da mesa: " + this.listaPecasCompraveis.length)
        this.listaPecasCompraveis.forEach(peca => {
            peca.imprimePeca()
        })
    }

    // Embaralhar lista de pecas
    embaralharPecas() {
        this.listaPecasCompraveis.sort(() => (Math.random() > .5) ? 1 : -1)
    }

    // Getters
    getListaPecasCompraveis() {
        return this.listaPecasCompraveis
    }
}