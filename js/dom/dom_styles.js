const $linkDOM = document.querySelector(".dom-link");
// this will only show the styles we provided in the HTMl directly
console.log($linkDOM.style);
// this will even provide the styles provided in the CSS file
console.log(window.getComputedStyle($linkDOM));
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

// there are two ways to set styles
$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.textDecoration = "none";
$linkDOM.style.backgroundColor = "yellow";
$linkDOM.style.width = "50%";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginTop = "1rem";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = "0.5rem";

$linkDOM.addEventListener("mouseover", () => $linkDOM.style.setProperty("color", "blue"));
$linkDOM.addEventListener("mouseout", () => $linkDOM.style.setProperty("color", "black"));


// now let's see how we can use custom CSS properties
const $html = document.documentElement;
const $container = document.querySelector("#container");

let darkColor = getComputedStyle($html).getPropertyValue("--dark-color");
let yellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(darkColor, yellowColor);
$container.style.color = yellowColor;
$container.style.backgroundColor = darkColor;

// we can also modify these properties
$html.style.setProperty("--darkColor", "#222");
$html.style.setProperty("--yellow-color", "red");

darkColor = getComputedStyle($html).getPropertyValue("--dark-color");
yellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

$container.style.setProperty("background-color", darkColor);
$container.style.setProperty("color", yellowColor);