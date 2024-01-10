const nameBiglietto = document.getElementById("nameBiglietto");
const kmDaPercorrere = document.getElementById("kmDaPercorrere");
const fasciaEta = document.getElementById("fasciaEta");
const compra = document.getElementById("copra");

const resultName = document.getElementById("nameBigliettoComprato");
const resultPrice = document.getElementById("costo");


const prezzoPerKm = 0.21;
let costo;



compra.addEventListener('click' ,function(){
    const usarname = nameBiglietto.value ;
    resultName.innerHTML = usarname; 

    const km = parseInt(kmDaPercorrere.value)

     //calocolo costo
    if(fasciaEta.value == "minorenne"){
        costo = km * prezzoPerKm * 0.8;
        resultPrice.innerHTML = costo;  
        
    }else if(fasciaEta.value == "over"){
        costo = km * prezzoPerKm * 0.6;
        resultPrice.innerHTML = costo;
        
    }else{
        costo =  km * prezzoPerKm;
        resultPrice.innerHTML = costo;
    
    }

   



} );




















/*
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
}*/