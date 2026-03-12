import React from 'react'

const Right = ({list}) => {
    // console.log(props)

  return (
    <div className="right">
            {
                list.map(ele=>{
                    return <a key={ele} href="">{ele}</a>
                })
            }
        </div>
  )
}

export default Right
