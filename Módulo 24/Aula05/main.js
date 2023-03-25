function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + " diz oi");
    }
}

function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    this.salario = salario;

    this.dizCargo = function() {
        console.log(this.cargo);
    }

    Pessoa.call(this, nome);
}

const funcionario1 = new Funcionario("Maria", "dev front-end", 5000);
const pessoa = new Pessoa("giancoro");

funcionario1.dizOi();
funcionario1.dizCargo();
// pessoa.dizCargo();