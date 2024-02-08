const pessoa = {
    nome: "Jorge",
    idade: 23,
    altura: 1.75,
    temCNH: true,
    apelidos: ["Jorginho", "Jorjão", "Jorgito"]
}
const pessoa2 = {
    nome: "Ana",
    idade: 18,
    altura: 1.65,
    temCNH: false,
    apelidos: ["Aninha", "Anita", "Ani"]
}

for (let chave in pessoa) {
    console.log(chave, pessoa[chave])
}
console.log('-------------------')

const pessoas = [pessoa, pessoa2]
for (let i = 0; i < pessoas.length; i++) {
    console.log(pessoas[i])
}
console.log('-------------------')

pessoas.forEach(aluno => {
    for (let j = 0; j < aluno.nome.length; j++) {
        console.log(aluno.nome[j])
    }
})
console.log('-------------------')
console.log(pessoas.nome
)