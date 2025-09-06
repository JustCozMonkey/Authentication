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
authRouter.post("/signin", async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        const validPass = await bcrypt.compare(password, user.password)
        if (!validPass) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        console.log("Login successful")
        res.json({ message: "Login successful", user: { id: user._id, name: user.name, email: user.email } })

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

export default authRouter;