import React from 'react'

const Footer = ({setTheme,theme}) => {
  return (
    <div>
        <button onClick={()=>setTheme(()=>{
        if (theme == "dark") {
          return "light"
        }else{
          return "dark"
        }
      })}>
        change
      </button>
    </div>
  )
}

export default Footer