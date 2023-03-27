class PessoaFisica extends Pessoa{

    constructor(nome: string, idade: string, dataNascimento: Date, private _cpf: string) {
        super(nome + '-->> Pessoa Física', idade, dataNascimento);
    }

    get cpf(): string { 
        return this._cpf; 
    }

    tostring(): string {
        return super.tostring() + ` Cpf: ${this.cpf}`;
    }
}