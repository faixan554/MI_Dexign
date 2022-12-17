import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <header class="text-white bg-black body-font border-b-2 border-b-gray-600">
      <div class="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 md:ml-20 ml-0 mb-3 md:mb-0">
          <img className='w-16 text-white rounded-full' src="my logo png.png" alt="logo" />
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-lg md:text-xl font-sans font-semibold justify-center list-none">
          <li class="mr-5 cursor-pointer text-blue-600 hover:text-blue-700"><Link rel="noreferrer" href="/">HOME</Link></li>
          <li class="mr-5 cursor-pointer hover:text-blue-700"><Link rel="noreferrer" href="/about">ABOUT ME</Link></li>
          <li class="mr-5 cursor-pointer hover:text-blue-700"><Link rel="noreferrer" href="/contact">CONTACT</Link></li>
        </nav>
      </div>
    </header>
  )
}

export default Navbar