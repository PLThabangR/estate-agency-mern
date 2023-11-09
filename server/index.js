import express from "express";
import cors from "cors";
import cookieParser from "./cookie-parser
import connectDB from "./src/mongoDB/connect.js";
import dotenv from "dotenv";
import { userRoutes } from "./src/Routes/userRoute.js";
import {authRoute} from './src/Routes/authRoute.js';
import errorMiddleware from "./src/middleware/errorMiddlware.js";

//initialize express
const app = express();
//Get cookie info
app.use(cookieParser());

//initialize dotenv
dotenv.config();
//Alow url access
app.use(cors())
//Allow json as the input of the server
app.use(express.json())

//error middleware
app.use((err,req,res,next) => {
    const statusCode =err.statusCode || 500;
    const message = err.message || 'Internal Server Err';
    return res.status(statusCode).json({
        "success": false,
        statusCode,
        message,
      });

});
//Routes
app.use("/test",userRoutes);
app.use("/api/auth",authRoute)



const MONGO_URL="mongodb+srv://thabang:thabang@mern-agency.tgen2fp.mongodb.net/?retryWrites=true&w=majority"
const startServer = ()=>{
    try {
   connectDB(MONGO_URL);
    app.listen(5000, ()=>{
        console.log("Server is listening on port https://localhost:5000");
    
    });
    }catch(error){
        console.log(error);
    }

}

startServer();
