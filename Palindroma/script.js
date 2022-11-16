//chiedere all'utente di inserire una parola
//creare una funzione per capire se la parola inserita è palindroma e poi usate quella funzione appena dichiarata

//parola chiesta all'utente
let parolaUtente = prompt("Inserisci una parola palindroma");
let parolaUtenteMinuscolo = parolaUtente.toLowerCase();
console.log("la parola scelta è: " + parolaUtenteMinuscolo);

let parolaAlContrario = parolaUtenteMinuscolo.split("").reverse("").join("");
console.log("la parola al contrario è: " + parolaAlContrario);




//---------Funzioni--------------

function palindromo(){

}


//-------------------------------