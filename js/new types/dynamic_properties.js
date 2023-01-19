const userObj = {};
const users = ["Jossyd", "Katherine", "Daza", "Morfeo"];

//this is how we can dinamycally assign property names to an object
users.forEach((user, index) => userObj[`id_${index}`] = user);

console.log(userObj);