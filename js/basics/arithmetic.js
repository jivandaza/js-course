import log from './log_text.js';

//the interpreter will first resolve what's inside parenthesis
//then roots and powers, followed by division and multiplication
//finally additions and substractions 

let myExpression = 2 * 3 + (5 - 4) / 2;
log(myExpression);

//when we compare with two equal signs, the interpreter will convert data to same type and compare
log("7" == 7);

//when we compare with three equal signs, the interpreter will not convert data to same type
log("7" === 7);

//if we use ++i it will first increment and then do whatever we're trying to do
//if we use i++, the action will first be completed and then the number will increment
let i = 8;
log(++i);
log(i++);
log(i);