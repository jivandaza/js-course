import log from './log_text.js';

let myTrue = true; 
let myFalse = false;

// 0 es falso, cualquier otro numero es verdadero
log(Boolean(0));

log(Boolean(1));

// cadena vacia es falso, cualquier caracter (incluyendo espacio) es verdadero
log(Boolean(""));

log(Boolean(" "));