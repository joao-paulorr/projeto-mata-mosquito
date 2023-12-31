var altura = 0
var largura = 0
var vidas = 1
var tempo = 30
var criaMosquitoTempo = 1500
var nivel = window.location.search

nivel = nivel.replace('?', '')

if (nivel == 'normal'){
    criaMosquitoTempo = 1500
} else if (nivel == 'dificil'){
    criaMosquitoTempo = 1000
} else if(nivel == 'impossivel'){
    criaMosquitoTempo == 500
}

function ajustaTamanhoPalcoJogo() {

    altura = innerHeight
    largura = innerWidth

}

var cronometro = setInterval(function () {
    tempo -= 1

    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criarMosquito)
        window.location.href = 'vitoria.html'
    } else {
        document.querySelector('#cronometro').innerHTML = tempo
    }
}, 1000)

ajustaTamanhoPalcoJogo()

function posicaoRandomica() {
    // remover mosquito anterior, caso exista
    if (document.querySelector('#mosquito')) {
        document.querySelector('#mosquito').remove()

        if (vidas > 3) {
            location.href = 'fim_de_jogo.html'
        } else {
            document.querySelector('#v' + vidas).src = 'img/coracao_vazio.png'
            vidas++
        }
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
    mosquito.onclick = function () { this.remove() }

    document.body.appendChild(mosquito)

}

// vai fazer algo automaticamente a cada periodo de tempo determinado
var criarMosquito = setInterval(function () {
    posicaoRandomica()
}, criaMosquitoTempo)

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
