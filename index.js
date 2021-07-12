
// server.js
 const express = require('express');
 const app = express();
 const port = 8080;
 const cors = require("cors");
 

 // Models and Database
 const db = require("./models")
 
 // Middlewares 
  app.use(express.json({limit: "50mb"}));
  app.use(express.urlencoded({limit: "50mb"}))
 
 // start the server
 db.sequelize.sync().then((req) => {
  app.listen(port, function() {
    console.log('Sever running on', port);
  })
 })

 //Routers
 const CenterRouter = require("./routes/centers")
 app.use("/centers", CenterRouter)
 
 // route our app
 app.get('/', function(req, res) {
  res.send('hello world!');
});