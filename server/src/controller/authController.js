import User from "../model/UserModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

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
      next(errorHandler(404, "User not found"));
    }
    //Check if password is true using bcrypt
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      next(errorHandler(401, "Invalid Credentials"));
    }

    ///Add the cookie in the browser to authenticate the user
    //Create a json web token
    const JWT_SECRET ="thabangR20";
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
