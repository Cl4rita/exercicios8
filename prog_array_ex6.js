function contaEx6(){
    let resposta =  document.getElementById("resposta")
    console.log(resposta)

    let somaVets = []

    for(i=0; i<5; i++){

        somaVets[i] = vetor1[i] - vetor2[i]
    }
    console.log("O resultado da soma é: " + somaVets)
    resposta.innerHTML = "O resultado da soma é: " + somaVets
}
vetor1 = []
vetor2 = []

function gravar(){
    let vet1 = Number(document.getElementById("vet1").value)
    console.log(vet1)
    let vet2 = Number(document.getElementById("vet2").value)
    console.log(vet2)

    vetor1.push(vet1)
    vetor2.push(vet2)

    console.log(vetor1)
    console.log(vetor2)
}