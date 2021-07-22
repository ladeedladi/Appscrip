import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { Scrollbars } from 'react-custom-scrollbars'
import BarGraph from './BarGraph'
import PieGraph from './PieGraph'

function Body() {
//state is used to store the datas from the api req
const [state,setState]=useState([])
const [datas,setData]=useState([])
//datas are used to store the states "kerala",tamilnadu etc
const [District,setDistrict]=useState([])
//districts are used to store the district details
    useEffect(()=>{
        //to render the state when the page renders
        const fetchData=async()=>{
            
            //to fetch data from the api
            //since its a await  the fn is async .to avoid then and catch bloack
            const {data}=await axios.get('https://api.rootnet.in/covid19-in/stats/latest')
           
           
          
           setState(data.data.regional)
            // setting the data to state

               
           
        }
        
        fetchData()
    },[])
    return (
        <div>
           
            <div className="left-main">
               
           
                <div className="graph1">
                <BarGraph p={datas} />
                </div>
                
                <div className="pie-graph">
                <PieGraph p={District}/>
                </div>
       
          
      
            
            </div>
            <div className="right-main">
            <Scrollbars style={{height:400}}>
                <ul>
                
               <li>{state.map(res=>(<div className="check-div"><input className="checkbox-left" type='checkbox' onClick={()=>{
                   const a=res
                   const {loc,deaths}=a
              
                    setData(res=>([...res,loc]))
                    setDistrict(res=>([...res,deaths]))
                    console.log(datas)
                   }} name={res.loc}/> {res.loc}  </div>))}</li>
               
               
               </ul>
               </Scrollbars>

              
           </div>
            
            </div>

            
     
    )
}

export default Body
