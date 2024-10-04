import mongoose from "mongoose";
import jwt from "jsonwebtoken";

export const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECREAT, { expiresIn: "30d" });
};





export const dbConnection = () => 
    mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("Database connected successfully!")
    }).catch((error) => {
    console.error("Error Databse",error)
})
