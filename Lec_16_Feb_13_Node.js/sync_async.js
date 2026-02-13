const fs=require('fs')

// Blocking

// console.log('Start');
// const data = fs.readFileSync('myfile.txt', 'utf8'); // Blocks here
// console.log(data)
// console.log('End');

// Non-blocking
// console.log('Start');
// fs.readFile('myfile.txt', 'utf8', (err, data) => {
// console.log(data)
//   if (err) throw err;
//   console.log('Non-blocking operation completed');
// });
// console.log('End');

console.log('1. Start');
Promise.resolve().then(() => console.log('3. Promise'));
process.nextTick(() => console.log('2. Next tick'));
setImmediate(() => console.log('5. Immediate'));
setTimeout(() => console.log('4. Timeout'), 0);
console.log('6. End');
// 2 3 4 5 6
// 1 6 2 3 4 5