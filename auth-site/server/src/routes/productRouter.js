import express from "express"
import bycrypt from "bcrypt"
import Product from "../models/Product.js";

const productRouter = express.Router();



productRouter.get("/", async (req, res) => {
    try {
        const products = await Product.find(req.query)
        res.json(products)

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

export default productRouter