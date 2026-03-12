import React, { useEffect, useState } from 'react'
import './form.css'

const Form = () => {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [formData,setFormData]=useState({name:'',email:''})

//   console.log(name)
//   console.log(email)


function handleChange(e){
    const {name,value}=e.target
    setFormData({
        ...formData,
        [name]:value
    })
    console.log(formData)
}
function handleSubmit(e){
    e.preventDefault()
    if(formData.name==''||formData.email===''){
        console.log('field are required...')
        return
    }
    console.log('your data: ',formData.name,formData.email)
}


function handleFormData(e){ //shortcut
    e.preventDefault()
    const data=new FormData(e.target)
    //  const name = data.get('name'); // Use .get() for single values
    // const email = data.get('email');
    //  console.log('Name:', name);
    // console.log('Email:', email);
    const dataObject = Object.fromEntries(data.entries());
    console.log(dataObject)
    e.target.reset();

}
  return (
      <form onSubmit={handleFormData}>
        <h2>Fill the details</h2>
            {/* <input type="text" name='name' placeholder='name' onChange={(e)=>setName(e.target.value)}/>
            <input type="text" name='email' placeholder='email' onChange={(e)=>setEmail(e.target.value)}/> */}

            {/* <input type="text" name='name' placeholder='name' onChange={handleChange}/>
            <input type="text" name='email' placeholder='email' onChange={handleChange}/> */}

            <input type="text" name='name' placeholder='name' />
            <input type="text" name='email' placeholder='email' />
            <button type='submit'>submit</button>
      </form>
  )
}

export default Form
