function eventsFlow(e) {
  // using this here would refer to the document itself
  console.log(
    `Hello this is "Nico" and the event was triggered by ${e.target.className}`
  );
}
  
document.addEventListener("click", (e) => {
  console.log("Click on", e.target);
  // check if the target matches the selector
  if (e.target.matches(".events-flow a")) {
    alert("Hello, this is Nico");
    e.preventDefault();
  } else if (e.target.matches(".events-flow div")) {
    eventsFlow(e);
  }
});