import mongoose from 'mongoose';


//Rules for schema
const userSchema = new mongoose.Schema({

    username:{type:"String",required:true,unique:true},
    email:{type:"String",required:true,unique:true},
    password:{type:"String",required:true}
},
{timestamps:true}
)

//We are creating the model here
const User = mongoose.model('User',userSchema);

export default User;