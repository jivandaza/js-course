import log from './log_text.js';

try {
    log("Hello");
    log("This");
    log("Is");
    log("A");
    log("new");
    log("Log");
}
catch(err) {
   log(`Se ha producido un error: ${err.message}`);
}