import User from '../model/UserModel.js';
import bcryptjs from 'bcryptjs';

export const signUp = async (req,res,next)=>{
   
    console.log(req.body);

    const {username,password,email}= req.body;
    //Encrypt password with 10 as salt
    const hashedPassword = bcryptjs.hashSync(password,10);
    //create a new user
    const newUser = new User({username,email,password:hashedPassword})
   try{

    await newUser.save();
    res.status(201).json("User create success")
   }catch(error){
   next(error);
   }
} 