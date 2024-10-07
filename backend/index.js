import express from "express";
import dotenv from "dotenv";
import { dbConnection } from "./src/utils/utils.js";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import { errorHandler, notFoundErrorHandelar } from "./src/middlewares/errorHandlear.js";
import userRoutes from "./src/routes/userRoutes.js";
import vendorRouter from "./src/routes/vendorRoutes.js";


//connect environment data
dotenv.config();

//Mongodb Database Connection
dbConnection();


const app = express();
//Middlewares connection
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//Api Routing
app.use("/api/user",userRoutes)
app.use("/api/vendor",vendorRouter)

//Error handeling
app.use(errorHandler);
app.use(notFoundErrorHandelar);

// Starting the surver  
const PORT = process.env.PORT || 9000
app.listen(PORT, () => {
    console.log(`server is running ${PORT}`);
},)

