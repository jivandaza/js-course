/*
 * <button type="button" onClick="alert('HTML Event!')">Event in HTML</button>
 * We can add JS code to an event directly in the HTML code
*/

// we can pass the event as a parameter
function helloEvent() {
  alert("Hi from JS");
}

function sayHi(name = "Guest") {
  console.log(`Hello, ${JSON.stringify(name)}!`);
}

const $semanticEvent = document.getElementById("semantic");
// this is another way to assign an event to an HTML event
/*$semanticEvent.onclick = helloEvent; // we can only assign one function
$semanticEvent.onclick = (e) => console.log(e);
const $listener = document.getElementById("listener");
// this is the way to add multiple listeners to the same element
$listener.addEventListener("click", helloEvent);
$listener.addEventListener("click", (e) => console.log(e.target));
$listener.addEventListener("click", sayHi);
// we can call the function with an argument by creating another function
$listener.addEventListener("click", () => sayHi("Nico"));
// we can also remove event listeners
$listener.removeEventListener("click", helloEvent);
// to remove an event listener the function must be stored into a variable, it can be declared or expressed
//$listener.removeEventListener("click", () => {}) won't work*/

function eventsFlow(e) {
  console.log(
    `Hello this is ${this.className} and the event was triggered by ${e.target.className}`
  );
  // we can stop the propgation of the object
  e.stopPropagation();
}

const $divEvents = document.querySelectorAll(".events-flow div");
const $linkEvents = document.querySelector(".events-flow a");

console.log($divEvents);

$linkEvents.addEventListener("click", (e) => {
  alert("Hello, this is Nico");
  // we can use event.preventDefault to stop the element from doing it's default job (opening the link in this case)
  e.preventDefault();
});

$divEvents.forEach((div) =>
  div.addEventListener("click", eventsFlow, {
    capture: false,
    // this will allow us to trigger the event only once per element
    //once: true,
  })
);

// every time we click an inner element, the event will trigger in it and it's parents