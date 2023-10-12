import express from "express";
import connectDB from "./src/mongoDB/connect.js";
import dotenv from "dotenv";

const app = express();
//initialize dotenv
dotenv.config();

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
