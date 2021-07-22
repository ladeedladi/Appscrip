import React, { useState,useContext } from 'react'
import { useHistory } from 'react-router'
import { AppContext } from '../Context'
import axios from 'axios'
function Flag() {
   const {name,setName}=useContext(AppContext)
    const [flag,setFlag]=useState([])
    const history=useHistory()
    console.log(flag)

 const sendFlag=async()=>{
    let flagged=flag.toString()
    console.log(flagged)
     const {Flagg}=await axios.post('api/setFlag',{flagged,name})
     setName('')
 }
    return (
     <div>
            <h1>What are the colors in the Indian national flag? </h1>
           

           <form action="">
           <input  onClick={(e)=>{const name= e.target.name
                 setFlag(prev=>{return[...prev,name]})}} type="checkbox" id="" name="white" value="white"/>
                 <label for="white"> White</label><br />
              <input  onClick={(e)=>{const name= e.target.name
                 setFlag(prev=>{return[...prev,name]})}} type="checkbox" id="yellow" name="yellow" value="yellow"/>
              <label for="yellow"> yellow</label><br />
              <input  onClick={(e)=>{const name= e.target.name
                 setFlag(prev=>{return[...prev,name]})}} type="checkbox" id="green" name="green" value="green"/>
               <label for="green"> green</label><br />
              <input  onClick={(e)=>{const name= e.target.name
                 setFlag(prev=>{return[...prev,name]})}} type="checkbox" id="orange" name="orange" value="orange"/>
               <label for="orange">orange </label><br />
             
               

           </form>
              
                 
            
            <button className="btn-FLAG" onClick={()=>{
                sendFlag()
                history.push('/3')}}>Next</button>
            </div>
    )
}

export default Flag
