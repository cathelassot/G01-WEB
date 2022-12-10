import express from "express";
import userModel from "../models/userModel.js";

const testRouter = express.Router()

testRouter.get("/", async (req, res) => {

    // const variable = req.body.variable

    let documentos;

    try {
        documentos = await userModel.find
            ({
                "edad": { $gte: 20, $lte: 40 }
            }).sort({ "edad": -1 })//sort es para ordenar los campos ej ascendente (1) en la edaad y descendente es con -1
    } catch (error) {

    }
    res.json(documentos)
})

export default testRouter