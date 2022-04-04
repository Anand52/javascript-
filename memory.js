  console.log("line 4",a);
  var a;
  console.log("line 6",a);
  a = 10;
  console.log("line 8", a);
  fn1();
  function fn1(){
      console.log("Hey I am a function");
  }
  fn1();


//   fn2();
  var fn2 = function fun(){
      console.log("Hey i am function decleared as a variable");
  }
  fn2();