import express from "express";
import connectDB from "./src/mongoDB/connect.js";
import dotenv from "dotenv";
import { userRoutes } from "./src/Routes/userRoutes.js";

const app = express();
//initialize dotenv
dotenv.config();

//Routes
app.use("/test",userRoutes)

const MONGO_URL="mongodb+srv://thabang:thabang@mern-agency.tgen2fp.mongodb.net/?retryWrites=true&w=majority"
const startServer = ()=>{
    try {
   // connectDB(MONGO_URL);
    app.listen(3000, ()=>{
        console.log("Server is listening on port https://localhost:3000");
    
    });
    }catch(error){
        console.log(error);

    }

}

startServer();
