const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure"),
  $container = document.getElementById("container");

/*$newCard.innerHTML = `
<img src="http://placeimg.com/200/200/any" alt="Any">
<figcaption>Any</figcaption>
`;*/

$newCard.classList.add("card");

// this will add the element before the start of cards
//$cards.insertAdjacentElement("beforebegin", $newCard);

// this will add the element after cards ends
//$cards.insertAdjacentElement("afterend", $newCard);

// this will add the element as the first child of cards
//$cards.insertAdjacentElement("afterbegin", $newCard);

// this will add the element as the last child of cards
//$cards.insertAdjacentElement("beforeend", $newCard);

const $content = `
<img src="http://placeimg.com/200/200/any" alt="Any">
<figcaption></figcaption>
`;

$newCard.insertAdjacentHTML("beforeend", $content);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");

// we can also use the methods append, prepend, after and before to add elements
$cards.prepend($newCard);
$cards.append($newCard);
$cards.before($newCard);
$cards.after($newCard);