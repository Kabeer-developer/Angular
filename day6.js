"use strict";
// generics
function greet(name) {
    return name;
}
console.log(greet([1, 2, 3, 4, 5]));
console.log(greet("Kabeer"));
console.log(greet(true));
console.log(greet(["kabeer", "Rahul", "Monky"]));
let response = {
    data: "Logged in ",
    succes: true,
};
console.log(response.succes, response.data);
