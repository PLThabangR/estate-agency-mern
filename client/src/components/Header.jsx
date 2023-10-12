import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch} from 'react-icons/fa'
const Header = () => {
  return (
    <div className='bg-slate-200 shadow-md' >
    <div className='flex justify-between items-center max-w-6xl mx-auto p-4'>
    <Link to="/">
    <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
    <span className='text-slate-500'> TR</span>
    <span className='text-slate-700'> Housing</span>
    </h1>
    </Link>

    
    <form className='bg-slate-100 p-2 rounded-lg flex items-center' >
    <input type="text" placeholder='search..' className="bg-transparent focus:outline-none w-24 sm:w-64"
    
    />
    <FaSearch className="text-slate-700"/>
    </form>

    <ul className='flex gap-3'>
    <Link to='/'>
    <li className='hidden sm:inline text-slate-700 hover:underline' >Home</li>
    </Link>
    <Link to='/about'>
    <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
    </Link>
    <Link to='/sign-up'>
    <li className='hidden sm:inline text-slate-700 hover:underline'>Sign in</li>
    </Link>
    </ul>

    </div>

    </div>
  )
}

export default Header