const estudantes = [
    { matricula: '2023001', nota: 7.5 },
    { matricula: '2023002', nota: 6.0 },
    { matricula: '2023003', nota: 8.0 },
    { matricula: '2023004', nota: 5.5 },
    { matricula: '2023005', nota: 9.0 }
  ]
  
  let soma = 0
  for (let i = 0; i < estudantes.length; i++) {
    soma += estudantes[i].nota
  }
  
  let media = soma / estudantes.length
  
  for (let i = 0; i < estudantes.length; i++) {
    if (estudantes[i].nota > media) {
      console.log(estudantes[i].matricula)
    }
  }
  