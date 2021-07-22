
const Sequelize=require('sequelize')
const sequelize=require('../util/Database')

//model to access the database
//it is the structure of database
//here the tablename and coulums  are specified lik types ,primarykey,unique
const Users=sequelize.define('Assignment',{
  id:{
    type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        unique:true,
  },
    name:{
        type:Sequelize.STRING,
        primaryKey:true,
       
        
        
    },
    cricketer:{
        type:Sequelize.STRING,
       
        
        
    },
    FlagColour:{
    type:Sequelize.STRING,
   
    
    
    }
    

})
module.exports=Users;