document.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData();
  const $files = document.querySelector('input[type="file"][multiple]');
  for (let file of $files.files) formData.append("files", file);
  console.log(formData);
});
