import React from 'react'

const Navbar = ({setTheme,theme}) => {
  return (
    <div style={{
        display:"flex",
        justifyContent:"space-between"
    }}>
        <div className="nav-logo">
            <img src="" alt="logo" />
        </div>
        <div className="nav-list">
            <a href="">Home</a>
            <a href="">Home</a>
            <a href="">Home</a>
            <a href="">Home</a>
        </div>
        <div className="nav-btn">
            <button onClick={()=>setTheme(()=>{
        if (theme == "dark") {
          return "light"
        }else{
          return "dark"
        }
      })}>
        change
      </button>
            <button>
                Login
            </button>
        </div>
    </div>
  )
}

export default Navbar