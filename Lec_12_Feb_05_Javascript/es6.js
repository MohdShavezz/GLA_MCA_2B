//ES6 2015>
// let const 
// arrow function 
// destructuring
// for of/in

// destructuring
// let arr=[1,2,3]
// let a=arr[0]
// let b=arr[1]
// let [a,b]=arr

// spread operator, rest operator
// let obj={
//   name:'tom',age:22
// }
// let obj2={...obj,phone:'9999',age:23}
// console.log(obj2)

// function sum(...a){
//   console.log(a)
//   console.log(Object.values(arguments))
//   console.log(Array.from(arguments))
// }
// sum(1,2,3,4)

// Map & Set
// let s1=new Set([1,2,2,3,4,5])
// console.log(s1)

// let m1=new Map()
// m1.set(1,'one')
// m1.set('two',2)
// m1.delete(1)
// m1.clear()
// console.log(m1.get(1))
// console.log(m1.get('two'))
// console.log(m1.size)
// console.log(m1)

// class objects
// class Person{
//   name //
//   constructor(name){
//     this.name=name
//   }
//   getName(){
//     return this.name
//   }
  
// }
// const c1=new Person('tom')
// console.log(c1.getName())

// map filter reduce
// let arr=[1,2,3,4,5] 
// sum of even squares : 20
// let even= arr.filter(ele=>ele%2==0)
// let sqr=even.map(ele=>ele*ele)
// let sum=sqr.reduce((acc,val)=> acc+val,0)

// let sum=arr.filter(ele=>ele%2==0)
// .map(ele=>ele*ele)
// .reduce((acc,val)=> acc+val,0)
// console.log(sum)
// modules