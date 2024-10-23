

import expressAsyncHandler from "express-async-handler";
import multer from "multer";
import path from "path";
import fs from "fs";

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = 'uploads/';
        // Create the uploads directory if it doesn't exist
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

export const uploads = [
    upload.single('File'), // Ensure the client uses 'File' as the field name
    expressAsyncHandler(async (req, res) => {
        try {
            const file = req.file;

            if (!file) {
                return res.status(400).json({
                    message: "No file uploaded",
                });
            }

            const filePath = file.path;

            res.status(200).json({
                message: "Brand created successfully",
                filePath: filePath,
            });
        } catch (error) {
            res.status(500).json({
                message: "Something went wrong during brand creation!",
                error: error.message,
            });
        }
    })
];

// Define the deleteFile function
const deleteFile = (filePath) => {
    try {
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
            console.log(`File at ${filePath} deleted successfully.`);
        } else {
            console.log(`File at ${filePath} does not exist.`);
        }
    } catch (error) {
        console.error(`Error deleting file at ${filePath}:`, error.message);
    }
};

export const deleteUploadFile = expressAsyncHandler(async (req, res) => {
    try {
        const filePath = req.body.filePath;

        if (!filePath) {
            return res.status(400).json({
                message: "File path is required for deletion",
            });
        }

        deleteFile(filePath);

        res.status(200).json({
            message: 'File deleted successfully',
        });
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong while deleting the file!',
            error: error.message,
        });
    }
});
