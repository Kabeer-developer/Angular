// utility types

interface User {
    name : string;
    age : number;
    email : string;
    password : string;
}
// all fields are mandatory
const user : User = {
    name : "kabeer",
    age : 20,
    email : "Kabeer@demo.com",
    password : "qwerty",
}
console.log(user);

// all fields are optional
const user1 : Partial<User> = {
    name : "kabeer",
}
console.log(user1);

// choose only required fields
type userPreview = Pick<User,"name" | "email">;

const user2 : userPreview = {
    name :"kabeer",
    email : "kabeer@demo.com",
}
console.log(user2)
// choose what not to include

type safeGuard = Omit<User,"password">;

const user3 : safeGuard = {
    name : "kabeer",
    email : "kb@demo.com",
    age : 20,
}

console.log(user3)