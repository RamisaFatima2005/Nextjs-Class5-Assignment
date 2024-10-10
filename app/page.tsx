'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

function Home() {
    const route = useRouter()
  return (
    <>
    <div className='bg-gradient-to-r from-slate-400 to-gray-900 p-4' >
    <div className='bg-gradient-to-r from-gray-700 to-black text-white w-auto h-8 flex space-x-3 justify-end rounded-md'>
        <button className='w-11 h-6 p-1' onClick={()=>route.push("/")}>Home</button>
      <button className='w-11 h-6 p-1' onClick={()=>route.push("/about")}>About</button>
      <button className='w-15 h-6 p-1' onClick={()=>route.push("/contact")}>Contact</button>
        </div>
        <div className='w-96 h-7'>
        <h1 className='pt-4'><b>Welcome to My Portfolio</b></h1>
        <p className='flex justify-start items-start text-black p-7 w-96 h-56'>
        Hi, I'm "Ramisa Fatima", a budding AI engineer and web developer. I'm passionate about learning and building things from the ground up, using technologies like HTML, CSS, TypeScript, and JavaScript. Currently, I'm working on projects that help me grow my skills in AI and web development, with a focus on creating simple, user-friendly websites.
        
        Take a look around to see some of the work I've been doing, and feel free to get in touch if you'd like to collaborate or chat!
        </p>
        </div>

        <div className='flex justify-end'>
      <img className='w-64 h-72 pr-10 pb-3 pt-12' src='/Profile.webp'></img>
      </div>
      </div>
        </>
  )
}

export default Home