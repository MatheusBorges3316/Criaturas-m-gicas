const Criatura = require("./Criatura.js");

class Dragao extends Criatura{

    constructor(nome, ataqueMagico){
        super(nome, ataqueMagico)
        this.ataqueMagico = "Sopro de Fogo Infernal";
    }

    agir(){
        this.alterarEnergia(-30);
        return `${this.nome} lança ${this.ataqueMagico}!`;
    }

    descansar(){
        this.alterarEnergia(15);
        return `${this.nome} descansou. Energia restaurada!`;
    }
}

module.exports = Dragao;