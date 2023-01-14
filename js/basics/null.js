import log from './log_text.js';

// null, undefined and NaN
let a;
// al declarar una variable sin ningun valor, esta automaticamente se marca como undefined
log(a);

// si queremos tener una variable sin un valor definido podemos asisgnarle null
a = null;
log(a);

// obtenemos NaN (Not a Number)
let notANumber = 8*"hola";
log(notANumber);