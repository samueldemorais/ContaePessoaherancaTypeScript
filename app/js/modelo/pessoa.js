class Pessoa {
    _nome;
    _idade;
    _dataNascimento;
    constructor(_nome, _idade, _dataNascimento) {
        this._nome = _nome;
        this._idade = _idade;
        this._dataNascimento = _dataNascimento;
    }
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
    get idade() {
        return this._idade;
    }
    set idade(idade) {
        this._idade = idade;
    }
    get dataNascimento() {
        return this._dataNascimento;
    }
    set dataNascimento(dataNascimento) {
        this._dataNascimento = dataNascimento;
    }
    tostring() {
        return `Nome: ${this.nome}, Idade: ${this.idade}, Data de Nascimento: ${this.dataNascimento}`;
    }
}
