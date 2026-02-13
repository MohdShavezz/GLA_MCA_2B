// fs 
import fs from 'fs'
// fs.readFile('myfile.txt', (err, data) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log(data.toString())
// })
// fs.writeFile('file2.txt','this is written contec',(err)=>{
//   if (err) throw err;
//   console.log('The file has been saved!');
// })
// fs.writeFile('file2.txt','updated content',(err)=>{
//   if (err) throw err;
//   console.log('The file has been saved!');
// })
fs.appendFile('file2.txt','my append data',(err)=>{
    if (err) throw err;
  console.log('The file has been appended!');
})