import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/usercontext'

const Navbar = () => {
  const {searchTerm, setSearchTerm} = useContext(UserContext)
  return (
    <div className=''>
      <nav className='w-full  min-h-20 bg-[#13353f] text-white flex flex-col flex-wrap md:flex-row  justify-between items-center px-10 text-center py-2 fixed top-0 left-0 z-50 gap-2'>
      <div className='flex items-center gap-4 sm:gap-8 w-full md:w-auto justify-center md:justify-start'>
        <Link to="/" className='text-2xl font-medium'>FetchInfo</Link>
        <input type="text" placeholder='Search' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className='border-[0.5px] border-gray-50 rounded-xl px-2 py-2 outline-0 w-full sm:w-80 md:w-96'/>
      </div>
      <div className='flex items-center gap-4'>
      <Link to="/" className='font-medium text-lg'>Home</Link>
      <a href="https://github.com/shelavalepallavi" target='_blank'>
      <button className='bg-sky-900 px-4 py-2 rounded-lg font-medium hover:bg-cyan-700 transition duration-500'>Github</button>
      </a>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
