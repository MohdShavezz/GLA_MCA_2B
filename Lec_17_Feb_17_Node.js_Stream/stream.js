const fs = require('fs')


const readStream=fs.createReadStream('file.txt')
const writeStream=fs.createWriteStream('file2.txt')
const appenStream=fs.createWriteStream('file2.txt',{
    flags:'a'
})

// readStream.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })
// readStream.on('error',(err)=>{
//     console.log('Error:',err)
// })
// readStream.on('end',()=>{
//     console.log('End run..')
// })

// writeStream.write('this is file2 updated',()=>{
//     console.log('written succes...')
// })

writeStream.write('appended code',()=>{
    console.log('append succes...')
})