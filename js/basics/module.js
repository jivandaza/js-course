/* 
* We need to import the file using type="module" to be able to call external modules in that file
* <script src="js/module_test.js" type="module"></script>
* In order to support older browsers we can add another file as the following
* <script src="js/no-module_test.js" nomodule></script>
*/

//when importing a default export, we can use whatever name we like
import defaultHi, {PI} from "./constants_test.js";
//this import is different as we exported an object with the methods
import {operations} from "./operations_test.js";
//we can even provide an alias when importing a module 
import {PI as newPI} from "./constants_test.js";

console.log("File with modules being invoked...");
console.log(`We have successfully imported PI as ${PI}`);
console.log(`Using the functions we just imported, we can add two numbers: 1 + 2 = ${operations.add(1,2)}`);
defaultHi();
console.log(`Another PI has been imported with a value of: ${newPI}`);

/*
* It's important to keep in mind that we need to use object destructuration for every
* import but the default one, this is why our first import looks like this
* import defaultHi, {PI} from "./constants_test.js";
*/