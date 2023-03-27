class PessoaFisica extends Pessoa {
    _cpf;
    constructor(nome, idade, dataNascimento, _cpf) {
        super(nome + '-->> Pessoa Física', idade, dataNascimento);
        this._cpf = _cpf;
    }
    get cpf() {
        return this._cpf;
    }
    tostring() {
        return super.tostring() + ` Cpf: ${this.cpf}`;
    }
}
