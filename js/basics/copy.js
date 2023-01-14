//function to copy the text passed as argument, in this case it will be the one contained in the text const below

const copyText = (str) => {
    const copyElement = document.createElement("textarea");
    copyElement.value = str;
    copyElement.setAttribute("readonly", "");
    copyElement.style.opacity = 0;
    document.body.appendChild(copyElement);
    copyElement.select();
    document.execCommand("copy");
    document.body.removeChild(copyElement);
    alert("Text has been copied to clipboard!");
  }
  
  const text = document.getElementById("banner-text").innerText;
  
  const button = document.createElement("input");
  button.type = "submit";
  button.value = "Copy text!";
  button.addEventListener("click", function(){ copyText(text); });
  document.getElementById("sub-container").appendChild(button);