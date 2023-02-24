const getComponent = async (componentName) => {
  const template = document.createElement("template");
  const request = await fetch(`./components/${componentName}.html`);
  const component = await request.text();
  template.innerHTML = component;
  template.content.firstChild;
  return template.content.firstElementChild;
};

const changeContent = async (page) => {
  let main = document.querySelector("main");
  main.textContent = "";
  main.insertAdjacentElement("afterbegin", await getComponent(page));
}; 

const addInitialContent = async (e) => {
  let header = await getComponent("header");
  let footer = await getComponent("footer");
  let main = document.querySelector("main");
  main.insertAdjacentElement("beforebegin", header);
  changeContent("home");
  main.insertAdjacentElement("afterend", footer);
};

document.addEventListener("DOMContentLoaded", addInitialContent);

document.addEventListener("click", (e) => {
  if (e.target.matches(".nav-button")) {
    changeContent(e.target.getAttribute("data-href"));
  }
});
