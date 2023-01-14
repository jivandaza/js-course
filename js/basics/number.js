import log from './log_text.js';

let myInt = 4; 
let anotherInt = 18; 
let myFloat = 2.8649783;

//usando .toFixed() podemos proporcionar el numero maximo de decimales que queremos
log(`Mi float con 3 decimales es: ${myFloat.toFixed(3)}`);
//usando parseInt(numero) podemos convertir el número a un entero
// si el numero es un string lo podemos convertir a entero con esta funcion
log(`Mi float convertido a entero es: ${parseInt(myFloat)}`);