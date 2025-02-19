
import React, { useContext} from 'react'
import { Link, useParams } from 'react-router-dom'
import { UserContext } from '../context/usercontext';

const UserDetails = () => {
  const {id} = useParams();
  const {users} = useContext(UserContext)
  const user = users.find((user) => user.id === parseInt(id))

  if(!user) return <p>User not found</p>
 
  
  return (
    <div className='w-full bg-sky-50 pt-20 min-h-[100vh]'>
      <div className="max-w-2xl mx-auto p-4 sm:p-6 md:p-8 bg-white shadow-lg rounded-lg border border-gray-200  flex flex-col gap-4 mt-14 w-[90%] sm:w-[80%] md:w-[60%]">
      <h1 className="text-2xl font-bold text-center">{user.name}</h1>

      <div className='flex flex-col gap-1'>
      <p className='flex flex-wrap gap-3'><strong>Username:</strong> {user.username}</p>
      <p className='flex flex-wrap gap-3'><strong>Email:</strong> {user.email}</p>
      <p className='flex flex-wrap gap-3'><strong>Phone:</strong> {user.phone}</p>
      <p className='flex flex-wrap gap-3'><strong>Website:</strong> {user.website}</p>
      </div>
      
      <div className='flex flex-col gap-1'>
      <h2 className=" text-lg font-semibold">Address</h2>
      <p>{user.address.street}, {user.address.suite}</p>
      <p>{user.address.city} - {user.address.zipcode}</p>
      <p><strong>Geo:</strong> {user.address.geo.lat}, {user.address.geo.lng}</p>
      </div>

      <div className='flex flex-col gap-1'>
      <h2 className=" text-lg font-semibold">Company</h2>
      <p className='flex flex-wrap gap-3'><strong>Name:</strong> {user.company.name}</p>
      <p className='flex flex-wrap gap-3'><strong>Catchphrase:</strong> {user.company.catchPhrase}</p>
      <p className='flex flex-wrap gap-3'><strong>Business:</strong> {user.company.bs}</p>
      </div>

      <Link to="/" className=" text-white bg-cyan-900 py-3 px-4 rounded-lg hover:bg-cyan-700 transition duration-500 text-center">
        ← Back to Home
      </Link>
    </div>
    </div>
  )
}

export default UserDetails
