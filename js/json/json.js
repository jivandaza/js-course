//all properties names in a JSON must be between double quotes

//JSON.parse will transform from string to JS objects
//JSON.stringify will transform from js objects to string

//get json data from API and print character names
async function printCharacterNames() {
    let jsondata = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    ).then((json) => json.json());
    return jsondata;
}
  
async function init() {
    const json = {
        string: "JoSyD",
        number: "25",
        boolean: "true",
        array: "[]",
        object: {},
    };
  
    console.log(json);
    console.log(JSON.stringify(json));
  
    const jsonString =
        '{"string":"JoSyD","number":"25","boolean":"true","array":"[]","object":{}}';
  
    console.log(jsonString);
    console.log(JSON.parse(jsonString));
    console.groupCollapsed("Fetching information...");
    const characters = await printCharacterNames().then((data) => data);

    for (let character of characters) {
        console.group(character.name);
        for (let property in character) {
            console.log(`${property}: ${character[property]}`);
        }
        console.groupEnd();
    }
    console.groupEnd();
}
  
init();