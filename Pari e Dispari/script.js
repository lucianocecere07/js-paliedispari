/*l'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

//inserire un numero da 1 a 5
let numeroUtente = parseInt(prompt("inserisci un numero da 1 a 5"));

//generare un numero random da 1 a 5
let numeroRandom = Math.floor((Math.random() * 5) + 1);

sommaNumeri(numeroUtente, numeroRandom);



//----------------funzioni--------------

function sommaNumeri(n1, n2){
    
    if(numeroUtente < 1 || numeroUtente > 5 || isNaN(numeroUtente)){
        console.log("Inserisci un numero consentito");
    } else {
    let somma = n1 + n2;

    console.log("numero utente: " + numeroUtente);
    console.log("numero random: " + numeroRandom);
    console.log("somma: " + somma);

    return somma;
    }
}

//-------------------------------------