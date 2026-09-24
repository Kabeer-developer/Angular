interface User{
    name : string;
    age:number;
    email?:string;
}

type User1 ={
   readonly name : string;
    age : number;

}
const user : User1 ={
    name : "kabeer",
    age : 20,
}
user.age = 21;
// user.name = "Boss";
console.log(user)