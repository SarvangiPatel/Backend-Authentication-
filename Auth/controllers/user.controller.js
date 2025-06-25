// user controller logic here

const UserModel = require("../models/user.model");
const bycrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userControllers = {

    test: (req, res) => {
        res.status(200).json({
            message: "User test route is working"
        });
    },

    register: async (req, res) => {
        const { name, email, password } = req.body;

        // Basic validation
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        try {

            const isExistUser = await UserModel.findOne({ email })
            console.log(isExistUser);
            if (isExistUser) {
                return res.status(400).json({ message: "User already exists" });
            }
            res.send("User registered successfully");
            bycrypt.hash(password, 5, async (err, hash) => {
                if (err) {
                    console.error("Error hashing password:", err);
                    return res.status(500).json({ message: "Internal server error" });
                }

                await UserModel.create({
                    name,
                    email,
                    password: hash
                });
                res.status(201).json({ message: "User registered successfully" });

            })

        } catch (error) {
            console.error("Error registering user:", error);
            res.status(500).json({ message: "Internal server error" });

        }
    },

    signin: async (req, res) => {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        try {
            const user = await UserModel.findOne({ email });

            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            bycrypt.compare(password, user.password, async (err, result) => {
                if (err) {
                    console.error("Error comparing passwords:", err);
                    return res.status(500).json({ message: "Internal server error" });
                }

                if (!result) {
                    return res.status(401).json({ message: "Invalid password" });
                }

                try {
                    const token = jwt.sign(
                        { id: user._id, email: user.email },
                        "asdfghjkl",
                        { expiresIn: "1h" }
                    );

                    res.cookie("Access_Token", token, { httpOnly: true });
                    return res.status(200).json({ message: "User signed in successfully", user });
                } catch (error) {
                    console.error("Error signing in user:", error);
                    return res.status(500).json({ message: "Internal server error" });
                }
            });
        } catch (error) {
            console.error("Error signing in user:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }



}



module.exports = userControllers;