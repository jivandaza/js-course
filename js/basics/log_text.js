function logText(...textToLog) {
    try {
        let div = document.getElementById("logDiv");
        for (let value of textToLog){
            let p = document.createElement("p");
            let text = document.createTextNode(value);
            let jumpLine = document.createElement("br");
            p.appendChild(text);
            div.appendChild(p);
            div.appendChild(jumpLine);
        }
    }
    catch(err) {
        log(`Se ha producido un error al intentar mostrar el mensaje: ${err.message}`);
    }
    
}

export default logText;