let chamadaComObjetos = [
    {
      nome: "Cauã",
      idade: 37,
      ra: "220077",
    },
    {
      nome: "Pedro",
      idade: 19,
      ra: "331188",
    },
    {
      nome: "Mock",
      idade: 17,
      ra: "442299",
    },
  ]
  
  //console.log(chamadaComObjetos) //Mostra td
  //console.log(chamadaComObjetos[0].nome) // Mostra só o nome
  
  // Mostre todos os nomes em ordem alfabética)
  console.log('-------NOMES-------')
  for(i = 0; i < chamadaComObjetos.length; ++i){
      console.log(chamadaComObjetos[i].nome)
  }
  console.log('-------IDADES-------')
  for(i = 0; i < chamadaComObjetos.length; ++i){
      console.log(chamadaComObjetos[i].idade)
  }
  // Mostre todas as idade acima de 18 (if-else e for)
  console.log('-------+18-------')
  for(i = 0; i < chamadaComObjetos.length; ++i){
    if (chamadaComObjetos[i].idade>18) {
        console.log(chamadaComObjetos[i].idade)
    }
      
  }
  
  
  
  
  