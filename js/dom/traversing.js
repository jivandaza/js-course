const $cards = document.querySelector(".cards");
console.log($cards);
// this is how we can select the children of an HTML element
console.log($cards.children);
// access specific children
console.log($cards.children[0]);
// we can also access the parent element
console.log($cards.parentElement);
// we can also access specificaly the first or last child
console.log($cards.firstChild);
console.log($cards.lastChild);
// as the previous methods will not retrieve an element but the immediate child (may be a white space or line break)
// we can use firstElementChild or lastElementChild instead
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);
// we can also select the next sibling element
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);

// will look for a parent element of the desired type
console.log($cards.closest("div"));