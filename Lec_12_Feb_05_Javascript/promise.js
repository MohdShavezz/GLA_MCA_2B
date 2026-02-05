// Promises

// setTimeout(function() {
//   console.log('order')
//   setTimeout(function() {
//   console.log('process')
//   setTimeout(function() {
//   console.log('deliver')
// }, 1000);
// }, 2000);
// }, 3000);

//callback
// function order(processCB){
//   console.log('order')
//   processCB(deliver)
// }
// function process(deliverCB){
//   console.log('process')
//   deliverCB()
// }
// function deliver(){
//   console.log('deliver')
// }

// Promises
// object, states:pending,resolved,rejected
let order=new Promise((res,rej)=>setTimeout(()=>res('order resolved...'), 1000))
let process=new Promise((res,rej)=>setTimeout(()=>rej('process rejected...'), 2000))
let deliver=new Promise((res,rej)=>setTimeout(()=>res('order resolve...'), 3000))
// order.then().catch()
// async await
// order
// .then((data)=>console.log('res_then',data))
// .catch(err=>console.log(err))

// order.then(data=>{
//   console.log('order',data)
//   return process
// }).then(data=>{
//   console.log('process',data)
//   return deliver
// }).then(data=>{
//   console.log('deliver',data)
// }).catch(err=>console.log(err))
// .finally(()=>console.log('finally'))

// async await

async function fn(){
try {
   let resOrder=await order
console.log(resOrder)
let resProcess=await process
console.log(resProcess)
let resDeliver=await deliver
console.log(resDeliver)
} catch (e) {
  console.log('error:',e)
}finally{
  console.log('finally')
}
}
fn()

