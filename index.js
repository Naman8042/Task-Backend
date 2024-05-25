const express = require("express")
const app = express()
const cors = require("cors")
const PORT = 4000; 
app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.use(cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }))

const routes = require("./routes/Routes")

app.use("/", routes)

app.listen(PORT,()=>{
    console.log("server started")
})

const dbconnect = require("./config/Dbconnect")
dbconnect()
