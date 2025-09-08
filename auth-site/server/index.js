import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import authRouter from "./src/routes/authRouter.js"
import productRouter from "./src/routes/productRouter.js"
import session from 'express-session'

import dotenv from "dotenv"
dotenv.config()

const PORT = process.env.PORT || 7000
const MONGOURL = process.env.MONGO_URL

const app = express()

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use(express.json())

app.use(session({
    secret: "secretMess",
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
        maxAge: 1000 * 60 * 60
    }
}))

app.use("/auth", authRouter)
app.use("/products", productRouter)

mongoose.connect(MONGOURL).then(async () => {
    console.log("connected")
    app.listen(PORT, () => {
        console.log(`conneccted to port ${PORT}`)
    })

}).catch(e => console.log(e))