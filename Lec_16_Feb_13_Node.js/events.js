
//events
import {EventEmitter} from 'events'
const myEvent=new EventEmitter()

// myEvent.on('greet',(data)=>{
//     console.log(data)
// })

// myEvent.emit('greet','hello there')
// myEvent.emit('greet','hi morning')

myEvent.on('event2',(data)=>{
console.log(data)
})
myEvent.on('event1',()=>{
    console.log('event1 call')
    myEvent.emit('event2','this is event2 emit')
})

myEvent.emit('event1')
myEvent.on('error',(err)=>{
    console.log(err)
})
