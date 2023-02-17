// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)}


// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
const altura = Number(prompt("2"))
const largura = Number(prompt("6"))
const retangulo = altura * largura
console.log(retangulo)}

      
// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
const anoAtual = Number(prompt("2021"))
const anoDeNascimento = Number(prompt("1967"))
const idade = anoAtual - anoDeNascimento
console.log(idade)}


// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
const IMC = peso / (altura * altura)
return IMC}


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const meuNome = prompt("João")
const minhaIdade = Number(prompt("25"))
const meuEmail = prompt("joao@gmail.com")
const mensagem = `Meu nome é ${meuNome}, tenho ${minhaIdade} anos, e o meu email é ${meuEmail}.`
console.log(mensagem)}


// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const cor1 = prompt("cor 1")
const cor2 = prompt("cor 2")
const cor3 = prompt("cor 3")
const guardar = [cor1, cor2, cor3]
console.log(guardar)}

// // EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
const nomeMaiusculo = string.toUpperCase()
return nomeMaiusculo}

 
// // // EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
//   // implemente sua lógica aqui
const ingressosVendidos = custo / valorIngresso
return ingressosVendidos}
console.log(ingressosVendidos)



// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
return string1.length === string2.length}


    
// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
const primeiroElemento = array[0]
return primeiroElemento}


// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
const copiaArray = array
const ultimoElemento = copiaArray[array.length-1]
return ultimoElemento}


// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
 // implemente sua lógica aqui
const primeiraCopia = array[0]
const segundaCopia = array[array.length-1]

array.shift()
array.pop()

array.push(primeiraCopia)
array.unshift(segundaCopia)

return array}



// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
return string1.toLowerCase(3) === string2.toLowerCase(3)}
  


// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
const anoAtual = Number(prompt("Digite o ano Atual?"))
const nacimento = Number(prompt("Digite o ano do seu nacimento?"))
const emissaoDaIndentidade = Number(prompt("Qual o ano da emissao da RG?"))
const idade = anoAtual - nacimento
const emissaoRG = anoAtual - emissaoDaIndentidade

const tempoVinteOuMenor = (idade <= 20) && (emissaoRG >= 5)
const tempoVinteOuMaior = (idade > 20 ) && (idade <= 50) && (emissaoRG >= 10)
const pessoasCinquntaMais = (idade > 50) && (emissaoRG >= 15)
const resultato = tempoVinteOuMenor || tempoVinteOuMaior || pessoasCinquntaMais
console.log(resultato)}

  

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
const condicao1 = ano % 400 === 0
const condicao2 = (ano % 4 === 0) && !(ano % 100 === 0 && ano % 400 !== 0)
return condicao2}


// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
const idade = prompt('Você tem mais de 18 anos?')
const ensinoMedio = prompt('Você possui ensino médio completo?')
const horarioDeCurso = prompt('Voce possui disponibilidade exclusiva durante os horarios do curso?')

console.log(idade === "sim" && ensinoMedio === "sim" && horarioDeCurso === "sim")}
