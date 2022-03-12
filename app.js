let express = require("express")
let app = express()
let path = require("path")
let port = 5500

app.use(express.static(path.join(__dirname,"public")))

app.get("/",(req,res)=>{
    return res.sendFile(path.join(__dirname,"views","home.html"))
})
app.get("/babbage",(req,res)=>{
    return res.sendFile(path.join(__dirname,"views","babbage.html"))
})
app.get("/berners-lee",(req,res)=>{
    return res.sendFile(path.join(__dirname,"views","berners-lee.html"))
})
app.get("/hamilton",(req,res)=>{
    return res.sendFile(path.join(__dirname,"views","hamilton.html"))
})
app.get("/clarke",(req,res)=>{
    return res.sendFile(path.join(__dirname,"views","clarke.html"))
})
app.get("/hopper",(req,res)=>{
    return res.sendFile(path.join(__dirname,"views","hopper.html"))
})
app.get("/lovelace",(req,res)=>{
    return res.sendFile(path.join(__dirname,"views","lovelace.html"))
})
app.get("/turing",(req,res)=>{
    return res.sendFile(path.join(__dirname,"views","turing.html"))
})
app.get("/colaboraciones",(req,res)=>{
    return res.sendFile(path.join(__dirname,"views","colaboraciones.html"))
})
app.get("/ayuda",(req,res)=>{
    return res.sendFile(path.join(__dirname,"views","ayuda.html"))
})
app.get("/nosotros",(req,res)=>{
    return res.sendFile(path.join(__dirname,"views","nosotros.html"))
})

app.get("*",(req,res)=>{
    return res.sendFile(path.join(__dirname,"views","error.html"))
})

app.listen(port, ()=>{
    console.log(`servidor corriendo en el puerto http://localhost:${port}`)
})