export default function createScrollSpy(sections, nav) {
  let $sections = document.querySelectorAll(sections);
  let sectionList;
  const createMenu = () => {
    sectionList = document.createElement("ul");
    $sections.forEach((section) => {
      let menuElement = document.createElement("li");
      menuElement.innerHTML = `<a href="#${section.id}">${section.id
        .split("-")
        .join(" ")
        .toUpperCase()}</a>`;
      sectionList.appendChild(menuElement);
    });
    document.getElementById(nav).appendChild(sectionList);
  };
  const showActive = (e) => {
    $sections.forEach((section) => {
      let sectionHeight = section.getBoundingClientRect().height;
      let sectionPosition = section.getBoundingClientRect().y;
      if (sectionPosition <= 0) {
        if (sectionPosition > -1 * sectionHeight) {
          let activeElement;
          [...sectionList.childNodes].forEach((element) => {
            element.childNodes[0].classList.remove("active");
            if (
              element.childNodes[0].href.slice(
                element.childNodes[0].href.indexOf("#") + 1
              ) === section.id
            ) {
              activeElement = element;
            }
          });
          activeElement.childNodes[0].classList.add("active");
        }
      }
    });
  };
  createMenu();
  window.addEventListener("scroll", showActive);
}