// OBJETO 1
const carroJoao = {
    // atributos
    modelo: 'Fiesta',
    fabricante: 'Ford',
    anoModelo: 2018,
    anoFabricacao: 2017,
    // método
    acelerar: function() { 
        console.log("vrum");
    }
}

// OBJETO 2
const carroMaria = {
    // atributos
    modelo: 'Clio',
    fabricante: 'Renault',
    anoModelo: 2020,
    anoFabricacao: 2019,
    // método
    acelerar: function() { 
        console.log("vrum");
    }
}


// FUNÇÃO MELHORADA DO CÓDIGO ACIMA 
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


function Pessoa(nome, idade, altura, peso) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    this.peso = peso;
}

const Gianni = new Pessoa("Gianni Gasparinetti", 34, 180, 79);
const Thamy = new Pessoa("Thamy Gasparinetti", 34, 160, 63);

console.log(Gianni);
console.log(Thamy);