
Assignment 1

INSTRUCTION =>client side rendering is used so run frontend and backend seperately

=> always run the backend first cause here proxy is used to connect frontend and backend so that to avoid "cors-policy-error" so running frontend firt will cause "proxy error"

frontend

=>divided the page content into different pages =>using reat-router-dom made specific path for each page by route =>used state to store the result from each page. and also made an api call to the backend to store the state in the backend =>used proxy in the package.json to specify the path to the backend like(proxy=ip of loacalhost)

backend

=>created a server which run on port 5000 =>created routers to specify the path to the controller and avoid the congestion of code inthe app.js =>created model by using sequelize =>routers will redirect the req from the frontend to the appropriate controller and controller use model to access the database

=>created a database using mysql database using sequelize orm =>made the name as the primary key => first the name is stored in the backend then the datas from each page is stored inthe table by finding the row using name (which is the pimary key)

frontend

=>made the last api call from summary(page) to retrive all the data stored in the backed =>used "Error-boundary" to catch the async as well as sync error instead of using StaticGetderivedData hook is used to catch the error and the component passed to the fallbackComponent will get rendered when an error occur

backend

=>returned all the data from the database using the controller which uses the model to access the databse
