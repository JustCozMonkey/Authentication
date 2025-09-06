import express from "express"
import bcrypt from "bcrypt"
import User from "../models/User.js";

const authRouter = express.Router();

authRouter.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body
        const hashed = await bcrypt.hash(password, 10)
        const newUser = new User({ name, email, password: hashed })
        await newUser.save()
        res.json({ message: "✅ User registered successfully" });
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }

})

export default authRouter;