module.exports=function(){}
const express =require("express")
const cors=require("cors")
const db=require("./config/db")
const app = express()
const PORT = 3000

const plants=require("./routes/Plants")

app.use(cors());
app.use(express.json());
app.use("/api/plants",plants)

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);

})