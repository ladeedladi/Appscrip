import React from 'react'

function Header() {
    let date=new Date().toDateString()
    return (
        <div>
            <div className="header">
               <p className="headerPara">COVID-19 ind-DAILY Report</p>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <p className="date">{date}</p> 
            </div>
            
        </div>
    )
}

export default Header
