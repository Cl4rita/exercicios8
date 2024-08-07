let vet = []
function gravar(){
    let resposta =  document.getElementById("resposta")
    console.log(resposta)
    let vetx = Number(document.getElementById("vetx").value)
    console.log(vetx)

    vet.push(vetx)

    console.log(vet)
}
function contaEx8(){
    for(i=0; i<5; i++){
        vet.reverse()
    }
    console.log("A ordem inversa é: " + vet)
    resposta.innerHTML = "A ordem inversa é: " + vet
}