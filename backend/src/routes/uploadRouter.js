// import express from 'express'
// // const express = require('express');
// // import uploadController from "./uploadController.js"
// import uploadController from '../controllers/uploadController.js';
// // const uploadController = require('./uploadController.js');

// const uploadRouter = express.Router();

// // Mount the upload controller to the desired path
// uploadRouter.use('/upload', uploadController);

// export default uploadRouter;
// // module.exports = uploadRouter;



import express from "express";

import  { uploads } from '../controllers/uploadController.js';


const uploadRouter = express.Router();

uploadRouter.post("/", uploads);




export default uploadRouter;