export default function pickWinner(startButton, contestants) {
  let $contestantSection = document.getElementById(contestants);
  let $startButton = document.getElementById(startButton);
  let $contestants = $contestantSection.children;
  const showWinner = (winner) => {
    for (let i = 0; i < $contestants.length; i++) {
      $contestants[i].style.display = "flex";
      if (i != winner) $contestants[i].style.display = "none";
      else $contestants[i].classList.add("winner");
    }
  };
  const pickWinner = () => {
    let winner = Math.floor(Math.random() * $contestants.length);
    showWinner(winner);
  };
  $startButton.addEventListener("click", pickWinner);
}
