let form = document.getElementById("valida_numero")

let campoA = document.getElementById("campoA")
let campoB = document.getElementById("campoB")

let campoValido = false

function validaCampo(campoA, campoB){
    let campo_A = parseInt(campoA)
    let campo_B = parseInt(campoB)

    return campo_B > campo_A
}


form.addEventListener('submit', function(evento){
    evento.preventDefault()

    const goodMessage = 'Campo B maior que o campo A'
    const badMessage = 'Campo A maior que o campo B'

    campoValido = validaCampo(campoA.value, campoB.value)

    if (campoValido){
        document.querySelector("#good_message").innerHTML = goodMessage
        document.querySelector("#bad_message").style.display = 'none'
        document.querySelector("#good_message").style.display = 'block'

    } else {
        document.querySelector("#bad_message").innerHTML = badMessage
        document.querySelector("#good_message").style.display = 'none'
        document.querySelector("#bad_message").style.display = 'block'
    }
})
