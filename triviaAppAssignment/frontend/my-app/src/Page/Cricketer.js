import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { useContext } from 'react'
import { AppContext } from '../Context'
import axios from 'axios'
function Cricketer() {
const [crickterData,setCrickterData]=useState('')
const [color,setColor]=useState(true)
const {name}=useContext(AppContext)
console.log(crickterData)



const sendWhichCricketer=async()=>{
    
    let hell
const {data}=await axios.post('/api/setData', hell={crickterData,name})
console.log(data)

}



    const history=useHistory()
    const cricketers=["a)SachinTendulkar","b)viratKohli","c)AdamGilchirst","d)JacquesKallis"]
    return (
        <div>
            <div>
            <h1>Who is the best cricketer in the world?</h1>
            <ul>
                {cricketers.map((batsmen,idx)=>(<li className={color?"blue":"darkblue"}  key={idx} onClick={()=>{
                   setColor(!color)
                   setCrickterData(batsmen)
                }
                   
                      
                    }>{batsmen}</li>))
                    }
                

            </ul>
            </div>
            <button className="btn-Cricket" onClick={()=>{sendWhichCricketer()
                 history.push('/2')}}>Next</button>
        </div>
    )
}

export default Cricketer
