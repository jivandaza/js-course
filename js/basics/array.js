import log from './log_text.js';

//podemos declarar los arreglos con la palabra const incluso si van a ser modificados después
//los arreglos pueden contener elementos de diferente tipo 
const myArray = [1, 2, 3, [4, 5], "Josyd"];

log(`The first element of my array would be: ${myArray[0]}`);
//esta es la notación usada para obtener un elemento desde un arreglo multidimensional
log(`My array contains another array with ${myArray[3][0]} as the first element`);
//con .length podemos obtener la longitud actual de un arreglo
log(`The current size of my array is: ${myArray.length}`);

//si pasamos un numero al constructor de Array podemos crear un arreglo de un tamaño determinado
const bigArray = new Array(100);
log(bigArray);
bigArray.fill(false);
log(bigArray);

//con .push() podemos agregar un elemento y con .pop() quitar el ultimo añadido
const pushAndPop = [1, 2, 3, 4];
log(pushAndPop);
pushAndPop.push(5);
log(pushAndPop);
pushAndPop.pop();
log(pushAndPop);

//mediante el metodo forEach podemos ejecutar una función sobre cada uno de los elementos
const pushByTwo = pushAndPop.forEach(n => log(n*2));