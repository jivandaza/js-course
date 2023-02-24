const displayDocument = async (identifier) => {
  const request = await fetch(identifier);
  const response = await request.text();
  const parser = new DOMParser();
  const main = document.querySelector("main");
  const newMain = parser
    .parseFromString(response, "text/html")
    .querySelector("main");
  document.body.replaceChild(newMain, main);
  console.log(document);
};

document.addEventListener("click", (e) => {
  if (e.target.matches("#get-home")) displayDocument("home.html");
  if (e.target.matches("#get-contact")) displayDocument("contact.html");
  if (e.target.matches("#get-about")) displayDocument("about.html");
});
