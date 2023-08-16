var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo() {

    altura = innerHeight
    largura = innerWidth

    // console.log(altura, largura)
}

ajustaTamanhoPalcoJogo()

function posicaoRandomica() {

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.ceil(Math.random() * altura) - 90

    // Criar o elemento mosquito
    var mosquito = document.createElement('img')
    mosquito.src = 'img/mosca.png'
    mosquito.className = 'mosquito1'
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'

    document.body.appendChild(mosquito)

}

posicaoRandomica()
