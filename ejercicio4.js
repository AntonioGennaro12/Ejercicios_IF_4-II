/*
Programamos a un Robot en preparar Sopas.
Si hay Verduras, Carne ó Pollo, Agua y Condimentos 
En caso no haya Condimentos pero Sí un Cubo de Caldo,
entonces se prepara igual...
Además informa el resultado...  
*/
/* SE ASUME QUE EL ROBOT CUENTA CON AGUA DESDE UNA CONEXIÓN DIRECTA
   Y QUE SE LE DEBEN AGREGAR LOS DEMÁS INGREDIENTES
*/

/*
En la Parte II uso los elementos <label> e <input>"
*/

const quiereSopa        = document.querySelector ("#lbl-sop")
const hayVerduras       = document.querySelector ("#lbl-ver")
const hayCarne          = document.querySelector ("#lbl-car")
const hayPollo          = document.querySelector ("#lbl-poll")
const hayCondimentos    = document.querySelector ("#lbl-cond")
const hayCuboDeCaldo    = document.querySelector ("#lbl-cuca")
const miSalida          = document.querySelector ("#mi-salida")

const SI                = "s" ;

function verificaSopa() {

if (!(quiereSopa.value == SI)) {
    miSalida.style.color = "violet" ;
    miSalida.textContent = "OK! será en otra oportunidad...";
} 
else {
      if ((hayVerduras.value==SI)&&((hayCarne.value==SI)||(hayPollo.value==SI))&&(hayCondimentos.value==SI)){
        miSalida.style.color = "green" ;
        miSalida.textContent = "Hay SOPA con Carne o Pollo y Condimentos";            
       }
      else if ((hayVerduras.value==SI) &&((hayCarne.value==SI) ||(hayPollo.value==SI ))&&(hayCuboDeCaldo.value==SI)){
        miSalida.style.color = "blue" ;
        miSalida.textContent = "Hay SOPA con Carne o Pollo y Cubo de Caldo";
      }
      else {
      miSalida.style.color = "red" ;
      miSalida.textContent = "Lo siento! FALTAN INGREDIENTES...";
      }

    };

}




