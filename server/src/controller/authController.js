import User from "../model/UserModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import {errorHandler} from '../middleware/errorHandler.js';
//Create a json web token
const JWT_SECRET ="thabangR20";
//Sign-up new user
export const signUp = async (req, res, next) => {
  const { username, password, email } = req.body;

  //Check if user exist
  const existingUser = await User.findOne({email})
  if(existingUser){
      next("Email Already taken please login")
 }
  //Encrypt password with 10 as salt
  const hashedPassword = bcryptjs.hashSync(password, 10);
  //create a new user
  const newUser = new User({ username, email, password: hashedPassword });
  try {
     await newUser.save();
    res.status(201).json({
      succes: true,
      message: "User created success",
      newUser: {
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (error) {
    next(error);
  }
};

//Sign in
export const signIn = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    //check email if exists
    const validUser = await User.findOne({ email });
    //if email is true
    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }
    //Check if password is true using bcrypt
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
    return  next(errorHandler(401, "Invalid Credentials"));
    }

    ///Add the cookie in the browser to authenticate the user
    //const JWT_SECRET ="thabangR20";
    const token = jwt.sign(
      { id: validUser.id, secret: validUser._id },
      JWT_SECRET
    );

    //Do not return the password to client
    //const { password:pass,...rest} =validUser._doc;
    validUser.password =undefined;
    res
      .cookie("acces_token",token, { httpOnly: true })
      .status(200)
      .json({ validUser,token
        });
  } catch (error) {
    next(error);
  }
};

//Google sign in
export const goolgeLogin = async(req,res,next)=>{
  //Get data from url
  const {email,name,photoUrl} = req.body;
  try{
    //Check if user exists
    const user = await User.findOne({email});
    //the user exist we just want to authenticate the user
    if(user){
      const token =jwt.sign({id:user._id},JWT_SECRET);
      //Hide password
      const {password:pass,...rest}=user._doc;
      //Return this information to the user
      res.cookie('access_token',token,{httpOnly:true})
      .status(200)
      .json(rest)
    }else{
      ///create a password
      //We generate 36 characters and get only 8 digits from that
      const generatedPassword =Math.random().toString(36).slice(-8);
      //we hashed the password
      const hashedPassword = bcryptjs.hashSync(generatedPassword,10);
      //create a new user
      const newName = name.split(" ").join("").toLowerCase() + Math.random().toString(36).slice(-8);;
      const newUser = new User({username:newName,email:email,password:hashedPassword,avater:photoUrl});
      //Save new user
      await newUser.save();
      //create a new token for the user
      const token =jwt.sign({id:newUser._id},JWT_SECRET);
     //Hide the password 
      const {password:pass,...rest}=newUser._doc;
      const password = undefined;
      //return this to the user
      res.cookie('access_token',token,{httpOnly:true})
      .status(200)
      .json(newUser)

    }

  }catch(error){
    next(error)
  }
}