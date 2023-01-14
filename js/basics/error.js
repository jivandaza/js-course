//we can capture errors by using try{}catch{}finally{}
try{
    console.log(`This line has no errors`);
    //this line will throw an error
    console.log(undefinedVariable);
    console.log(`This line won't execute as the code will jump to the catch block`)
} catch (error) {
    console.error(`An error has been captured: ${error}`);
} finally {
    console.log(`The finally block will always execute`);
}

//the reserved word throw allows us to send custom error messages
try{
    let numero = "n";
    if(isNaN(numero)){
        throw new Error(`The character provided is not a number`);
    }
} catch (error) {
    console.error(error)
}

//another example
try{
    const dividedByZero = 1/0;
    if (dividedByZero === Infinity){
        throw new Error(`Division by zero is not allowed`);
    } 
    
} catch (error) {
    console.log(`An error has been caught ${error}`);
}