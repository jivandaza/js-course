export default async function createCards(section, search) {
  const url = `https://api.nasa.gov/planetary/apod?count=15&api_key=ynIukoMD6biv8izokR4LWjplypaKoJWIj3nBAPmV`;
  const $section = document.getElementById(section);
  const $search = document.getElementById(search);
  const images = (await (await fetch(url)).json()).filter(
    (img) => img.media_type === "image"
  );
  let fragment = document.createDocumentFragment();
  for (let img of images) {
    fragment.appendChild(createCard(img, $section));
  }
  $section.appendChild(fragment);

  function searchImages(filter) {
    let tempImages = images;
    let regFilter = new RegExp(filter, "i");
    if (filter)
      tempImages = images.filter((img) => regFilter.test(img.explanation));
    $section.innerHTML = "";
    fragment = document.createDocumentFragment();
    console.log(tempImages);
    if (tempImages.length > 0) {
      for (let img of tempImages) {
        fragment.appendChild(createCard(img, $section));
      }
    } else {
      let notFoundMessage = document.createElement("h1");
      notFoundMessage.appendChild(
        document.createTextNode(`No results for "${filter}"`)
      );
      fragment.appendChild(notFoundMessage);
    }

    $section.appendChild(fragment);
  }

  function createCard(image) {
    let $container = document.createElement("div");
    let $img = document.createElement("img");

    let explanation = document.createElement("p");
    explanation.appendChild(
      document.createTextNode(image.explanation.split(".")[0] + ".")
    );
    $img.src = image.url;
    $container.classList.add("card");
    $container.appendChild($img);
    $container.appendChild(explanation);
    return $container;
  }
  if ($search) {
    $search.addEventListener("keyup", (e) => searchImages($search.value));
    $search.addEventListener("search", (e) => searchImages($search.value));
  }
}