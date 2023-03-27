class Conta {
    
    constructor(private _numero: string, private _saldo: number = 0) {
    }

    debitar(valor: number){
        if (this._saldo >= valor){
            this._saldo -= valor;
        }
    }

    creditar(valor: number){
        this._saldo += valor;
    }

    transferir(destino: Conta, valor: number){
        this.debitar(valor);
        destino.creditar(valor);
    }

    get numero(): string {
        return this._numero;
    }

    set numero(numero: string) {
        this._numero = numero;
    }

    get saldo(): number {
        return this._saldo;
    }       
    
    set saldo(saldo: number) {
        this._saldo = saldo;
    }
}
