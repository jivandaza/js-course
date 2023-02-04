window.addEventListener("resize", (e) => {
    // website size
    console.clear();
    console.log(window.innerHeight);
    console.log(window.innerWidth);
    // browser window size
    console.log(window.outerHeight);
    console.log(window.outerWidth);
});
  
window.addEventListener("scroll", (e) => {
    console.clear();
    // detect how much we've scrolled in y and X axis
    console.log(window.scrollX);
    console.log(window.scrollY);
});
  
window.addEventListener("load", (e) => {
    // detect how much we've scrolled in y and X axis
    console.log(window.screenX);
    console.log(window.screenY);
});
  
// this is way more efficient than the previous option
document.addEventListener("DOMContentLoaded", (e) => {
    console.log("DOM CONTENT LOADED");
    // detect how much we've scrolled in y and X axis
    console.log(window.screenX);
    console.log(window.screenY);
});