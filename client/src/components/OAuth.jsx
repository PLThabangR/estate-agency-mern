import React from 'react'
import {GoogleAuthProvider,getAuth, signInWithPopup} from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/userSlice';
const OAuth = () => {
//handle login
const handleGoogleClick =async ()=>{
    const dispatch = useDispatch();

    try{
        //Initialize google provider
     const provider = new GoogleAuthProvider();
        //initialize google authorization
        const auth =getAuth(app);
        //Wait for the google popUp
        const results = await signInWithPopup(auth,provider);

        console.log(results);
        //Create user send data to the back end
        const res = await fetch('/api/auth/google',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({name: results.user.displayName,email:results.user.email,photo:results.user.photoURL})
        })
        //feedback form backend
        const data = await res.json();
        dispatch(signInSuccess(data));
    }catch(error){
        console.log("Could not sign in with google",error)
    }
}
  return (
    <button type="button" onClick={handleGoogleClick} className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95 '>Continue with google</button>
  )
}

export default OAuth