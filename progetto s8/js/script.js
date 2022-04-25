"use strict";
class FirstUser {
    constructor(_credito, _numerochiamate) {
        this.credito = _credito;
        this.numerochiamate = _numerochiamate;
    }
    ricarica(unaRicarica) {
        this.credito += unaRicarica;
    }
    chiamata(minutiDurata) {
        let tariffa = 0.20;
        this.credito = this.credito - (tariffa * minutiDurata);
        this.numerochiamate++;
    }
    numero404() {
        return this.credito;
    }
    getNumeroChiamate() {
        return this.numerochiamate;
    }
    azzeraChiamate() {
        this.numerochiamate = 0;
    }
}
class SecondUser {
    constructor(_credito, _numerochiamate) {
        this.credito = _credito;
        this.numerochiamate = _numerochiamate;
    }
    ricarica(unaRicarica) {
        this.credito += unaRicarica;
    }
    chiamata(minutiDurata) {
        let tariffa = 0.20;
        this.credito = this.credito - (tariffa * minutiDurata);
        this.numerochiamate++;
    }
    numero404() {
        return this.credito;
    }
    getNumeroChiamate() {
        return this.numerochiamate;
    }
    azzeraChiamate() {
        this.numerochiamate = 0;
    }
}
class ThirdUser {
    constructor(_credito, _numerochiamate) {
        this.credito = _credito;
        this.numerochiamate = _numerochiamate;
    }
    ricarica(unaRicarica) {
        this.credito += unaRicarica;
    }
    chiamata(minutiDurata) {
        let tariffa = 0.20;
        this.credito = this.credito - (tariffa * minutiDurata);
        this.numerochiamate++;
    }
    numero404() {
        return this.credito;
    }
    getNumeroChiamate() {
        return this.numerochiamate;
    }
    azzeraChiamate() {
        this.numerochiamate = 0;
    }
}
let smartphone1 = new FirstUser(2, 2);
smartphone1.ricarica(10);
smartphone1.chiamata(5);
let smartphone2 = new SecondUser(2, 2);
smartphone2.ricarica(20);
smartphone2.chiamata(10);
let smartphone3 = new ThirdUser(2, 2);
smartphone3.ricarica(30);
smartphone3.chiamata(15);
console.log("Primo Utente");
console.log("Numero delle chiamate" + smartphone1.getNumeroChiamate());
console.log("Valore della carica disponibile" + smartphone1.numero404());
console.log("Numero delle chiamate" + smartphone1.getNumeroChiamate());
console.log("Dopo l\'azzeramento delle chiamate:");
smartphone1.azzeraChiamate();
console.log("Secondo Utente");
console.log("Numero delle chiamate" + smartphone2.getNumeroChiamate());
console.log("Valore della carica disponibile" + smartphone2.numero404());
console.log("Numero delle chiamate" + smartphone2.getNumeroChiamate());
console.log("Dopo l\'azzeramento delle chiamate:");
smartphone2.azzeraChiamate();
console.log("Terzo Utente");
console.log("Numero delle chiamate" + smartphone3.getNumeroChiamate());
console.log("Valore della carica disponibile" + smartphone3.numero404());
console.log("Numero delle chiamate" + smartphone3.getNumeroChiamate());
console.log("Dopo l\'azzeramento delle chiamate:");
smartphone3.azzeraChiamate();
//# sourceMappingURL=script.js.map