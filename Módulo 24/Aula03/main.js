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

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof maiorDeIdade);
console.log(typeof conhecimentos);
console.log(typeof pessoa);
console.log(typeof carroMaria2);

console.log(carroMaria2 instanceof Carro);
console.log(conhecimentos instanceof Carro);
console.log(conhecimentos instanceof Array);