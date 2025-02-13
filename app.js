import express from "express";
import cors from "cors";
const app = express();
app.use(cors())
app.use(express.json())

app.get('/hello',(req,res)=>{
    return res.status(200).json('Ola seu poha')
})


app.listen(4444,()=>{
    console.log("FUNFO A API")
})