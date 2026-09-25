export class User{
    name : string = "Kabeer";
    age = 20;

    constructor(name:string,age:number){
        this.age = age;
        this.name = name;
    }

    greet(){
        console.log(`hello ${this.name} you are ${this.age} years old.`);
    }
}
const user = new User("Kabeer",20);
user.greet();
console.log(user);
