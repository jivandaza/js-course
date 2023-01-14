import log from './log_text.js';

//la palabra reservada const nos permite declarar una constante que podemos usar pero no puede ser modificada
try {
    const PI = 3.141592;
    log(`El valor de mi constante es: ${PI}`);
    //Dado que los arreglos y objetos no referencian un valor sino el objeto o arreglo en cuestion, pueden ser modificados pero no reasignados
    // arreglo.push(dato) es correcto pero arreglo = nuevoArreglo no lo es si la variable fue decalarada con const
    const COLORES = ["azul", "rojo", "negro"];
    log(`El arreglo colores ha sido iniciado como: ${COLORES}`);
    COLORES.push("blanco");
    log(`Se ha agregado el color blanco y el arreglo colores ahora luce así: ${COLORES}`);
    COLORES[1] = "nuevoRojo";
    log(`Se ha modificado el arreglo colores y ahora luce así: ${COLORES}`);
    const PERSONA = {
        nombre: "Nico",
        apellido: "Gongora"
    };
    log(`Se ha creado la persona ${Object.entries(PERSONA)}`);
    PERSONA.edad = 21; 
    log(`Se ha añadido la edad a la persona y ahora luce así: ${Object.entries(PERSONA)}`);
}
catch(err) {
   log(`Se ha producido un error: ${err.message}`);
}