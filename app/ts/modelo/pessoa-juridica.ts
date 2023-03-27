class PessoaJuridica extends Pessoa{
    constructor(nome: string, idade: string, dataNascimento: Date, private _cnpj: string) {
        super(nome + ' -->> Pessoa Jurídica', idade, dataNascimento);
    }

    get cnpj(): string { 
        return this._cnpj; 
    }
    
    tostring(): string {
        return super.tostring() + ` Cnpj: ${this.cnpj}`;
    }
}