import express from "express"
import bcrypt from "bcrypt"
import User from "../models/User.js";
import session from "express-session";

const authRouter = express.Router();

authRouter.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body
        const hashed = await bcrypt.hash(password, 10)
        const newUser = new User({ name, email, password: hashed })
        await newUser.save()
        res.json({ message: "User registered successfully" });
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
        req.session.userId = user._id

        res.json({ message: "Login successful", user: { id: user._id, name: user.name, email: user.email } })

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

authRouter.get("/session", async (req, res) => {

    try {

        if (!req.session.userId) {
            return res.json({ session: false, message: "id dont exist" })
        }
        const user = await User.findById(req.session.userId)
        if (!user) {
            return res.json({ session: false, message: "User dont exist" });
        }

        res.json({ session: true, name: user.name })
    } catch (err) {
        res.status(500).json({ message: "Internal server Error" })
    }
})

authRouter.post("/logout", (res, req) => {
    req.session.destroy(() => {
        res.clearCookie("connect.sid");
        res.json({ message: "Logged out" });
    });
})

export default authRouter;