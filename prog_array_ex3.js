function contaEx3(){
    let resposta =  document.getElementById("resposta")
    console.log(resposta)

    let vetor = [1, 2, 3, 4, 5]
    console.log(vetor)

    let somaVet = []

    for(i=0; i<5; i++){

        somaVet[i] = vetor[i] + 7
    }
    console.log("O resultado da soma é: " + somaVet)
    resposta.innerHTML = "O resultado da soma é: " + somaVet
}
