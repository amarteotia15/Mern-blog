import React from 'react'
import { Link , useLocation } from 'react-router-dom'
import {Button, Label,TextInput} from 'flowbite-react'

export default function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
     <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
      {/* left */}
      <div className="flex-1">
      <Link to="/" className=' text-4xl font-bold dark:text-white'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>CodeToLive</span>

        Blog
        </Link>
        <p className='text-sm mt-5'>
          This is a Demo Project. You can sign up with your email and 
          password 
          or with Google.
        </p>
      </div>
      {/* right */}
      <div className="flex-1">
        <form className='flex flex-col gap-4'>
          <div>
            <Label value="Your username"></Label>
            <TextInput type='text' placeholder='Username' id='username'></TextInput>
          </div>
          <div>
            <Label value="Your Email"></Label>
            <TextInput type='text' placeholder='Email' id='email'></TextInput>
          </div>
          <div>
            <Label value="Your Password"></Label>
            <TextInput type='password' placeholder='password' id='password'></TextInput>
          </div>
          <Button gradientDuoTone='purpleToPink' type='submit'>
            Sign Up
          </Button>
        </form>
        <div className="flex gap-2 text-sm mt-5">
          <span>Have an account ?</span>
          <Link to='/signin' className='text-blue-500'>Sign In</Link>
        </div>
      </div>
     </div>
    </div>
  )
}
