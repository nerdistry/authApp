import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Signup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword]= useState('')
  const [error, setError]= useState('')

  const {createUser} = UserAuth()
  const navigate = useNavigate()
  
  const handleSubmit = async (e) => {
    e.preventDefault()
  setError('')  
  try{
    await createUser(email, password)
  } catch (e) {
    setError(e.message)
    console.log(e.message)
  }
}

  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
      <div>
        <h1 className='text-2xl font-bold py-2'>
          Sign up for a free account.
        </h1>
        
      </div>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col py-2'>
        <label className='py-2 font-medium'>Email Address</label>
        <input onChange={(e) => setEmail(e.target.value)} className='border p-3' type="email" />
        </div>

        <div className='flex flex-col py-2'>
        <label className='py-2 font-medium'>Password</label>
        <input onChange={(e) => setPassword(e.target.value)} className='border p-3' type="password" />
        </div>

        <button className='border-cyan-700 bg-cyan-800 hover:bg-cyan-700 w-full p-4 my-2 text-white'>Sign Up</button>

        <div className='flex flex-col py-2'>
        <p className='py-2'>Already have an account?
        <Link to='/' className='underline'> Sign in</Link>
        </p>
        </div>

      </form>
    </div>
  )
}

export default Signup