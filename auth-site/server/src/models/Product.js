import mongoose from "mongoose";

const prodictShema = new mongoose.Schema({
    id: Number,
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
    rating: { rate: Number, count: Number }
})

const Product = mongoose.model("Product", prodictShema)

export default Product