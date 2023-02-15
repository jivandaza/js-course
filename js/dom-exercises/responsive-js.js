const map = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.403827617352!2d-75.68737171969968!3d45.449370185021486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce04d9ffea3749%3A0x4b5fcc190a08b071!2sRockcliffe%20Park%20and%20the%20Rockeries!5e0!3m2!1sen!2sco!4v1615071587842!5m2!1sen!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
const video = `<iframe width="600" height="400" src="https://www.youtube.com/embed/zhl-Cs1-sG4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
const mapLink = `<a href="https://www.google.com/maps/@45.450407,-75.686767,15z?hl=en-US"> VIEW MAP </a>`;
const videoLink = `<a href="https://www.youtube.com/watch?v=zhl-Cs1-sG4" >WATCH VIDEO </a>`;

const beResponsive = ($section) => {
  $section.innerHTML = "";
  if (window.innerWidth < 1000) {
    $section.innerHTML += mapLink;
    $section.innerHTML += videoLink;
  } else {
    $section.innerHTML += map;
    $section.innerHTML += video;
  }
};

export default function loadResponsiveSection(section) {
  const $section = document.getElementById(section);
  beResponsive($section);
  window.addEventListener("resize", (e) => beResponsive($section));
}
