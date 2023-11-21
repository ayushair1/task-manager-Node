var express=require("express")
var connection=require("./db/conn")
var bodyParser = require('body-parser')
var cors=require("cors")
const conn = require("./db/conn")






var app=express()
var jsonParser = bodyParser.json()
// app.use(core)
try{

const connection= conn.getConnection();
console.log("DataBase Connected sucessfully");

}
catch(err){
    console.log("error connected to DB");
}
app.use("/api/v1",jsonParser,cors(), require("./route/routes"));
app.listen(8081,()=>{
    console.log("server started on port 8081");
})


