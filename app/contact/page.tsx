'use client'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiVercel } from 'react-icons/si';
import { useRouter } from 'next/navigation'
import React from 'react'

function Contact() {
  const route= useRouter()
  return (
    <div className='bg-gradient-to-r from-slate-400 to-gray-900 p-4'>
      <div className='bg-gradient-to-r from-gray-700 to-black text-white w-auto h-8 flex space-x-3 justify-end rounded-md'>
        <button className='w-11 h-6 p-1' onClick={()=>route.push("/")}>Home</button>
      <button className='w-11 h-6 p-1' onClick={()=>route.push("/about")}>About</button>
      <button className='w-16 h-6 p-1' onClick={()=>route.push("/contact")}>Contact</button>
        </div>


    <div className="social-links">
  <h3 className="text-lg font-bold text-black flex justify-center p-5">Connect with Me</h3>
  <p className='text-black p-5'>I'd love to hear from you! Whether you have a question, a project idea, or just want to connect, feel free to reach out to me through any of the platforms below. Let's create something amazing together!</p>
  </div>


  <div className='flex justify-center space-x-3 p-8'>

<div className='flex justify-start'>
  <div className='w-40 h-36 rounded-md bg-gradient-to-r from-white to-blue-950 border-black border-2'>
  <a
    href="https://www.linkedin.com/in/ramisa-fatima-8639822b8/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex justify-center text-blue-950 hover:text-blue-800 p-16"
  >
    LinkedIn
    <div className='text-blue-950 hover:text-blue-800 p-4'>
    <FaLinkedin size={30} />
    </div>
  </a>
  </div>
  </div>
  

  <div className='flex justify-center'>
  <div className='w-40 h-36 rounded-md bg-gradient-to-r from-white to-black border-black border-2'>
  <a
    href="https://github.com/dashboard"
    target="_blank"
    rel="noopener noreferrer"
    className="flex justify-center text-gray-700 hover:text-black p-16"
  >
    GitHub
    <div className='text-gray-700 hover:text-black p-4'>
    <FaGithub size={30} />
    </div>
  </a>
  </div>
  </div>

<div className='flex justify-end'>
<div className='w-40 h-36 rounded-md bg-gradient-to-r from-pink-700 to-purple-800 border-black border-2'>
  <a
    href="https://www.instagram.com/ai_coding.19/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex justify-center text-purple-800 hover:text-pink-500 p-16">
    Instagram
    <div className='text-purple-800 hover:text-pink-500 p-4'>
    <FaInstagram size={30} />
    </div>
  </a>
  </div>
  </div>

  <div className='flex justify-center'>
  <div className='w-40 h-36 rounded-md bg-gradient-to-r from-white to-black border-black border-2'>
  <a
          href="https://vercel.com/ramisa-fatimas-projects"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center text-black hover:text-gray-700 p-16">
          Vercel
          <div className='text-black hover:text-gray-700 p-4'>
          <SiVercel size={30} />
          </div>
        </a>
        </div>
        </div>

  </div>
  </div>
  )
}

export default Contact