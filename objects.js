// Objects 
// object-proprties
// properties-> Key value Pair

let student = {
    fname : "Akasnsha",
    sname : "Gupta",
    E_no  : 123,
    City  : "Ghaziabad",
    State  : "UP",

}
console.log(student);
console.log(student.sname);
student.email = "abc@gmail.com";
console.log("....................");
console.log(student.email);

let capAmerica = {
    firstName : "Steve",
    secondName : "Rogers",
    friends : ["Bucky", "Tony", "Dr Banner", "Natasha"],
    age : 100,
    isFirstAvenger : false,
    address :{
        city: "New York",
        state : "Queens"
    },
    fn : function(){
        console.log("Hey I am Inside an object");
    }
}

console.log(capAmerica.address.state);
console.log(capAmerica.friends[2]);
console.log(capAmerica.fn());

console.log(capAmerica["address"]["state"]);