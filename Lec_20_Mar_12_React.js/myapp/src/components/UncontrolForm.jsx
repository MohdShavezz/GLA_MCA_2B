import React, { useRef } from 'react'

const UncontrolForm = () => {
  const nameRef=useRef(null)
  const emailRef=useRef(null)

  function handleClick(e){
    e.preventDefault()
    console.log('name',nameRef.current.value)
    console.log('email',emailRef.current.value)
    // nameRef.current.value=''
  }

  return (
    <div>
      <form>
        <input type="text" ref={nameRef} name='name' placeholder='name'/>
        <input type="text" ref={emailRef} name='email' placeholder='email'/>
        <button onClick={handleClick}>Click</button>
      </form>
    </div>
  )
}

export default UncontrolForm
