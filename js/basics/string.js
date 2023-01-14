import log from './log_text.js';

let nombre = "Nicolás";
let apellido = "Góngora";
let segundoApellido = new String("Rios");

log(`Mi nombre es ${nombre} ${apellido} ${segundoApellido}`);
//.toUpperCase pasa a mayuscula
log(`Mi nombre en mayúsculas es ${nombre.toUpperCase()}`);
//.toLoweCase pasa a minuscula
log(`Mi nombre en minúsculas es ${nombre.toLowerCase()}`);

//mediante el uso de backticks podemos crear facilmente strings multilineales
let loremIpsum = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Vestibulum ut lorem nec est suscipit pharetra. 
Sed arcu urna, rhoncus eget tristique ac, sollicitudin a massa. 
Integer ullamcorper mollis mauris, commodo rutrum est eleifend in.`;

if(loremIpsum.includes("sit")){
    log("Lorem Ipsum text contains the word 'sit'.");
} else {
    log("Lorem Ipsum text does not contain the word 'sit'.");
}

let variableConEspacios = "  Este texto tiene muchos espacios    ";
//.trim() elimina espacios en blanco al inicio y final del string
let variableSinEspacios = variableConEspacios.trim();
//crea un arreglo separando los elementos a partir del elemento dado como argumento
let arregloLorem = loremIpsum.split(" "); // ["Lorem", "Ipsum", ...]

// *************************************** TEMPLATE STRINGS *************************************

//con los backticks `` podemos incluir variables o trozos de código dentro de un string
let myTemplate = `Hola mi nombre es ${nombre}`;
log(myTemplate);