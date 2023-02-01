let text = `
    <p>
    El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
    API para documentos HTML y XML.
    </p>
    <p>
    Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
        <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
`;

const $whatIsDOM = document.getElementById("what-is");
//$whatIsDOM.innerText = text; this is not part of the DOM standard
$whatIsDOM.textContent = text; // this will not respect the spaces in the string and will not process the tags

//this will replace the HTML content of the DOM element we selected
$whatIsDOM.innerHTML = text;

// this will replace the entire element with the one provided
$whatIsDOM.outerHTML = text;