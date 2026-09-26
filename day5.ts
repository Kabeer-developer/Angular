// union types
let usn : number | string = "";
usn = 107;
console.log(usn);
usn = "23bbtcs107";
console.log(usn);

function greet(name : string | boolean){
    if(typeof name === "string"){
        console.log(`Hello ${name}`);
    } else if(typeof name === "boolean"){
        console.log("Enter the name in alphabets");
    } else {
        console.log("Enter a valid response");
    }
}

greet("kabeer");
greet(false);
// greet(101);

let role: "User" | "Admin" | "Guest";
role = "Admin";
console.log(role);

