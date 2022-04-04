// var keyword
// 1. redeclare
// 2. reassign.

var a = 10;
console.log(a);
a = 30;
var a = 20;
console.log(a);
var a = "Hello";
console.log(a);

function fn(){
    console.log(a);
    a = 40;
    console.log(a);
}
fn();
console.log("Hey I am outside function");

function fn1(){
    console.log(a);
}
fn1();

var a = 40;
function b(){
    console.log("Hey I am inside b ", a);    
}


function fn3(){
    var a = 30;
    b();
    console.log("I am at line 35",a);
}
fn3();