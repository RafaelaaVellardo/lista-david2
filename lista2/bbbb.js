const notas = [9.0, 5.0, 6.5, 4.0, 2.5, 5.5, 5.5, 3.0, 5.0, 3.0]

let total = notas.length
let conceitoA = 0
let conceitoB = 0
let conceitoC = 0
let conceitoD = 0
let conceitoE = 0

for (let i = 0; i < total; i++) {
  let nota = notas[i]

  if (nota >= 9 && nota <= 10) {
    conceitoA++
  } else if (nota >= 7 && nota < 9) {
    conceitoB++
  } else if (nota >= 5 && nota < 7) {
    conceitoC++
  } else if (nota >= 3 && nota < 5) {
    conceitoD++
  } else if (nota >= 0 && nota < 3) {
    conceitoE++
  } else {
    console.log("Nota inválida encontrada:", nota)
  }
}

let percA = (conceitoA / total) * 100
let percB = (conceitoB / total) * 100
let percC = (conceitoC / total) * 100
let percD = (conceitoD / total) * 100
let percE = (conceitoE / total) * 100

console.log("Percentual de conceitos:")
console.log("A: " + percA.toFixed(2) + "%")
console.log("B: " + percB.toFixed(2) + "%")
console.log("C: " + percC.toFixed(2) + "%")
console.log("D: " + percD.toFixed(2) + "%")
console.log("E: " + percE.toFixed(2) + "%")
