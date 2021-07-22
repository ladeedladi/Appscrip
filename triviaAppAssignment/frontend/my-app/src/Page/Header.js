import React from 'react'
import { useHistory } from 'react-router'
function Header() {
    const history=useHistory()
    return (
        <div>
            <div className="Header">
               <h1 className="logo">TriviaApp</h1>
               <p className="homeLink" onClick={()=>{history.push('/')}}>home</p>
            </div>
        </div>
    )
}

export default Header
