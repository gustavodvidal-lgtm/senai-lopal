//let nota = Number(prompt("digite a sua nota:"))
//if (nota >= 6) {
   //bloco de código ->true
  // alert("aprovado!") 
//} else if (nota >= 4) {

       // alert("reprovado")
//}
 //else {
       // alert("reprovado")
//}

//let idade = Number(prompt("digite sua idade"))

//if (idade <= 12) {
   // alert("criaça")
    
//}
//else if (idade <= 18) {
  //  alert("adolecente")
//} 
//else if (idade <= 60){
  //  alert("adulto")
//}
//else {
  //  alert("idoso")

//}

// let valor = Number(prompt("digite o valor da sua compra!"))

// if (valor <=100) {
//     alert("sem desconto!")
// }else if (valor <=299,99) {
//     let desconto =valor * 0.1
//     let valor_total = valor - desconto
//     alert(`10% de desconto: ${valor_total}`)
// }else if (valor <=499.99){
//     let desconto = valor * 0.8
//     let valor_total = valor - desconto
//     alert(`20% de desconto: ${valor_total}`)
// }else {
//     let valor_total = valor * 0.7
//     alert(`desconto de 30%: ${valor_total}`)}

let valor = Number(prompt("digite o valolr"))
let Descomto = Number(prompt("digite o desconto"))
let descontado = (desconto/100) * valor
let valor_final = valor - desconto

alert(`valor a pagar: ${valor_final}`)