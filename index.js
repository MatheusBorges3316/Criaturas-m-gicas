const Fada = require("./Classes/Fada.js");
const Dragao = require("./Classes/Dragao.js");
const Gnomo = require("./Classes/Gnomo.js");
const Mago = require("./Classes/Mago.js");

let fada1 = new Fada("Hera, a Fada do Vale,");
let dragao1 = new Dragao("Ignis, o Dragão de Chamas,");
let gnomo1 = new Gnomo("Mikron, o Pequeno,");
let mago1 = new Mago("Eldrin, o Necromante,");


console.log(fada1.agir());
console.log(fada1.descansar())

console.log(dragao1.agir());
console.log(dragao1.descansar())

console.log(gnomo1.agir());
console.log(gnomo1.descansar())

console.log(mago1.agir());
console.log(mago1.descansar())