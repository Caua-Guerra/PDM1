let chamada = [
    {
        nome: "João",
        idade: 15,
        materiasCursadas: ["TIA", "PDM", "BD1", "BD2", "AOS"]
    },
    {
        nome: "Ana",
        idade: 17,
        materiasCursadas: ["TIA", "PDM", "AOS"]
    },
    {
        nome: "Debroi",
        idade: 20,
        materiasCursadas: ["TIA", "PDM", "BD1", "AOS"]
    },
    {
        nome: "Jorge",
        idade: 19,
        materiasCursadas: ["TIA", "PDM", "BD1", "BD2", "AOS"]
    },
    {
        nome: "Brayan",
        idade: 18,
        materiasCursadas: ["BD1", "BD2"]
    },
]
// Printe cada objeto do array chamada (BÁSICO)

// Printe o nome de cada objeto do array chamada (BÁSICO)

// Printe o nome de cada objeto do array chamada que tenha idade maior que 18 (BÁSICO)

// Organize a array chamada em ordem alfabética (BÁSICO)

// Printe o nome de cada objeto do array chamada que tenha idade maior que 18 e que tenha cursado a matéria TIA (MÉDIO)

// Organize a array chamada em ordem alfabética, só alunos que cursaram mais de 3 matérias, mostando o objeto de uma maneira mais bonita (DIFÍCIL)
// Exemplo:
/*
nome: Ana
idade: 17
materiasCursadas: AOS, BD1, BD2, PDM, TIA
*/
var i = 0
let a = []
let b = [[],[]]
while (i < chamada.length) {
    const teste = chamada[i].nome
    console.log(teste)
    a[i] = teste
    ++i
}
a.sort()
console.log(a)
var i = 0

while (i < chamada.length) {
    for(o = 0; o < chamada.length; ++o){
        console.log(o)
        //materiasCursadas.sort()
        //console.log(chamada[i].materiasCursadas[o])
        const mc = chamada[i].materiasCursadas[o]
        //console.log(mc)
        b[i][o] = mc
        console.log(b[i][o])

   }
   ++i
}

//b.sort()
console.log(b)


