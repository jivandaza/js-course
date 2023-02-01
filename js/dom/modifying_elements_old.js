const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure"),
  $container = document.getElementById("container");

$newCard.innerHTML = `
<img src="http://placeimg.com/200/200/any" alt="Any">
<figcaption>Any</figcaption>
`;

$newCard.classList.add("card");

// we can use replaceChild to replace elements in the DOM
$cards.replaceChild($newCard, $cards.children[2]);

// we can also insert before a certain element
$cards.insertBefore($newCard, $cards.firstElementChild);

// removing elements
$cards.removeChild($cards.lastElementChild);

// the true argument is to clone not only the element but it's children
const $cloneCards = $cards.cloneNode(true);

$container.appendChild($cloneCards);