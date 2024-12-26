import React from 'react'
import Link from 'next/link'
const HomePage = () => {
  return (
    <div className='w-full bg-black h-auto'>
  <h1 className='text-center text-white text-6xl font-bold font-serif pt-4'>
    Data Fetching
  </h1>
  
  <div className='flex justify-center items-center mt-10'>
    <div className='w-[350px] sm:w-[400px] h-[350px] sm:h-[400px] rounded-[30%] flex justify-center items-center text-center text-white text-lg sm:text-xl bg-gradient-to-r from-blue-500 to-green-600 shadow-lime-300 shadow-md hover:scale-95 transition-transform duration-300'>
      <p className='px-4'>
        Data fetching is the process of retrieving data from a source like a server, database, or an API. It is a critical concept in web development, enabling dynamic content delivery to web applications without requiring the user to reload the page.
      </p>
    </div>
  </div>

  <div className='flex justify-center items-center flex-wrap gap-6 mt-12 pb-12 font-mono font-semibold'>
    <button type="button" className='w-[200px] h-[50px] bg-gradient-to-r from-blue-500 to-green-600 shadow-lime-300 shadow-md hover:scale-95 transition-transform duration-300 rounded-md'>
      <Link href={"/Server"}>Server Side Data Fetching</Link>
    </button>
    <button type="button" className='w-[200px] h-[50px] bg-gradient-to-r from-blue-500 to-green-600 shadow-lime-300 shadow-md hover:scale-95 transition-transform duration-300 rounded-md'>
      <Link href={"/Client"}>Client Side Data Fetching</Link>
    </button>
  </div>
</div>

  )
}

export default HomePage
