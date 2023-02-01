// as class is a reserved word in JS, we need to use a different notation to access the class 
const $card = document.querySelector(".card");
console.log($card);

// className will return a single class and classList will return multiple elements
console.log($card.className);
console.log($card.classList);

// we can add a new class
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));

// we can remove a class
$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45"));

// there's a method .toggle that will remove the class if present or add it if not present
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");

// we can replace classes 
$card.classList.replace("rotate-45", "rotate-135");
$card.classList.add("opacity-80", "sepia");
$card.classList.remove("opacity-80", "sepia");
$card.classList.toggle("opacity-80", "sepia");