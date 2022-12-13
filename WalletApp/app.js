import cors from "cors"
import express from "express"
import mongoose from "mongoose";
import testRouter from "./routes/testRouter.js";
import userRouter from "./routes/UserRouter.js";
import loginRouter from "./routes/loginRouter.js"

const app = express();

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log("El servidor se esta ejecutando Correctamente. ");
})

mongoose.connect("mongodb+srv://walletapp:walletapp@clusterwalletapp.1kn2fpn.mongodb.net/WalletApp", (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("La base de datos se encuentra conectada. ");
    }
    
})


//Midleware 
app.use(express.json())
app.use(cors({
    origin: "http://localhost:3001"
}))
app.use("/user", userRouter)
app.use("/test", testRouter)
app.use("/login", loginRouter)

