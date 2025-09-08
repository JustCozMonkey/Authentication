import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        index: true // pentru că probabil vei filtra după categorie
    },
    image: {
        type: String,
        required: true
    },
    rating: {
        rate: { type: Number, min: 0, max: 5 },
        count: { type: Number, min: 0 }
    }
}, { timestamps: true }); // adaugă createdAt și updatedAt automat

const Product = mongoose.model("Product", productSchema);

export default Product;
