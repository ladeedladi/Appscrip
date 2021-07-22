import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import {useErrorHandler} from 'react-error-boundary'

function Summary() {
    const Handler=useErrorHandler()
   const [allData,setAllData]=useState([])
  
const GobackToHome=useHistory()


    const fetchAllData=async()=>{
    try{
        const {data} = await axios.get('/api/fetchAllData')
   
        setAllData(data)
        console.log(data)
        console.log(allData)
    }catch(err){

     Handler(err)


    }
   
    }
   





    return (
        <div>
              
           
            {allData.map(res=>{return(
                <div className="last-page">
             <h1>Game {res.id} :Date {res.createdAt.split('T')[0]}</h1>
            <h1>Hello:{res.name}</h1>
            <h2>Here are the answers selected:</h2>
            <p>Who is the best cricketer in the world?</p>
            <p className="answer">answer:{res.cricketer}</p><br /><br />
            <p>What are the colors in the national flag?</p>
            <p className="answer">answer:{res.FlagColour.replace("," , " ")}</p>
            </div>
            )})}

            <button className='btn-down' onClick={()=>
                GobackToHome.push('/')}>FINISH</button>
            <button className='btn-down2' onClick={()=>
                fetchAllData() }>HISTORY</button>    
                   
        </div>
    )
}

export default Summary
