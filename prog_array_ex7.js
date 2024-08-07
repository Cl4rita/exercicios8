let vet = []
function gravar(){
    let resposta =  document.getElementById("resposta")
    console.log(resposta)
    let vetx = Number(document.getElementById("vetx").value)
    console.log(vetx)

    vet.push(vetx)

    console.log(vet)
}
function contaEx7(){
    let somaElem = 0

    for(i=0; i<7; i++){
        somaElem += vet[i]
    }
    console.log("O resultado da soma dos elementos é: " + somaElem)
    resposta.innerHTML = "O resultado da soma dos elementos é: " + somaElem
}