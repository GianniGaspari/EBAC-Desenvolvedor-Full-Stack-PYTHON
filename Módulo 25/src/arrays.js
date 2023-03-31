const  redesSociais = ['Facebook', 'Instagram', 'Twitter', 'Github'];

for (let i = 0; i < redesSociais.length; i++) {
    console.log(`\nEu tenho perfil na rede social: ${redesSociais[i]}`)
}
console.log(``)
// polimorfismo 
// for (let i = 1; i <= redesSociais.length; i++) {
//     console.log(`Eu tenho perfil na rede social: ${redesSociais[i - 1]}`)
// }

// redesSociais[0]
// redesSociais[1]
// redesSociais[2]
// redesSociais[3]

redesSociais.forEach(function(nomeDaRedeSocial, indice) {
    console.log(`#${indice}: perfil na rede social: ${nomeDaRedeSocial}`)
})

const alunos = ['Gustavo', 'Olivia', 'Julia', 'Paula', 'Gianni', 'Wagner'];

const alunos2 = alunos.map(function(itemAtual) { // map é bastante utilizado em manipulação de dados
    return { // array de objetos
        nome: itemAtual,
        curso: 'Front-end' 
    }
})

console.log(alunos2)


const paula = alunos2.find(function(item) {
    return item.nome == 'Paula' // true or false
})
console.log(paula)

const indiceDaPaula = alunos2.findIndex(function(item) {
    return item.nome == 'Paula' // true or false
})
console.log(indiceDaPaula)


const gianni = alunos2.find(function(item) {
    return item.nome == 'Gianni' // true or false
})
console.log(gianni)

const indiceDoGianni = alunos2.findIndex(function(item) {
    return item.nome == 'Gianni' // true or false
})
console.log(indiceDoGianni)


// const numeros = [1, 2, 3, 4, 5]
// const dobroNumeros = numeros.map(function(numeroAtual) {
//     // numeroAtual = numeroAtual * 2;
//     return numeroAtual * 2;
// })

// console.log(dobroNumeros)