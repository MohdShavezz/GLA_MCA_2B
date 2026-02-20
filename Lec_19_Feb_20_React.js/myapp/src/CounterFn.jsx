import React, { useEffect, useState } from 'react'

const CounterFn = () => {

    const [count,setCount]=useState(0)

    function inc(){
        setCount(count+1)
    }

    useEffect(()=>{
        console.log('mount..')

        return ()=>{
            console.log('unmount..')
        }
    },[])
    
    useEffect(()=>{
        console.log('update..')
    },[count])
    

  return (
    <div>
       <div style={{backgroundColor:'pink'}}>
                <h2>Count : {count}</h2>
                <button onClick={()=>inc()}>INC</button>
            </div>
    </div>
  )
}

export default CounterFn
