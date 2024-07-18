class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(tipo) {
        if (tipo === 'guerreiro') {
            console.log(`O ${this.tipo} atacou usando espada`);
        } else if (tipo === 'mago') {
            console.log(`O ${this.tipo} atacou usando magia`);
        } else if (tipo === 'monge') {
            console.log(`O ${this.tipo} atacou usando artes marciais`);
        } else if (tipo === 'ninja') {
            console.log(`O ${this.tipo} atacou usando shuriken`);
        } else {
            console.log('Tipo inválido');
        }
    }
}

let heroi = new Hero('Arthur', 30, 'guerreiro');

heroi.atacar('guerreiro');
