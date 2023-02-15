export default function userOnline() {
  const statusUpdate = (e) => {
    const status = navigator.onLine ? "online" : "offline";
    const $alertBanner = document.createElement("div");
    $alertBanner.innerHTML = `<h1>Going ${status}...</h1>`;
    $alertBanner.classList.add("status-banner");
    $alertBanner.classList.add(`${status}`);
    document.body.insertAdjacentElement("afterbegin", $alertBanner);
    setTimeout(() => {
      $alertBanner.remove();
    }, 2000);
  };

  window.addEventListener("online", statusUpdate);
  window.addEventListener("offline", statusUpdate);
}
