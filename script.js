let numero = document.querySelector('#contadorValor')

let count = 0

function add(){
    count++
    numero.innerText = count
}

function sub(){
    count--
    numero.innerText = count
}

function reset(){
    count = 0
    numero.innerText = count
}

