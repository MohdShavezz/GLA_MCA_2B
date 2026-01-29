// let str='hello worlds'
// index 
// immutable
// console.log(str[0])
// str[0]="M"
// console.log(str)

// console.log(str.toUpperCase())
// console.log(str.toLowerCase())
// console.log(str.slice(0,4))
// console.log(str.slice(6,12))
// console.log(str.slice(6,))
// console.log(str.slice(-6,-5))
// console.log(str.includes('helo'))
// console.log(str.indexOf('h'))
// console.log(str.replace('l','m'))
// console.log(str.replaceAll('l','m'))
// let sp=str.split(' ')
// console.log(sp.reverse())
// let jn=sp.join('')


// let arr='my name is tom'
// //1 mot si eman ym 
// //2 tom is name my
// let res=arr.split(' ')
// res=res.reverse()
// res=res.join(' ')
// console.log(res)


// slice (str) vs splice (arr)
// let str='hello worlds'
// let arr=[1,2,3,4,5]
// // replace 2 with 7,8  // [1,2,7,8,4,5]

// // splice(ind,no delete,no of ele add)
// // arr.splice(2,1,7,8)// [1,2,7,8,4,5]
// // arr.splice(2,0,7,8)// [1,2,7,8,4,5]
// arr.splice(2,0,[7,8])// [1,2,7,8,4,5]

// console.log(arr)

// let word='madam'
// let rev=word.split('').reverse().join('')
// // console.log(word,rev)
// word===rev?console.log('yes'):console.log('no')

// let str = "javascript";
// let count = str.match(/[aeiou]/gi);
// console.log(count.length)



// let f='hello'
// let l='worlds'
// console.log(f + ' ' + l)
// console.log(`${f} ${l} lasjd ${2+3}`)

// console.log(f.concat(' ',l,' tom'));


let s="hello" // Hello
// toUpperCase, slice , concat
// let upperH=str.slice(0,1).toUpperCase()
// let last=str.slice(1,)
// console.log(upperH.concat(last))

console.log(s[0].toUpperCase() + s.slice(1));
