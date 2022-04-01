// parampara
console.log("Hello world");
console.log("Hello Pepcoders");

// let, var, const ways to declaring a variable 
let a;
a = "Akansha";//string type
console.log("My name is ", a);

let b = 10;//number
console.log("I am number", b);

let c;
c = true;
console.log("i am a boolean value which says :" ,c);

let d = null;
console.log("Hey I am the coolest:",d);

// if, else
// loops -> for, while

let num = 258;
if(num%2==0){
    console.log(num, " is a even number");
}
else{
    console.log(num, "is an odd number");
}


// for while loop

for(let i =1; i<20; i++){
    console.log("I am in for loop: ",i);
}

let limit = 10;
while(limit>0){
    console.log("I am in while loop: ", limit);
    limit--;
}


// Check if 17 is a prime number or not

let p1 = 17;
let flag = true;
for(let i =2; i<=p1/2; i++){
    if(p1%i ==0)
    {
        flag = false;
    }
}
if(flag == true)
{
    console.log(p1, " is a prime number");
}
else{
    console.log(p1, " is a not prime number");
}



//  Home work questions 

//  1. reverse a number
// 2. factorial of a number
