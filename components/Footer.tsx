import React from 'react'
import Link from 'next/link'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className='w-full h-[120px] bg-gradient-to-r from-blue-500 to-green-600 '>
          <div className='text-center font-bold text-2xl pt-5 '>
            <h3>Assignment Done By Muhammad Taha Awan</h3>

          </div>

            {/* icons */}

            <div>
                <ul className='flex justify-center items-center gap-4 text-3xl   mt-2'>
            <li className='transform transition-transform duration-300 hover:scale-125'>  <Link href={"https://www.facebook.com/muhammad.tahaawan.7"}> <FaFacebookF /></Link></li>
            <li className='transform transition-transform duration-300 hover:scale-125'>  <Link href={"https://www.instagram.com/tahaawan598/?next=%2F"}> <FaInstagram /></Link></li>
            <li className='transform transition-transform duration-300 hover:scale-125'>  <Link href={"https://www.linkedin.com/in/muhammad-taha-4735912b6/"}> <FaLinkedinIn/></Link></li>
            
               </ul>
            </div>
    </div>
  )
}

export default Footer
