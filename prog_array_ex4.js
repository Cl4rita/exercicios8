function contaEx4(){
    let x = Number(document.getElementById("x").value)
    console.log(x)
    let resposta =  document.getElementById("resposta")
    console.log(resposta)

    let vetor = [1, 2, 3, 4, 5]
    console.log(vetor)

    let somaVet = []

    for(i=0; i<5; i++){

        somaVet[i] = vetor[i] + x
    }
    console.log("O resultado da multiplicação é: " + somaVet)
    resposta.innerHTML = "O resultado da multiplicação é: " + somaVet
}
