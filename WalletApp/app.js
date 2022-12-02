import express from "express"
import mongoose from "mongoose";
import userRouter from "./routes/UserRouter.js";

const app = express();

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log("El servidor se esta ejecutando Correctamente. ");
})

mongoose.connect("mongodb+srv://SydenApp:SydenApp@clustersydenapp.heb9m49.mongodb.net/syden-app?retryWrites=true&w=majority", (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("La base de datos se encuentra conectada. ");
    }
    
})


//Midleware 
app.use(express.json())
app.use("/user", userRouter)
