class PessoaJuridica extends Pessoa {
    _cnpj;
    constructor(nome, idade, dataNascimento, _cnpj) {
        super(nome + 'Pessoa Jurídica', idade, dataNascimento);
        this._cnpj = _cnpj;
    }
    get cnpj() {
        return this._cnpj;
    }
    tostring() {
        return super.tostring() + ` Cnpj: ${this.cnpj}`;
    }
}
