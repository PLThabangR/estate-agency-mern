import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
const {currentUser} = useSelector((state) => state.user);
  return (
    <div className='p-3 max-w-lg mx-auto'>
    <h1 className='text-3xl font-semibold text-center my-5'>Profile</h1>
      <form className='flex flex-col gap-4'>
      <img src={currentUser.avater} alt='UserProfile'className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2'/>    
      
      <input type="text" id='username' placeholder='Username' className='border p-3 rounded-lg' />
      <input type="email" id='email' placeholder='Email' className='border p-3 rounded-lg' />
      <input type="text" id='Password' placeholder='Password' className='border p-3 rounded-lg' />
      <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
      Update
    </button>
      </form>

    </div>
  )
}

export default Profile