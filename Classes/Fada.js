const Criatura = require("./Criatura.js");

class Fada extends Criatura{

    constructor(nome, ataqueMagico){
        super(nome, ataqueMagico)
        this.ataqueMagico = "Bola de Luz Arco-Íris";

    }

    agir(){
        this.alterarEnergia(-15);
        return `${this.nome} ataca com ${this.ataqueMagico}!`;
    }

    descansar(){
        this.alterarEnergia(15);
        return `${this.nome} descansou. Energia restaurada!`;
    }
}

module.exports = Fada;