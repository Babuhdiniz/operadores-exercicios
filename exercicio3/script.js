
const op1 = 5 > 20 && 5 < 2
console.log(op1)
// falso, porque 5 não é maior que 20 e nem menor que 2. Temos falso e falso = falso

const op2 = 5 === 5 || 5 === '5'
console.log(op2)
// falso. 5 é igual a 5, mas 5 não é igual a string 5. Então temos true e falso, devolvendo falso

const op3 = !(20 > 50)
console.log(op3)
// true, pois 20 não é maior que 50

const op4 = !(20 > 50 || 50 > 60)
console.log(op4)
//true, pois 20 não é maior que cinquenta e true porque 50 não é maior que sessenta. Os 2 são true.



//Exercício 3, parte 2, 1
const salario = 2000
const auxilioCreche = 45.5 * 2
const salarioMaisAuxilio = salario + auxilioCreche
console.log(`O salário + o auxílio creche é de: ${salarioMaisAuxilio}`)

//2
const comissaoJan = 5784.50 * 0.1
console.log(`A comissão de Janeiro foi de: ${comissaoJan}`)

//3
const descontoInssJan = (salario + comissaoJan) * 0.5
console.log(`O desconto de INSS de Janeiro será de: ${descontoInssJan}`)

//4
const salarioLiquidoJan = (salarioMaisAuxilio + comissaoJan) - descontoInssJan
console.log(`O valor do salário líquido de Janeiro é de ${salarioLiquidoJan}`)



const comissaoFev = 3418.41 * 0.1
console.log(`A comissão de Fevereiro foi de: ${comissaoFev}`)
const descontoInssFev = (salario + comissaoFev) * 0.5
console.log(`O desconto de INSS de Fevereiro será de: ${descontoInssFev}`)
const salarioLiquidoFev = (salarioMaisAuxilio + comissaoFev) - descontoInssFev
console.log(`O valor do salário líquido de Fevereiro é de ${salarioLiquidoFev}`)

const comissaoMar = 4124.10 * 0.1
console.log(`A comissão de Março foi de: ${comissaoMar}`)
const descontoInssMar = (salario + comissaoMar) * 0.5
console.log(`O desconto de INSS de Março será de: ${descontoInssMar}`)
const salarioLiquidoMar = (salarioMaisAuxilio + comissaoMar) - descontoInssMar
console.log(`O valor do salário líquido de Março é de ${salarioLiquidoMar}`)

const comissaoAbr = 1874 * 0.1
console.log(`A comissão de Abril foi de: ${comissaoAbr}`)
const descontoInssAbr = (salario + comissaoAbr) * 0.5
console.log(`O desconto de INSS de Abril será de: ${descontoInssAbr}`)
const salarioLiquidoAbr = (salarioMaisAuxilio + comissaoAbr) - descontoInssAbr
console.log(`O valor do salário líquido de Abril é de ${salarioLiquidoAbr}`)

const comissaoMai = 7000 * 0.1
console.log(`A comissão de Maio foi de: ${comissaoMai}`)
const descontoInssMai = (salario + comissaoMai) * 0.5
console.log(`O desconto de INSS de Maio será de: ${descontoInssMai}`)
const salarioLiquidoMai = (salarioMaisAuxilio + comissaoMai) - descontoInssMai
console.log(`O valor do salário líquido de Maio é de ${salarioLiquidoMai}`)

const comissaoJun = 9450 * 0.1
console.log(`A comissão de Junho foi de: ${comissaoJun}`)
const descontoInssJun = (salario + comissaoJun) * 0.5
console.log(`O desconto de INSS de Junho será de: ${descontoInssJun}`)
const salarioLiquidoJun = (salarioMaisAuxilio + comissaoJun) - descontoInssJun
console.log(`O valor do salário líquido de Junho é de ${salarioLiquidoJun}`)

//5
const mediaSalario = (salarioLiquidoJan + salarioLiquidoFev + salarioLiquidoMar + salarioLiquidoAbr + salarioLiquidoMai + salarioLiquidoJun) / 6
console.log(`A média do salário em 6 meses é de: ${mediaSalario}`)

