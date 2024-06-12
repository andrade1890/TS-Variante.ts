// variaveis com tipos explicitos
let nome: string = "joão";
let idade: number = 20;
let adulto: boolean = true;

// variaveis com tipos inferidos
let sobrenome = "silva";
let alture =1.75;
let estudante= true;

// variaveis com tipo `any`
let variavelqualquer: any= "texto";
variavelqualquer = 123;

let novastring1: string = variavelqualquer; //sem erro de compilacão

// variaveis com tipo `unknown`
let variavelqualquer2: unknown = "texto";
variavelqualquer2 = 123;

// let novastring2: string = variavelqualquer2; //erro de compilacão