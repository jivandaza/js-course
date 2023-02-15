const currentLocationOptions = {
  hour12: false,
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};

const utcOptions = {
  timeZone: "Etc/GMT",
  hour12: false,
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};

const createClock = ($clock, options) => {
  const currentDate = new Date();
  $clock.innerHTML = currentDate.toLocaleTimeString("en-US", options);
  setInterval(() => {
    const currentDate = new Date();
    $clock.innerHTML = currentDate.toLocaleTimeString("en-US", options);
  });
};

const runClock = ($clock, $utcClock, $clockBtn, $utcClockBtn) => {
  createClock($clock, currentLocationOptions);
  createClock($utcClock, utcOptions);
  $clockBtn.addEventListener("click", (e) => 
    changeClockStatus($clock, $clockBtn)
  );
  $utcClockBtn.addEventListener("click", (e) =>
    changeClockStatus($utcClock, $utcClockBtn)
  );
};

function changeClockStatus($clock, $clockBtn) {
  let $stopText = document.createElement("p");
  $stopText.appendChild(document.createTextNode("STOPPED"));
  if ($clockBtn.innerHTML === "Stop Clock") {
    $clockBtn.innerHTML = "Start Clock";
    $clock.style.display = "none";
    $clock.insertAdjacentElement("beforebegin", $stopText);
  } else {
    $clockBtn.innerHTML = "Stop Clock";
    $clock.style.display = "block";
    $clock.previousElementSibling.remove();
  }
}

export function changeAlarmStatus($alarmBtn, $audio) {
  $alarmBtn.addEventListener("click", (e) => {
    if ($audio.paused) {
      $audio.play();
      $alarmBtn.innerHTML = "Stop Alarm";
    } else {
      $audio.pause();
      $alarmBtn.innerHTML = "Play Alarm";
      $audio.currentTime = 0;
    }
  });
}

export default runClock; 
