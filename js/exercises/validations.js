// File containing methods to validate string and numbers

export function isString(str) {
    try {
        if (typeof str === "string" ) {
            return true;
        } else {
            throw new Error(`${str} is not a string.`);
        }
    } catch (e) {
        console.error(e);
        return false;
    }
}

export function isNumber(num) {
    try {
        if (typeof num === "number" ) {
            return true;
        } else {
            throw new Error(`${num} is not a number.`);
        }
    } catch (e) {
        console.error(e);
        return false;
    }
}