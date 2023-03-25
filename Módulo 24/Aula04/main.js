function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo;  // this faz referencia ao Carro
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function() {
        console.log("vrum")
    }
}

const carroJoao2 = new Carro("Fiesta", "Ford", 2018, 2017); // com o new, temos o retorno do carro
const carroMaria2 = new Carro("Clio", "Renault", 2020, 2019);

console.log(carroJoao2);
console.log(carroMaria2);

const nome = "Gianni"
const idade = 34
const maiorDeIdade = true
const conhecimentos = ["html", "css", "js"]

const pessoa = {
    nome: nome,
    idade: idade,
    maiorDeIdade: maiorDeIdade,
    conhecimentos: conhecimentos,
}


function exibeAtributo(nomeAtributo) {
    console.log(pessoa[nomeAtributo])
}
exibeAtributo('nome');

// pessoa.sobrenome = 'gasparinetti';
// pessoa.sobrenome = null;
pessoa.sobrenome = undefined;
// pessoa.nome = 'jose'
Object.freeze(pessoa)

if (pessoa['sobrenome']) {
    console.log("a pessoa tem um sobrenome")
}

if ('sobrenome' in pessoa) {
    console.log("tem um sobrenome")
}

console.log(pessoa.nome)
console.log(pessoa['nome'])

console.log(Object.keys(pessoa)) 
console.log(Object.keys(pessoa).length) 
console.log(Object.values(pessoa)) 