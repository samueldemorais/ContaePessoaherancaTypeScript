class Conta {
    _numero;
    _saldo;
    constructor(_numero, _saldo = 0) {
        this._numero = _numero;
        this._saldo = _saldo;
    }
    debitar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
        }
    }
    creditar(valor) {
        this._saldo += valor;
    }
    transferir(destino, valor) {
        this.debitar(valor);
        destino.creditar(valor);
    }
    get numero() {
        return this._numero;
    }
    set numero(numero) {
        this._numero = numero;
    }
    get saldo() {
        return this._saldo;
    }
    set saldo(saldo) {
        this._saldo = saldo;
    }
}
