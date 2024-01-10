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

    const km = kmDaPercorrere.value
    if(usarname == "" || isNaN(km) || km == "" ){
        alert("Dati Mancanti o Errati");
    }else{

            //calocolo costo
        if(fasciaEta.value == "minorenne"){
            costo = km * prezzoPerKm * 0.8;
            resultPrice.innerHTML = costo + " $";  
            
        }else if(fasciaEta.value == "over"){
            costo = km * prezzoPerKm * 0.6;
            resultPrice.innerHTML = costo + " $";
            
        }else{
            costo =  km * prezzoPerKm;
            resultPrice.innerHTML = costo + " $" ;
        
        }
        
        biglietto.classList.remove("d-none");
         
    }
   

    


} );