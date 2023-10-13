import User from '../model/UserModel.js';
import bcryptjs from 'bcryptjs';

export const signUp = async (req,res,next)=>{
   
    

    const {username,password,email}= req.body;

    if(username || email){
        next("User already taken")
    }
    //Encrypt password with 10 as salt
    const hashedPassword = bcryptjs.hashSync(password,10);
    //create a new user
    const newUser = new User({username,email,password:hashedPassword})
   try{
    await newUser.save();
    res.status(201).json({
        succes:true,
        message:"User created success",
        user:{
            username:newUser.username,
            email: newUser.email
        }})
   }catch(error){
   next(error);
   }
} 

//Sign in