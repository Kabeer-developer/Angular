interface User{
    name : string;
    age:number;
    email?:string;
}
const student1 : User ={
    name :"kabeer",
    age: 20,
}
const student2 : User ={
    name :"kabeer A",
    age: 20,
}
// const student3 = {
//     name : "invalid"
// }
const students : User[] =[student1,student2];
console.log(students)
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