// generics

function greet<T>(name: T):T{
    return name;
}
console.log(greet<Array<number>>([1,2,3,4,5]));
console.log(greet<string>("Kabeer"));
console.log(greet<boolean>(true));
console.log(greet<Array<string>>(["kabeer","Rahul","Monky"]));

interface ApiRes<T> {
    data : T;
    succes : boolean;
}

let response : ApiRes<string>={
    data : "Logged in ",
    succes : true,
}
console.log(response.succes,response.data);