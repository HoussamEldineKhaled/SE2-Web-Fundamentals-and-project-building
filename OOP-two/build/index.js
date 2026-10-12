"use strict";
//rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(3, 6, 8));
// rest parameters should come last
function greetAll(greeting, ...names) {
    return names.map(name => `${greeting} ${name}`).join(" ");
}
console.log(greetAll("Hello", "Johnny", "Bill"));
// mixed parameter types
function generateMessage(prefix, suffix = ".", ...words) {
    return `${prefix} ${words.join(" ")}${suffix}`;
}
console.log(generateMessage("Marahib", undefined, "ya", "jad"));
// typing union parameters
function NumStr(...items) {
    items.forEach(item => {
        if (typeof item === "string") {
            console.log(`String: ${item}`);
        }
        else {
            console.log(`Number: ${item}`);
        }
    });
}
NumStr("hello", 67, "john", "doe", 90);
// tuple rest parameters
function sumMinTwo(...numbers) {
    return numbers.reduce((total, numb) => total + numb, 0);
}
console.log(sumMinTwo(5, 7, 3));
// read only parameters
function display(...items) {
    console.log(items.join(", "));
}
display("john", "sammy", "jeremiah");
function format(value) {
    if (typeof value === "boolean") {
        return value ? "yes" : "no";
    }
    else if (typeof value === "number") {
        return `${value.toFixed(2)}`;
    }
    else {
        return `${value}`;
    }
}
console.log(format(1));
console.log(format(false));
function getValue(key) {
    const data = {
        "name": "Amy",
        "age": 37,
        "active": true
    };
    return data[key];
}
console.log(getValue("name"));
