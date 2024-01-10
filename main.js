let kmDaPerCorrere = parseInt (prompt('Numero di chilometri che vuole percorrere?'));
console.log(kmDaPerCorrere);
let userEta = parseInt (prompt('Inserisci la tua eta'));
console.log(userEta);
const prezzoPerKm = 0.21;
console.log(prezzoPerKm);
let prezzo;
let prezzoFinale = document.getElementById("prezzofinale") ;

if(isNaN(userEta) || isNaN(kmDaPerCorrere)){
    error = true;
    prezzoFinale.innerText = "i dati insseriti non son correti. RIPROVA " ;
}else{
    error = false;
}

if(!error){
    if (userEta < 18){
        prezzo = (kmDaPerCorrere * 0.8 * 0.21).toFixed(2);
        console.log(prezzo);
    }else if (userEta >= 65){
        prezzo = (kmDaPerCorrere * 0.6 * 0.21).toFixed(2);
        console.log(prezzo);
    }else{
        prezzo = (kmDaPerCorrere * 0.21).toFixed(2);
        console.log(prezzo);
    }
    prezzoFinale.innerText = "il prezzo del biglietto e: " +  prezzo + "$";
}