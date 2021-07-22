//MVC controll is used
const express=require('express')

const Routes=require('./Router')
const sequelize=require('sequelize')
const Users=require('./model/mainMOdel')
//creted a server
const app=express()

//to convert the data from the frontend to json

app.use(express.json())
//to avoid the congestion of code in the same page router is used which is almost same like app
app.use('/api',Routes)



//to sync the table to the mysql. force true is used to make changes in the mysql database after the model is created
Users.sequelize.sync({force:true})
.then(res=>console.log(res))
.catch(err=>console.log(err))

const port =process.env.PORT||5000
//server port is declared and the port will print when listening
app.listen(port,()=>{
    console.log(`server runnin at http://localhost:${port}`)
})
