export default function getLocation(sectionId) {
  const $section = document.getElementById(sectionId);
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  const locationCompleted = (position) => {
    const $locationMessage = `
    <h1>Looks like this is where you're located:</h1>
    <h1>Latitude: ${position.coords.latitude}</h1>
    <h1>Longitude: ${position.coords.longitude} </h1>
    <a target="_blank" href="https://www.google.com/maps/@${position.coords.latitude},${position.coords.longitude},19z"> VIEW MAP </a>`;
    $section.innerHTML = $locationMessage;
  };

  const errorLocating = (error) => {
    const $errorMessage = `
    <h1>Unable to geolocate:</h1>
    <h1>${error.message}</h1>
    <h1>Make sure you have given the correct permissions and reload</h1>`;
    $section.innerHTML = $errorMessage;
  };

  const locate = () => {
    navigator.geolocation.getCurrentPosition(
      locationCompleted,
      errorLocating,
      options
    );
  };

  locate();
  navigator.permissions
    .query({ name: "geolocation" })
    .then((permissions) => permissions.addEventListener("change", locate));
}
