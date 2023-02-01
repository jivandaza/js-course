const $cards = document.querySelector(".cards"),
  // we will select only the content as we don't need the template tag itself
  $template = document.getElementById("template-card").content,
  $fragment = document.createDocumentFragment(),
  cardContent = [
    {
      title: "Tecnología",
      img: "https://placeimg.com/200/200/tech",
    },
    {
      title: "Animales",
      img: "https://placeimg.com/200/200/animals",
    },
    {
      title: "Arquitectura",
      img: "https://placeimg.com/200/200/arch",
    },
    {
      title: "Gente",
      img: "https://placeimg.com/200/200/people",
    },
    {
      title: "Naturaleza",
      img: "https://placeimg.com/200/200/nature",
    },
    {
      title: "More Tech",
      img: "http://placeimg.com/200/200/tech",
    },
    {
      title: "Even More Tech",
      img: "http://placeimg.com/200/200/tech",
    },
    {
      title: "Last One",
      img: "http://placeimg.com/200/200/tech",
    },
  ];

cardContent.forEach((el) => {
  $template.querySelector("img").setAttribute("src", el.img);
  $template.querySelector("img").setAttribute("alt", el.title);
  $template.querySelector("img").classList.add("card");
  $template.querySelector("figcaption").textContent = el.title;
  // we can clone the element and using true as the second argument ensures it's child elements are also cloned
  let $clone = document.importNode($template, true);
  $fragment.appendChild($clone);
});

$cards.appendChild($fragment);