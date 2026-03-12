import { useState } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Button from "./components/Button"
import Form from "./components/Form"
import UncontrolForm from "./components/UncontrolForm"

function App() {

  return (
    <>
      <Navbar/>
      <Button width={"5rem"} bgColor={'red'} radius={'10px'} btnText={'Login'}/>
      <Button width={"10rem"} bgColor={'yellow'} radius={'0px'} btnText={'Signup'}/>
      <h1>Vite + React</h1>
      {/* <Form/> */}
      <UncontrolForm/>
      <Footer/>
    </>
  )
}

export default App
