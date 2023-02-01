import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Navbar() {
  const router = useRouter()
  return (
    <header className="text-white bg-black body-font border-b-2 border-b-gray-600">
      <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 md:ml-20 ml-0 mb-3 md:mb-0">
          <img className='w-16 text-white rounded-full' src="my logo png.png" alt="logo" />
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-lg md:text-xl font-sans font-semibold justify-center list-none">
          <li className={`mr-5 cursor-pointer  ${router.asPath == '/' ? 'text-blue-600' : 'text-gray-400' } hover:text-blue-700`}><Link rel="noreferrer" href="/">HOME</Link></li>
          <li className={`mr-5 cursor-pointer  ${router.asPath == '/about' ? 'text-blue-600' : 'text-gray-400' } hover:text-blue-700`}><Link rel="noreferrer" href="/about">ABOUT ME</Link></li>
          <li className={`mr-5 cursor-pointer  ${router.asPath == '/contact' ? 'text-blue-600' : 'text-gray-400' } hover:text-blue-700`}><Link rel="noreferrer" href="/contact">CONTACT</Link></li>
        </nav>
      </div>
    </header>
  )
}

export default Navbar