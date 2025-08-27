const Criatura = require("./Criatura.js");

class Gnomo extends Criatura{

    constructor(nome){
        super(nome, "Chuva de Cogumelos Tóxicos");
    }
    
    agir(){
        this.alterarEnergia(-5);
        return `${this.nome} invoca ${this.ataqueMagico}!`;
    }

    descansar(){
        this.alterarEnergia(15);
        return `${this.nome} descansou. Energia restaurada!`;
    }
}

module.exports = Gnomo;