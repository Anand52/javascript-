// function keyword(parameter){
//     //
//     body
//     //
// }

// normal funcion

function f1()
{
    console.log("Hello I am function 1");
}
f1()
//  functions with para meters 
function f2(a,b){
    console.log("sum of a & b ", a+b);
}
f2(10,15);
// function which returns something
function f3(a,b)
{
    return a*b;
}
 let ans = f3(21,5);
 console.log(ans);
 console.log(f3(30,5));


//  4. Immediately invoked functional 
(function f4(a =2, b=4){
console.log("I am an life");
console.log(a*b);
})();


// function as a variable
let fv = function f5(){
    console.log("hello a variable");
}
console.log(fv);
console.log(fv());

//  function as a variable

let f6 = function f5()
{
    console.log("Hello I am variable function")
}

console.log(f6);
console.log(f6());

let random;
console.log("random", random);

//  function aas a variable parameter
let f7 = function f5(x,y)
{
    console.log("hey i am a function");
    return x+y;
}
console.log("f7 : " ,f7(10,20));

f8