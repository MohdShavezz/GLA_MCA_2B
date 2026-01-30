

// function fn(a,b=5){ // function definition , params
//   // console.log('hi')
//   return a+b
// }
// let res=fn(4) // args
// console.log(res)

// fn declaration vs fn expression
// function fn(){) // function declaration
// let fn=function(){} // function expression


// normalsum()
// function normalsum(){
//   console.log('normal sum')
// }

//arrow function
// let sum=()=>{
//   console.log('hello sum')
// }

//anonyms function
// let a=function(){
//   console.log('hi')
// }
// a()

//higher order function
// function sum(){
//   console.log('this is sum')
// }
// function fn1(sum){
//   console.log('this is fn1')
//   return sum()
// }
// fn1(sum)


//CALLBACK
// function sum(){
//   console.log('this is sum')
// }
// function fn(callback){
//   console.log('this is fn')
//   callback() // sum is callback fn
// }
// fn(sum)

// IIFE 
// (function(){
//   console.log('hi')
//   })()

//RECURSION
// 1. factorial
// !5 => 5*4*3*2*1= 120
// 2. faboNicciSeries
// 1 2 3 5 8 13

// function fact(n){
//   if(n==1) return 1
//   return n*fact(n-1) //5*4*3*2*1
// }
// console.log(fact(5))

// 2. fabonicci
// function fabo(n){
//   if(n==0||n==1) return n 
//   return fabo(n-1)+fabo(n-2)
// }
// console.log(fabo(2))

//Callstack Execution
var a=10
console.log(a)
fn1()
fn2()

function fn1(){
  console.log('fn1 run')
}
function fn2(){
  console.log('fn2 run')
}

