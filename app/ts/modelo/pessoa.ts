class Pessoa {
    constructor(protected _nome: string, private _idade: string, private _dataNascimento: Date) { }

    get nome(): string { 
        return this._nome; 
    }
    set nome(nome: string) { 
        this._nome = nome; 
    }
    get idade(): string { 
        return this._idade; 
    }
    set idade(idade: string) { 
        this._idade = idade; 
    }
    get dataNascimento(): Date { 
        return this._dataNascimento; 
    }
    set dataNascimento(dataNascimento: Date) { 
        this._dataNascimento = dataNascimento; 
    }
    tostring(): string {
        return `Nome: ${this.nome}, Idade: ${this.idade}, Data de Nascimento: ${this.dataNascimento}`;
    }
}