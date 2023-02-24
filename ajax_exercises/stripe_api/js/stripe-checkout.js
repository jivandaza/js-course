import STRIPE_KEYS from "./stripe-keys.js";

const $arepas = document.getElementById("arepas");
const $template = document.getElementById("arepa-template").content;
const $fragment = document.createDocumentFragment();
const fetchOptions = {
  headers: {
    Authorization: `Bearer ${STRIPE_KEYS.secret}`,
  },
};

let products, prices;

Promise.all([
  fetch("https://api.stripe.com/v1/products", fetchOptions),
  fetch("https://api.stripe.com/v1/prices", fetchOptions),
])
  .then((responses) => Promise.all(responses.map((res) => res.json())))
  .then((json) => {
    products = json[0].data;
    prices = json[1].data;

    prices.forEach((element) => {
      let productData = products.find(
        (product) => product.id === element.product
      );
      $template.querySelector(".arepa").setAttribute("data-price", element.id);
      $template.querySelector("img").src = productData.images[0];
      $template.querySelector("img").alt = productData.name;
      $template.querySelector("figcaption").innerHTML = `
      <h3>${productData.name}</h3>
      <p>${productData.description}</p>
      <p>${element.currency.toUpperCase()}$ ${
        element.unit_amount_decimal.slice(0, -2) +
        "." +
        element.unit_amount_decimal.slice(-2)
      } </p>
      `;
      let $clone = document.importNode($template, true);
      $fragment.appendChild($clone);
    });

    $arepas.appendChild($fragment);
  })
  .catch((err) => console.error(err));
