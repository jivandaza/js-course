export const PI = Math.PI;

//if we wanted to export one of these as default, it needs to be done after the variable has been declared
//same thing happens with expressed functions (let myFunction = () => {})
let user = "Nico";
let password = "MyPassword";
//we would need to export default here as: export default password

//we can use the keyword default to determine what is the predetermined item to be exported
export default function sayHi(){
    console.log("Hi, this is an +ES6 module");    
}