// the second way of selecting is the most recommended one
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));

// we also have two different ways to set attributes
document.documentElement.lang = "es";
console.log(document.documentElement.lang);

// we can see an example of how these two lines can give different results
console.log(document.querySelector(".dom-link").href);
console.log(document.querySelector(".dom-link").getAttribute("href"));

// we also have two different ways to set attributes
document.documentElement.lang = "es";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "en");
console.log(document.documentElement.lang);

// we can store DOM elemtnes in variables
const linkDOM = document.querySelector(".link-dom");

// it's commont to see DOM variables named using a $ at the beginning
const $link = document.querySelectorAll("a")[2];
console.log($link);

// we can now use this variable to modify the selected element
$link.setAttribute("target", "_blank");
// we can use this attribute to make sure the new tab has no dependency with the current one
$link.setAttribute("rel", "noopener");
$link.setAttribute("href", "http://google.com");
console.log($link.hasAttribute("rel"));

/* 
 * Data attributes
*/

// these are two different ways we can access data attributes
console.log($link.getAttribute("data-description"));
console.log($link.dataset.description);