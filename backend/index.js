import express from "express";
import dotenv from "dotenv";
import { dbConnection } from "./src/utils/utils.js";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import { errorHandler, notFoundErrorHandelar } from "./src/middlewares/errorHandlear.js";
import userRoutes from "./src/routes/userRoutes.js";
import vendorRouter from "./src/routes/vendorRoutes.js";
import productRoutes from "./src/routes/productRoutes.js";
import brandRoutes from "./src/routes/brandRoutes.js";
import categoryRoutes from "./src/routes/categoryRoutes.js";
import subCategoryRoutes from "./src/routes/subCategoryRoutes.js";
import wishlistRoutes from "./src/routes/wishlistRoutes.js";
import reviewRoutes from "./src/routes/reviewRoutes.js";


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
app.use("/api/product",productRoutes)
app.use("/api/brand",brandRoutes)
app.use("/api/category",categoryRoutes)
app.use("/api/subcategory",subCategoryRoutes)
app.use("/api/wishlist",wishlistRoutes)
app.use("/api/review",reviewRoutes) 

//Error handeling
app.use(errorHandler);
app.use(notFoundErrorHandelar);

// Starting the surver  
const PORT = process.env.PORT || 9000
app.listen(PORT, () => {
    console.log(`server is running ${PORT}`);
},)

