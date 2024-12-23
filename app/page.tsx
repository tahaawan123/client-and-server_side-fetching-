import React from 'react'
import Link from 'next/link'
const HomePage = () => {
  return (
    <div className='w-full bg-[#0e2018] h-auto'>
     
       <h1 className='text-center text-white text-6xl font-bold font-serif pt-4'> 
            Data Fetching 
       </h1>
       <div className='flex justify-center items-center mt-10 '>
      <div className='w-[400px] h-[400px]  rounded-[30%] flex justify-center items-center text-center text-xl bg-gradient-to-r from-blue-500 to-green-600 shadow-lime-300 shadow-md hover:scale-95'>
        <p className='w-[300]'>Data fetching is the process of retrieving data from a source like a server, database, or an API. It is a critical concept in web development, enabling dynamic content delivery to web applications without requiring the user to reload the page.</p>

      </div>
      </div>
      <div className='flex justify-center items-center mt-12 gap-28 pb-12 font-mono font-semibold'>
        <button type="button" className='w-[200px] h-[50px] bg-gradient-to-r from-blue-500 to-green-600 shadow-lime-300 shadow-md hover:scale-95 rounded-md'><Link href={"/Server"}>Server Side Data Fetching</Link></button>
        <button type="button" className='w-[200px] h-[50px] bg-gradient-to-r from-blue-500 to-green-600 shadow-lime-300 shadow-md hover:scale-95 rounded-md'><Link href={"/Client"}>Client Side Data Fetching</Link></button>
      </div>
       
           
    </div>
  )
}

export default HomePage
