const $figure = document.createElement("figure");
const $img = document.createElement("img");
const $figcaption = document.createElement("figcaption");
const $text = document.createTextNode(`Animals`);
const $cards = document.querySelector(".cards");
const $anotherFigure = document.createElement("figure");
const $container = document.getElementById("container");
$img.setAttribute("src", "http://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animals");
$figcaption.appendChild($text);
$figure.classList.add("card");
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);
console.log($figure);

// we can also use innerHTML to create elements
$anotherFigure.innerHTML = `
<img src="http://placeimg.com/200/200/tech" alt="Tech">
<figcaption>Tech</figcaption>
`;
$anotherFigure.classList.add("card");
$cards.appendChild($anotherFigure);

const $h3 = document.createElement("h3");
$h3.textContent = "Seasons";
container.appendChild($h3);

const seasons = ["Sprint", "Summer", "Autumn", "Winter"];
const $ul = document.createElement("ul");
container.appendChild($ul);

seasons.forEach((element) => {
  const $li = document.createElement("li");
  $li.textContent = element;
  $ul.appendChild($li);
});

const days = ["Monday", "Tuesday", "Etc"];

// we can usue fragments to avoid manipulating the DOM multiple times
const $anotherUl = document.createElement("ul"),
  $fragment = document.createDocumentFragment();

days.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragment.appendChild($li);
});

$anotherUl.appendChild($fragment);
$container.appendChild($anotherUl);