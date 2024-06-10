let nomepessoa: string = "joão";

interface pessoaInterface {
    nome: string;
    idade: number;
    email?: string;
}
function apresentarpessoa(pessoa: pessoaInterface) {
    console.log(`Ola, meu nome é ${pessoa.nome} e eu tenho ${pessoa.idade} anos.`);
    if (pessoa.email){
        console.log(`Meu email é ${pessoa.email}`);
    }
}
let joao: pessoaInterface = { nome: "joão", idade: 20 };
let maria: pessoaInterface = { nome: "maria", idade: 25, email: "maria@maria" };

apresentarpessoa(joao);
apresentarpessoa(maria);
    


