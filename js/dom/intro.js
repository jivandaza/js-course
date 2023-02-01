console.log("Document elements below:");
// there are multiple types of elements we can select
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.scripts);
console.log(document.documentElement);
console.log(document.links);
console.log(document.title);
console.log(document.charset);
console.log(document.images);
console.log(document.forms);
setTimeout(() => {
  console.log(document.getSelection().toString());
}, 2000);
document.write("<h1>Hello From DOM!</h1>");