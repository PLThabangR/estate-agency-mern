import express from "express";
import connectDB from "./src/mongoDB/connect.js";
import dotenv from "dotenv";
import { userRoutes } from "./src/Routes/userRoute.js";
import {authRoute} from './src/Routes/authRoute.js';
import errorMiddleware from "./src/middleware/errorMiddlware.js";

const app = express();
//initialize dotenv
dotenv.config();
//Allow json as the input of the server
app.use(express.json())
//validation middleware
app.use(errorMiddleware)
//Routes
app.use("/test",userRoutes);
app.use("/auth",authRoute)



const MONGO_URL="mongodb+srv://thabang:thabang@mern-agency.tgen2fp.mongodb.net/?retryWrites=true&w=majority"
const startServer = ()=>{
    try {
  //  connectDB(MONGO_URL);
    app.listen(3000, ()=>{
        console.log("Server is listening on port https://localhost:3000");
    
    });
    }catch(error){
        console.log(error);

    }

}

startServer();
