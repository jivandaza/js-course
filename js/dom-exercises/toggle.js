let myStorage = window.localStorage;

const goDark = ($button) => {
  $button.innerHTML = "🌚";
  document.querySelector("header").classList.toggle("light");
  document.querySelectorAll(".clock").forEach((el) => {
    el.classList.toggle("light");
  });
  document.querySelectorAll("section").forEach((el) => {
    el.classList.toggle("light");
  });
  document.querySelector(".hamburger").classList.toggle("light");
  myStorage.setItem("mode", "dark");
};

const goLight = ($button) => {
  $button.innerHTML = "🌝";
  document.querySelector("header").classList.toggle("light");
  document.querySelectorAll(".clock").forEach((el) => {
    el.classList.toggle("light");
  });
  document.querySelectorAll("section").forEach((el) => {
    el.classList.toggle("light");
  });
  document.querySelector(".hamburger").classList.toggle("light");
  myStorage.setItem("mode", "light");
};

export default function toggleMode(button) {
  let $button = document.getElementById(button);
  if (myStorage.getItem("mode") === "light") {
    goLight($button);
  }
  $button.addEventListener("click", (e) => {
    $button.innerHTML === "🌚" ? goLight($button) : goDark($button);
  });
}
