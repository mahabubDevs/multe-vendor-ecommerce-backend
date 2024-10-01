
import { User } from "../models/userModel.js";
import expressAsyncHandler from "express-async-handler";
import { generatToken } from "../utils/utils.js";



//@desc Get a register
//@route /api/user/register
//@access public
export const registerUser = expressAsyncHandler(async (req,res) => {
    const { name, email, password } = req.body;
    console.log(req.body)
    try {
        // First we find if the user already  exist
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "Alrady user exists" });
        }
        const user = await User.create({
            name,
            email,
            password
        });
        if (user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            }); 
        }else {
            res.status(400).json({
                message: "Invalid User Data",
               }) 
        }
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            error: error.message,
        });
    }
})

//@desc Get a login
//@route /api/user/login
//@access public



export const loginUser = expressAsyncHandler(async (req,res) => {
    const {  email, password } = req.body;
    console.log(req.body)
    try {
        // First we find if the user already  exist
        const user = await User.findOne({ email });
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generatToken(user._id)
        });
        // comparePassword problem
        // if (user && (await user.comparePassword(password))) {
        //     res.json({
        //         _id: user._id,
        //         name: user.name,
        //         email: user.email,
        //         role: user.role,
        //         token: generatToken(user._id),
        //     });
        // }else {
        //     res.status(400).json({
        //         message: "Invalid Email and Passwrod",
        //        })
        // }
    } catch (error) {
        res.status(500).json({
            message: "login controller problem ",
            error: error.message,
        });
    }
})


//@desc Get a profile
//@route /api/user/profile
//@access private

export const profile = expressAsyncHandler(async (req,res) => {
    const { _id } = req.body;
    console.log(req.body)
    try {
        // First we find if the user id already  exist
        const user = await User.findById({ _id });
        
        
        if (user) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                phone: user.phone,
                isActive: user.isActive
            });
        }else {
            res.status(400).json({
                message: "User not found",
               })
        }
    } catch (error) {
        res.status(500).json({
            message: "login controller problem ",
            error: error.message,
        });
    }
})

//@desc Get a updateprofile
//@route /api/user/profile
//@access private


export const updatProfile = expressAsyncHandler(async (req,res) => {
    const { _id } = req.user;
    console.log(req.body)
    try {
        // First we find if the user id already  exist
        const user = await User.findById({ _id });
        
        
        if (user) {
            user.name = req.body.name || user.name;
            user.email = req.body.email || user.email;
            if (req.body.password) {
                user.password = req.body.password;
            }
            user.phone = req.body.phone || user.phone;
            user.address = req.body.address || user.address;

            const updateUser = await user.save(); 

            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                phone: user.phone,
                isActive: user.isActive,
                address: user.address,
            });
        }else {
            res.status(400).json({
                message: "User not found",
               })
        }
    } catch (error) {
        res.status(500).json({
            message: "login controller problem ",
            error: error.message,
        });
    }
})


//@desc Get all profile
//@route /api/user
//@access private


export const getAllProfile = expressAsyncHandler(async (req,res) => {
        const users = await User.find();
        if (users) {
            res.json(users);
        }else {
            res.status(400).json({
                message: "User not found",
               })
        }
   
})


//@desc Get Delete profile
//@route /api/user/:id
//@access private


export const deleteUserProfile = expressAsyncHandler(async (req,res) => {
       try {
           await User.findByIdAndDelete(req.params.id);
           res.json({
               message: "User Remove",
           })
       } catch (error) {
        res.status(500).json({
            message: "login controller problem ",
            error: error.message,
        });
       }
   
})

