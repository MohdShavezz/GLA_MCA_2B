// Currying
// function sum(a) {
//   return function(b){
//     return function(c){
//       return a+b+c
//     }
//   }
// }
// console.log(sum(1)(2)(3))
// sum(1,2,3)

// Closure 
// function outer(){
//   let a=10 //lexical scope
//   return function(){
//     console.log(a)
//     a++
//   }
// }
// let a=outer()
// a()
// a()
// a()

//Execultion Context 
let r=10
function fn1(){
  let a=1
  console.log('this is fn',a)
  fn2()
}
function fn2(){
  let a=2
  console.log('this is fn',a)
  fn3()
}
function fn3(){
  let a=3
  console.log('this is fn',a)
}

debugger
fn1()
console.log(r)


