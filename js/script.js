var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo() {

    altura = innerHeight
    largura = innerWidth

    // console.log(altura, largura)
}

ajustaTamanhoPalcoJogo()

function posicaoRandomica() {

    var posicaoX = Math.floor(Math.random() * largura)
    var posicaoY = Math.ceil(Math.random() * altura)

    console.log(posicaoX, posicaoY)
}

posicaoRandomica()
