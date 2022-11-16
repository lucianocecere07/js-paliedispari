/*l'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/




//scelta utente tra pari e dispari
let sceltaPariDispari = prompt("scrivi la tua scelta tra pari e dispari");
let sceltaPariDispariMinuscolo = sceltaPariDispari.toLowerCase();

pariODispari();

//inserire un numero da 1 a 5
let numeroUtente = parseInt(prompt("inserisci un numero da 1 a 5"));

//generare un numero random da 1 a 5
let numeroRandom = Math.floor((Math.random() * 5) + 1);

//somma dei numeri
let numeroSomma = sommaNumeri(numeroUtente, numeroRandom);

//stabilire se la somma è pari o dispari
sommaPariODispari();



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

function sommaPariODispari(){

    if(numeroUtente < 1 || numeroUtente > 5 || isNaN(numeroUtente)) {
        console.log("Riprova con un numero tra 1 e 5");
    }else if(numeroSomma %2 == 0 && !isNaN(numeroUtente)){
        console.log("ha vinto pari");
    } else if(numeroSomma %2 != 0 && !isNaN(numeroUtente)) {
        console.log("ha vinto dispari");
    } 
}

function pariODispari(){
    
    if(sceltaPariDispariMinuscolo == "pari"){
        console.log("hai scelto pari")
    } else if(sceltaPariDispariMinuscolo == "dispari"){
        console.log("hai scelto dispari")
    } else {
        console.log("scelta non accettata, riprova")
    }
}

//-------------------------------------