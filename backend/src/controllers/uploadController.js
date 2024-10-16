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
    // Add multer middleware for file upload
    upload.single('File'), // 'file' is the name of the form field for file upload
    expressAsyncHandler(async (req, res) => {
        try {
            // Access the uploaded file information from req.file
            const file = req.file;

            if (!file) {
                return res.status(400).json({
                    message: "No file uploaded",
                });
            }

            // You can access the file path like this
            const filePath = file.path;

            // Return success response with file path
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