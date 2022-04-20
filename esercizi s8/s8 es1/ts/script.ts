let giocatore_1: number = 25;
let giocatore_2: number = 49;
let num_random: number;
let result: string = '';

document.addEventListener('DOMContentLoaded', () => {
    /*console.log('Num 1: ' + giocatore_1, 'Num 2: ' + giocatore_2, 'numRand: ' + num_random)
    controllo(); */

    //Soluzione 1
    /* let btn = document.querySelector('#calcola');
    if(btn !== null) {
        btn.addEventListener('click', controllo);
    } */

    //Soluzione 2
    document.querySelector('#calcola')?.addEventListener('click', controllo);
})

function numRand() {
    num_random = Math.floor(Math.random() * (100-1) + 1);
}

function controllo() {
    numRand();
    // Prendo i dati dall'input HTML
    let nodoInput1 = <HTMLInputElement> document.querySelector('#giocatore-1');
    giocatore_1 = Number (nodoInput1.value);
    let nodoInput2 = <HTMLInputElement> document.querySelector('#giocatore-2');
    giocatore_2 = Number (nodoInput2.value);

    if(giocatore_1 === num_random) {
        result = "Giocatore 1 ha azzeccato il numero casuale!!";
        //console.log("Giocatore 1 ha azzeccato il numero casuale!!")
    } else if(giocatore_2 === num_random) {
        result = "Giocatore 2 ha azzeccato il numero casuale!!";
        //console.log("Giocatore 2 ha azzeccato il numero casuale!!")
    } else {
        let diff_1: number = Math.abs(giocatore_1 - num_random);
        let diff_2: number = Math.abs(giocatore_2 - num_random);
        if(diff_1 < diff_2) {
            result = "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!";
            //console.log("Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!")
        } else {
            result = "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 2 si è avvicinato di più!";
            //console.log("Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 2 si è avvicinato di più!")
        }
    }
    stampa();
}

function stampa() {
    //console.log('Num 1: ' + giocatore_1, 'Num 2: ' + giocatore_2, 'numRand: ' + num_random)
    let g1 = document.createElement('h3');
    g1.innerText = 'Num. giocatore 1: ' + giocatore_1;
    let g2 = document.createElement('h3');
    g2.innerText = 'Num. giocatore 2: ' + giocatore_2;
    let gr = document.createElement('h3');
    gr.innerText = 'Num. random: ' + num_random;
    let res = document.createElement('h2');
    res.innerText = result;
    let risultato = document.querySelector('#risultato');
    risultato?.appendChild(g1);
    risultato?.appendChild(g2);
    risultato?.appendChild(gr);
    risultato?.appendChild(res);

}