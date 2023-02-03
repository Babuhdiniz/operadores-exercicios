let numero1 = Number(prompt("Digite o primeiro número:"))
let numero2 = Number(prompt("Digite o segundo número:"))


let maiorQue = numero1 > numero2
let igual = numero1 === numero2
let divisivelNumero1 = numero1 % numero2
let divisivelNumero2 = numero1 % numero1
let restoNumero1 = divisivelNumero1 === 0
let restoNumero2 = divisivelNumero2 === 0

console.log (`
O primeiro numero é maior que o segundo? ${maiorQue}
O primeiro numero é igual ao segundo? ${igual}
O primeiro numero é divisível pelo segundo? ${restoNumero1}
O segundo numero é divisível pelo primeiro? ${restoNumero2}
`)


