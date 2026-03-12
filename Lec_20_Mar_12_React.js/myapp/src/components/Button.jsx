import React from 'react'

const Button = (props) => {
    // console.log(props)
    const {radius,width,bgColor,btnText}=props
  return (
    <div style={{width:width,backgroundColor:bgColor,borderRadius:radius}}>
      {btnText}
    </div>
  )
}

export default Button
