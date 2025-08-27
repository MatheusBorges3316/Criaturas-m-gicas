class Criatura{
    nome;
    ataqueMagico;
    #energia;

    constructor(nome, ataqueMagico){
        this.nome = nome;
        this.ataqueMagico = ataqueMagico;
        this.#energia = 100;
    }

    get energia(){
        return this.#energia;
    }

    set energia(energia){
        this.#energia = energia; 
    }


    alterarEnergia(valor){
        this.#energia += valor;
        return `${this.nome} agora tem ${this.#energia} de energia`;
    }

    agir(){
        this.alterarEnergia(-10);
        return `${this.nome} usa ${this.ataqueMagico}!`;
    }

    descansar(){
        this.alterarEnergia(15);
        return `${this.nome} descansou. Energia restaurada!`;
    }
}

module.exports = Criatura;