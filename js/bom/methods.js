const $openButton = document.getElementById("open-window"),
    $closeButton = document.getElementById("close-window"),
    $printButton = document.getElementById("print-window");

// we need to store the opening of a new tab in a variable so we can close it later
let newTab;

$openButton.addEventListener("click", (e) => {
    newTab = window.open("https://github.com");
});
$closeButton.addEventListener("click", (e) => {
    newTab.close();
});
$printButton.addEventListener("click", (e) => {
    window.print();
})