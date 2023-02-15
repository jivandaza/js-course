export default function responsiveTester(form) {
  const $form = document.getElementById(form);
  const $url = $form.url;
  const $width = $form.width;
  const $height = $form.height;
  const $submit = $form.submit;
  let newWindow;
  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!newWindow) {
      newWindow = window.open(
        $url.value,
        "Responsive Tester",
        `innerWidth=${$width.value},innerHeight=${$height.value},top=0,left=0}`
      );
      $submit.value = "Close";
    } else {
      $submit.value = "Go Responsive";
      newWindow.close();
      newWindow = false;
    }
  });
}
