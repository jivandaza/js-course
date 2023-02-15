export default function readText(formId) {
  const $form = document.getElementById(formId);
  const $voiceOptions = $form.querySelector("select");
  const $textInput = $form.querySelector("textarea");
  const synth = window.speechSynthesis;
  let voices;
  synth.addEventListener("voiceschanged", (e) => {
    voices = speechSynthesis.getVoices();
    voices.forEach((voice) => {
      let voiceOption = document.createElement("option");
      voiceOption.textContent = voice.name;
      $voiceOptions.appendChild(voiceOption);
    });
  });

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    let speaker = new SpeechSynthesisUtterance($textInput.value);
    let voice = voices.find((voice) => voice.name === $voiceOptions.value);
    speaker.voice = voice;
    synth.speak(speaker);
  });
}
