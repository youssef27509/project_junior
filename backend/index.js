module.exports=function(){}
const express =require("express")
const cors=require("cors")
const db=require("./config/db")
const app = express()
const PORT = 3000

const name=require("./routes/name")
const price=require("./routes/price")
const types=require("./routes/types")

app.use(cors());
app.use(express.json());
app.use("/api/name",name)
app.use("/api/price",price)
app.use("/api/types",types)

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);

})