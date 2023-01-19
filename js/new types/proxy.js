// we can use proxies to change the behaviour of an object
const person = {
    firstName: "",
    lastName: "",
    age: 0
  };
  
  // we can even do something like data validation before inserting to the object
  const handler = {
    set(obj, prop, value) {
      obj[prop] = value;
      //we must return true to indicate the insertion was successful
      return true;
    }
  };
  
  const josy = new Proxy(person, handler);
  nico.firstName = "Josyd";
  nico.lastName = "Daza";
  nico.age = 22;
  
  console.log(josy);
  
  //we can add new properties to the object just assinging them 
  josy.email = "joser1.jidl@gmail.com";