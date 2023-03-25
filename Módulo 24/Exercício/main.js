class Animal {
    constructor(nome, idade, peso) {
        if (this.constructor === Animal) {
        throw new TypeError("Não é possível criar instâncias da classe abstrata diretamente");
    }
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    }

    fazerSom() {
        throw new Error("O método 'fazerSom()' precisa ser implementado.");
    }

    exibirInformacoes() {
        console.log(`Nome: ${this.nome} \nIdade: ${this.idade} \nPeso: ${this.peso}Kg \n`);
    }
}


class Cachorro extends Animal {
    fazerSom() {
        console.log("Au au!");
    }
}

class Gato extends Animal {
    fazerSom() {
        console.log("Miau!");
    }
}


const meuCachorro = new Cachorro("Bradoque", 5, 50);
const outroCachorro = new Cachorro("Kate", 3, 8);
const meuGato = new Gato("Meggie", 16, 4);


meuCachorro.fazerSom();
meuCachorro.exibirInformacoes();
outroCachorro.fazerSom();
outroCachorro.exibirInformacoes();
meuGato.fazerSom();
meuGato.exibirInformacoes();
