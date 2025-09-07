import mongoose from "mongoose";
import dotenv from "dotenv"
import Product from "./src/models/Product.js";
import products from "./src/productsJson/products.json" assert {type: "json"}

dotenv.config();

const MONGOURL = process.env.MONGO_URL;

async function importProducts() {
    try {
        await mongoose.connect(MONGOURL)
        console.log("connected to db")

        await Product.deleteMany();
        console.log("Db empty");

        await Product.insertMany(products)
        console.log("Products inserted")

        process.exit()
    } catch (error) {
        console.error("Cant import", error.message)
        process.exit(1)
    }
}

importProducts()