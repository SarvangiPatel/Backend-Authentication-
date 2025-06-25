
// all db logics here

const mongoose = require("mongoose");

async function DbConnection() {
    // database connection logic
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/Auth")
        console.log("Database connected successfully")

    } catch (error) {
        console.error("Database connection failed:", error);

    }
}

// export the function
module.exports= DbConnection