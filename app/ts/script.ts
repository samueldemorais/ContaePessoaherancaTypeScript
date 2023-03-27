const c1 = new Conta('1', 100);
const c2 = new Conta('2');

const contaController = new ContaController();
contaController.adicionarConta(c1);
contaController.adicionarConta(c2);
contaController.listar();

const contaBonificada = new ContaBonificada('10', 100);
contaBonificada.creditar(10);
console.log(contaBonificada.saldo);


const Pessoa1 = new Pessoa('João', '12', new Date(1999, 10, 21));
const PessoaFisica1 = new PessoaFisica('Samuel', '10', new Date(2000, 10, 28), '123456789-10');
const PessoaJuridica1 = new PessoaJuridica('Pedro', '22', new Date(2001, 12, 28) , '12345678910');


// const repContas = new RepositorioContas();
//
// const c1 = new Conta('1', 100);
// const c2 = new Conta('2');
//
// repContas.adicionar(c1);
// repContas.adicionar(c2);
//
// repContas.getContas().forEach(conta => console.log(conta.numero))

// console.log(c1.saldo)
// console.log(c2.saldo)
//
// c1.saldo = 200;
//
// c1.debitar(50);
// c2.creditar(1000);
// console.log(c1.saldo)
// console.log(c2.saldo)
//
// c2.transferir(c1, 500);
// console.log(c1.saldo)
// console.log(c2.saldo)
