const Users=require('../model/mainMOdel')



//controller to save the name of the user
exports.NameController=(req,res)=>{

        const {name}=req.body

    Users.create({name
    }).then(res=>res.json({'message':'success'}))
    .catch(err=>{res.json(err)})
    console.log(req.body)
 
  
}

    


//controller to save the Crickerter which is selected by  the user
 exports.mainController=(req,res)=>{
   

   const {crickterData,name}=req.body
   console.log(req.body)
   console.log(crickterData+"   "+name)

   Users.findOne({where:{name}}).then(res=>{
       console.log(res)
    res.update({cricketer:crickterData}).then(result=>{
        console.log(result)
    })
   
   }).catch(err=>{res.json(err)})
  

  



}


////controller to save the flag chose by by the user

exports.flagController=(req,res)=>{
    
 
   const {flagged,name}=req.body

console.log(flagged)
console.log(name)

   Users.findOne({where:{name}}).then(res=>{
    console.log(res)
 res.update({FlagColour:flagged}).then(result=>{
     console.log(result)
 })

}).catch(err=>{res.json(err)})


}
 
//to send all the details stored in the database to the user
exports.getDataController=(req,res)=>{
    
    Users.findAll().then(result=>{
    console.log("secess ithink so")
   res.json(result).then(()=>{
      console.log("success")
  })
 
 }).catch(err=>{res.json(err)})
 
 
 }


