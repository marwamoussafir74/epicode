interface Smartphone {

    credito: number;
    numerochiamate: number;
 
    ricarica(credito: number, unaRicarica: number): void;
    chiamata(credito: number, minutiRicarica: number): void;
    numero404(): number;
    getNumeroChiamate(): number;
    azzeraChiamate():void;
 }
 
 
 class FirstUser implements Smartphone {
 
    public numerochiamate: number;
    public credito: number;
 
    constructor(_credito: number, _numerochiamate:  number) {
        this.credito = _credito;
        this.numerochiamate = _numerochiamate;
    } 
 
 
 
    public ricarica( unaRicarica: number):void {
        this.credito += unaRicarica;
    }
 
    public chiamata( minutiDurata: number):void {
        let tariffa = 0.20;
        this.credito= this.credito-(tariffa * minutiDurata);
        this.numerochiamate++;
    }
 
    public numero404():number{
        return this.credito;
    }
 
    public getNumeroChiamate():number{
        return this.numerochiamate;
    }
 
    public azzeraChiamate():void{
        this.numerochiamate=0;
    }
 }
 

 class SecondUser implements Smartphone {
    credito: number;
    numerochiamate: number;
    constructor(_credito: number, _numerochiamate: number){
        this.credito=_credito;
        this.numerochiamate=_numerochiamate;
    }
 
    public ricarica( unaRicarica: number):void {
        this.credito += unaRicarica;
    }
    public chiamata( minutiDurata: number):void {
        let tariffa = 0.20;
        this.credito= this.credito-(tariffa * minutiDurata);
        this.numerochiamate++;
    }
    public numero404():number{
        return this.credito;
    }
    public getNumeroChiamate():number{
        return this.numerochiamate;
    }
    public azzeraChiamate():void{
        this.numerochiamate = 0;
    }
 }
 

 class ThirdUser implements Smartphone {
    credito: number;
    numerochiamate: number;
    constructor(_credito: number, _numerochiamate:  number){
        this.credito=_credito;
        this.numerochiamate=_numerochiamate;
    }
 
 
    public ricarica( unaRicarica: number):void {
        this.credito += unaRicarica;
    }
    public chiamata( minutiDurata: number):void {
        let tariffa = 0.20;
        this.credito= this.credito-(tariffa * minutiDurata);
        this.numerochiamate++;
    }
    public numero404():number{
        return this.credito;
    }
    public getNumeroChiamate():number{
        return this.numerochiamate;
    }
    public azzeraChiamate():void{
        this.numerochiamate=0;
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
 
 
 

    console.log("Primo Utente")
 

    console.log("Numero delle chiamate"+smartphone1.getNumeroChiamate());

    console.log("Valore della carica disponibile"+smartphone1.numero404());

    console.log("Numero delle chiamate"+smartphone1.getNumeroChiamate());

    console.log("Dopo l\'azzeramento delle chiamate:");
 
    smartphone1.azzeraChiamate();
 

 

    console.log("Secondo Utente")
 
    console.log("Numero delle chiamate"+smartphone2.getNumeroChiamate());
    console.log("Valore della carica disponibile"+smartphone2.numero404());
    console.log("Numero delle chiamate"+smartphone2.getNumeroChiamate());
 
    console.log("Dopo l\'azzeramento delle chiamate:");
    smartphone2.azzeraChiamate();
 

    console.log("Terzo Utente")
 
 
    console.log("Numero delle chiamate"+smartphone3.getNumeroChiamate());
    console.log("Valore della carica disponibile"+smartphone3.numero404());
    console.log("Numero delle chiamate"+smartphone3.getNumeroChiamate());
 
    console.log("Dopo l\'azzeramento delle chiamate:");
    smartphone3.azzeraChiamate();