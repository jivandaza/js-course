export default function createScrollButton(button) {
  const scrollButton = document.querySelector(button);
  scrollButton.addEventListener("click", (e) => {
    window.scrollTo({
      behaviour: "smooth",
      top: 0,
    });
  });

  window.addEventListener("scroll", (e) => {
    if (scrollY > 200) {
      scrollButton.classList.remove("disabled");
    } else {
      scrollButton.classList.add("disabled");
    }
  });
}
