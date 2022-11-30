import express from "express"
import userRouter from "./routes/UserRouter.js";

const app = express();

const port = process.env.PORT ||8080

app.listen(port, ()=>{
    console.log("El servidor se esta ejecutando Correctamente. ");
})

//Midleware 
app.use(express.json())
app.use("/user", userRouter)
