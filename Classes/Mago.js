const Criatura = require("./Criatura.js");

class Mago extends Criatura{

    constructor(nome){
        super(nome, "Agulhas de Ossos");
    }
    
    agir(){
        this.alterarEnergia(-20);
        return `${this.nome} dispara ${this.ataqueMagico}!`;
    }

    descansar(){
        this.alterarEnergia(15);
        return `${this.nome} descansou. Energia restaurada!`;
    }
}

module.exports = Mago;