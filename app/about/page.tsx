'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

function About() {
  const route= useRouter()
  return (
    <>
    <div className='bg-gradient-to-r from-slate-400 to-gray-900 p-4'>
    <div className='bg-gradient-to-r from-gray-700 to-black text-white w-auto h-8 flex space-x-3 justify-end rounded-md'>
        <button className='w-11 h-6 p-1' onClick={()=>route.push("/")}>Home</button>
      <button className='w-11 h-6 p-1' onClick={()=>route.push("/about")}>About</button>
      <button className='w-16 h-6 p-1' onClick={()=>route.push("/contact")}>Contact</button>
        </div>
        <div className='w-96 h-4'>
        <h1 className='pt-4 flex justify-center'><b>About Me</b></h1>
        <p className='flex justify-start items-start text-black p-7 w-96 h-56'>
          I'm really interested in technology, especially AI and web development. I enjoy building websites using HTML, CSS, TypeScript, and JavaScript. Right now, I'm learning Next.js to make my projects more interactive. I love solving problems and creating websites that are easy to use and look great. As I keep learning, I'm excited to explore how AI can work with web development to create even better projects.</p>
    </div>
    <div className='flex justify-end'>
      <img className='w-64 h-72 pr-10 pb-3 pt-12' src='/About.webp'></img>
    </div>
    </div>
    </>
  )
}

export default About