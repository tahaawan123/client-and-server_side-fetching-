
import React from 'react'
import Link from 'next/link';
import Footer from '@/components/Footer';
interface IBook {
    id: number;
    name: string;
    type: string;
    available: boolean;
  }
const Server =async () => {
    const response = await fetch("https://simple-books-api.glitch.me/books/")
    const parsedResponse:IBook[] = await response.json()
    console.log(parsedResponse)
  return (
    <div className='  bg-black'>
             <h1 className='text-center font-bold font-serif text-7xl text-white py-14'>Server Side Data Fetching</h1>
      <div className='grid grid-cols-3 gap-4 w-full h-[600px] pl-3'>
         {parsedResponse.map((data,index)=>
          <div key={index} className= 'border border-black w-[400px] h-[200px] p-9 bg-gradient-to-r from-blue-500 to-green-600  transform transition duration-300 hover:translate-x-4 hover:translate-y-2 space-y-4'>

           
            <p className='font-bold text-2xl font-mono'>{data.name}</p>
            <p><span className='font-semibold font-mono'>type:</span> {data.type}</p>
            <p><span className='font-semibold font-mono'>available: </span> {`${data.available}`}</p>
          </div>
        )}
    </div>
    <div className='flex justify-center items-center pb-4'>
    <button type='button' className='w-[300px] h-[50px] bg-gradient-to-r from-blue-500 to-green-600 shadow-lime-300 shadow-md hover:scale-95 rounded-md font-mono font-semibold text-2xl' ><Link href={"./"}>Back to Home Page</Link></button>

    </div>
  <Footer/>
    </div>
  )
}

export default Server
   