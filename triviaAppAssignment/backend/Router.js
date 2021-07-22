const express=require('express')
const routes=express.Router()
const mainController=require('./controller.js/mainController')


//specified the path to each controller
routes.post('/setData',mainController.mainController)

routes.post('/setName',mainController.NameController)
routes.post('/setFlag',mainController.flagController)
routes.get('/fetchAllData',mainController.getDataController)
module.exports=routes