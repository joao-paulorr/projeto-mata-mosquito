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

    // Criar o elemento mosquito
    var mosquito = document.createElement('img')
    mosquito.src = ''


}

posicaoRandomica()
