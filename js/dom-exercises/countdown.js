const getRemainingTime = (targetDate) => {
  let leftOfDate = targetDate - new Date();
  if (leftOfDate <= 0)
    return `${targetDate.toLocaleDateString()} IS ALREADY HERE!`;
  const days = Math.floor(leftOfDate / (1000 * 60 * 60 * 24));
  leftOfDate -= days * 1000 * 60 * 60 * 24;
  const hours = Math.floor(leftOfDate / (1000 * 60 * 60));
  leftOfDate -= hours * 1000 * 60 * 60;
  const minutes = Math.floor(leftOfDate / (1000 * 60));
  leftOfDate -= minutes * 1000 * 60;
  console;
  const seconds = Math.floor(leftOfDate / 1000);
  leftOfDate -= seconds * 1000;
  return `${days > 0 ? `${days} DAYS` : ""} ${
    hours > 0 ? `${hours} HOURS` : ""
  } ${minutes > 0 ? `${minutes} MINUTES AND` : ""} ${seconds} SECONDS TO GO`;
};

const showMessage = (message, $textField) => {
  $textField.innerText = message;
};

const startCount = (e) => {
  const $startButton = e.target;
  const $datePicker = $startButton.previousElementSibling;
  const $countdownText = $datePicker.previousElementSibling;
  const $tryAgainButton = $startButton.cloneNode(true);
  const targetDate = new Date(`${$datePicker.value}T00:00:00`);
  $datePicker.style.display = "none";
  $startButton.style.display = "none";
  $tryAgainButton.innerText = "TRY AGAIN";
  $tryAgainButton.style.setProperty("margin-top", "5vh");
  $startButton.insertAdjacentElement("afterend", $tryAgainButton);
  showMessage(getRemainingTime(targetDate), $countdownText);
  let countInterval = setInterval(
    () => showMessage(getRemainingTime(targetDate), $countdownText),
    1000
  );
  $tryAgainButton.addEventListener("click", (e) => {
    clearInterval(countInterval);
    $startButton.style.display = "block";
    $datePicker.style.display = "block";
    $countdownText.innerText =
      "Select a date to see how long it will be until then:";
    $tryAgainButton.remove();
  });
};

const setInitialDate = ($datePicker) => {
  let today = new Date();
  today = `${today.getFullYear()}-${
    today.getMonth() > 10 ? today.getMonth() + 1 : `0${today.getMonth() + 1}`
  }-${today.getDate() >= 10 ? today.getDate() : `0${today.getDate()}`}`;
  $datePicker.value = today;
  $datePicker.min = today;
};

export default function countDown(startSelector) {
  const startButton = document.querySelector(startSelector);
  setInitialDate(startButton.previousElementSibling);
  startButton.addEventListener("click", startCount);
}
