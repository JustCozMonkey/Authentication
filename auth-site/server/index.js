import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import authRouter from "./src/routes/authRouter.js"

import dotenv from "dotenv"
dotenv.config()

const PORT = process.env.PORT || 7000
const MONGOURL = process.env.MONGO_URL

const app = express()

app.use(cors())
app.use(express.json())

app.use("/auth", authRouter)

mongoose.connect(MONGOURL).then(async () => {
    console.log("connected")
    app.listen(PORT, () => {
        console.log(`conneccted to port ${PORT}`)
    })

}).catch(e => console.log(e))