class pessoa {
    nome: string;
    idade: number;
    email?: string;

    constructor(nome: string, idade: number, email?: string) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }
    apresentar():void {
        console.log(`Ola, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
     if (this.email) {
         console.log(`Meu email é ${this.email}`);
     }
    }        
}

let joao2 = new pessoa("joão", 20);
let maria2 = new pessoa("maria", 25, "maria@maria");

joao2.apresentar();
maria2.apresentar();