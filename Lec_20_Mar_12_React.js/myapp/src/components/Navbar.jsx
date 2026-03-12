import React from 'react'
import './footer.css'
import Right from './Right'
import Left from './Left'

let logo="GOOGLE"
let list=['Home','Contact','Services']

const Navbar = () => {
   
  return (
    <div>
      <div id='nav' >
        <Left logo={logo}/>
        <Right list={list}/>
      </div>
    </div>
  )
}

export default Navbar
