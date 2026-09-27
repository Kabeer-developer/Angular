"use strict";
// utility types
// all fields are mandatory
const user = {
    name: "kabeer",
    age: 20,
    email: "Kabeer@demo.com",
    password: "qwerty",
};
console.log(user);
// all fields are optional
const user1 = {
    name: "kabeer",
};
console.log(user1);
const user2 = {
    name: "kabeer",
    email: "kabeer@demo.com",
};
console.log(user2);
const user3 = {
    name: "kabeer",
    email: "kb@demo.com",
    age: 20,
};
console.log(user3);
