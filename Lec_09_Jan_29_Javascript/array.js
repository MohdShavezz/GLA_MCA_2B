// Stores multiple data in single variable
// in contiguous memory location
// eg: let arr = ["apple",123,true]
// Array has  indexing [ 0,1,2,3.....  ] to get the data
// eg: [ "apple",123, true, 1.2, 'banana']  // loosely type lang ( store mutiple data types values)
// let arr = [ 1, "john", true] // looselytype
console.log(arr[0]) // first element
console.log(arr[arr.length-1]) // first element
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}
arr.push('newEle') // insert at last
arr.unshift('startEle')  // inset at beginnning
arr.pop() // remove last ele
arr.shift() // remove first aray ele
// let arr2=arr //takes reference


// let a=new Array()

// let arr=[1,2,3,3,2,4,5]
// let arr2=arr // ref copy
// let arr2=[...arr]
// arr2[0]=5
// console.log(arr,arr2)

// includes, indexOf, find,
// console.log(arr.includes(4))
// console.log(arr.indexOf(1))
// console.log(arr.find((ele)=>{
//   return ele>2
// }))

// console.log(new Set(arr))
// let s=new Set([1,2,3,3,4,4,5])
// console.log(Array.from(s))

// every vs some
let arr=[1,2,3,3,2,4,5]
// let res=arr.every((ele)=>{
//   return ele==3
// })
// let res=arr.every(ele=> ele>0)
// let res=arr.some(ele=> ele>5)
// console.log(res)


// math
// console.log(Math.ceil(3.6))
// console.log(Math.floor(3.6))
// console.log(Math.round(3.3))
// console.log(Math.round(3.7))
// console.log(Math.random()*10)
// let v=Math.random()*10
// console.log(v.toFixed(3)) 

// let str = '214321sdfJ'
// console.log(parseInt(str)) //214321


// let s='214423gljd' //1+2+3+4=> 10
// // let s2='41561kjsg' //17
// let n=parseInt(s)
// console.log(typeof n)
//214423
// let res=0
// let sum=0
// while(n!=0){
//   // res=0
//   let last=n%10
//   sum= sum+last
//   n=Math.floor(n/10)
// }
// console.log(sum)

let s='214423gljd' //1+2+3+4=> 10
//214423
let str=String(parseInt(s))
console.log(typeof str, str)
