import React, { useContext, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import { AppContext } from '../Context'
function Name() {
    const [error,setError]=useState(false)
    const {name,setName}=useContext(AppContext)

    const sendName=async()=>{
       try{
        let personName={name:name}
        const {NameData}=await axios.post('/api/setName',personName)
        console.log(NameData)
       }
       catch(err){
           setError(true)
       }
    }

    const history=useHistory()
    return (
        <div>
        {error?(<h1>name already exist</h1>) :(<div>
            <h1>what is your name?</h1>
            <input onChange={(e)=>{setName(e.target.value)}} type="text" className="inputbox" font-size="60px" placeholder="name" value={name}/>
            <button className="btn"  onClick={()=>{
                  sendName()
                history.push('/1')}}>Next</button>
        </div>)}
        </div>
    )
}

export default Name
