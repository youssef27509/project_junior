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
app.use("/api/Name",name)
app.use("/api/Price",price)
app.use("/api/Types",types)

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);

})