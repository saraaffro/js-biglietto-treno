// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca.



// chiedere all'user il numero di km che vuole percorrere
const nbKilometers = parseInt(prompt("Inserisci il numero di chilometri che vuoi percorrere"));

console.log("numero chilometri: ", nbKilometers);


// chiedere all'user la sua età
const userAge = parseInt(prompt("Inserisci la tua età"));

console.log("età: ", userAge);

// calcolare prezzo del viaggio (0,21 * km), tenendo conto degli sconti
const ticketPrice = nbKilometers * (21 / 100);

console.log("Il costo di un biglietto normale è: ", ticketPrice);

let userTicket = ticketPrice

if (userAge < 18){
    userTicket = ticketPrice - (ticketPrice / 100) * 20; 
    document.getElementById("biglietto").innerHTML = `Dato che sei minorenne e hai accesso a uno sconto del 20%, il costo del tuo biglietto è di: ${userTicket.toFixed(2)} €`;
} else if (userAge > 65){
    userTicket = ticketPrice - (ticketPrice / 100) * 40;
    document.getElementById("biglietto").innerHTML = `Dato che sei over 65 e hai accesso a uno sconto del 40%, il costo del tuo biglietto è di: ${userTicket.toFixed(2)} €`;
} else{
    document.getElementById("biglietto").innerHTML = `Il costo del tuo biglietto è di: ${userTicket.toFixed(2)} €`;
}


console.log("Il costo del tuo biglietto è: ", userTicket);

// output prezzo
// document.getElementById("biglietto").innerHTML = `Il costo del tuo biglietto è di: ${userTicket.toFixed(2)} €`

