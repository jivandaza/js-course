document.addEventListener("DOMContentLoaded", (e) => {
  const includeHTML = async (el, url) => {
    let request = await fetch(url);
    let responseText = await request.text();
    el.outerHTML = responseText;
  };

  document
    .querySelectorAll("[data-include]")
    .forEach((el) => includeHTML(el, el.getAttribute("data-include")));
});
