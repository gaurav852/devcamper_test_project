const express = require("express")
const dotenv = require("dotenv")

//route file for linking step no 13
const bootcamps = require('./routes/bootcamps') 

// below line is loading the environment variable
dotenv.config({ path: './config/config.env' })

//now intializing app variable with express
const app = express()

app.use('/api/v1/bootcamps', bootcamps)

//now in oreder to load the server we need to listent to the port
const PORT = process.env.PORT || 5000;    //REMEMBER THAT TO ACCESS ENVIRONMENT VARIABLE WE USE "process.env.variable_name"
app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} on the port ${process.env.PORT}`))