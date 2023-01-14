//to create a variable containing a date we can do
let myDate = new Date();
console.log(myDate);
//get day of the month
console.log(myDate.getDate());
//get day of the week
console.log(myDate.getDay());
//get month
console.log(myDate.getMonth());
//get year since 1900
console.log(myDate.getYear());
//get full year 
console.log(myDate.getFullYear());
//get hours, minutes, seconds or milliseconds
console.log(myDate.getHours());
console.log(myDate.getMinutes());
console.log(myDate.getSeconds());
console.log(myDate.getMilliseconds());
//we can get date in a more readable format
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
//we can get UTC date or time
console.log(myDate.getUTCDate());
console.log(myDate.getUTCHours());
//get timestamp, this is the amount of seconds since Jan 1st 1970. 
console.log(Date.now());