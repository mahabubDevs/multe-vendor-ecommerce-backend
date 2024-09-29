import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["user", "vandor", "admin"],
        default: "user"
    },
    address: {
        street: String,
        city: String,
        state: String,
        zip: String,
        country: String
    },
    phone: {
        type: String
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps:true
}
)

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 8);
    next();
});

userSchema.methods.comparePassword = async function (candidatePasswrod,userPassword) {
    return await bcrypt.compare(candidatePasswrod,userPassword)
}

export const User = mongoose.model("User", userSchema)