export default function detectCamera(sectionId) {
  let stream;
  let cameraConstraints = {
    audio: false,
    video: true,
  };
  let $section = document.getElementById(sectionId);
  async function showError(e) {
    const $errorMessage = `<h1>Unable to access the camera:</h1>
    <h1>${e}</h1>
    <h1>Make sure you have given the correct permissions.</h1>`;
    $section.innerHTML = $errorMessage;
  }
  async function show(stream) {
    let video = document.createElement("video");
    video.srcObject = stream;
    video.addEventListener("loadedmetadata", (e) => {
      video.play();
      $section.innerHTML = "";
      $section.appendChild(video);
    });
  }
  async function detect() {
    try {
      stream = await navigator.mediaDevices.getUserMedia(cameraConstraints);
      show(stream);
    } catch (e) {
      showError(e);
    }
  }
  detect();
  navigator.permissions.query({ name: "camera" }).then((result) => {
    result.addEventListener("change", detect);
  });
}
