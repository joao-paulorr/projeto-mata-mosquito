var altura = 0
var largura = 0
var vidas = 1

function ajustaTamanhoPalcoJogo() {

    altura = innerHeight
    largura = innerWidth

}

ajustaTamanhoPalcoJogo()

function posicaoRandomica() {
    // remover mosquito anterior, caso exista
    if (document.querySelector('#mosquito')) {
        document.querySelector('#mosquito').remove()
    }

    if (vidas > 3) {
        alert('Interromper o jogo')
    } else {
        document.querySelector('#v' + vidas).src = 'img/coracao_vazio.png'
        vidas++
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.ceil(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    // condicação ? expressão1 : expressão2

    // Criar o elemento mosquito
    var mosquito = document.createElement('img')

    mosquito.src = 'img/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){this.remove()}

    document.body.appendChild(mosquito)

}

// vai fazer algo automaticamente a cada periodo de tempo determinado
setInterval(function () {
    posicaoRandomica()
}, 1000)

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}
