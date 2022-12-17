import React from 'react'

function Footer() {
  return (
    <footer className="text-white bg-black body-font border-t-2 border-gray-600">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
        <img className='w-10 text-white rounded-full' src="my logo png.png" alt="logo" />
          <span className="ml-3 text-xl text-gray-100">MI_Design</span>
        </a>
        <p className="text-sm text-gray-200 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 MI_Design —
          <a href="https://www.instagram.com/mi_dexign/" className="text-gray-200 hover:text-red-600 ml-1" rel="noopener noreferrer" target="_blank">@Irfanmalik</a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 space-x-3 justify-center sm:justify-start md:mr-10">
          <a rel="noreferrer" href='https://www.facebook.com/profile.php?id=100087282346637' target='_blank' className="text-xl text-gray-200 hover:text-red-600 cursor-pointer">
            Facebook
          </a>
          <a rel="noreferrer" href="https://www.instagram.com/mi_dexign/" target='_blank' className="text-xl ml-3 text-gray-200 hover:text-red-600 cursor-pointer">
            Instagram
          </a>
          <a rel="noreferrer" href='https://www.uplabs.com/midexign' target='_blank' className="text-xl ml-3 text-gray-200 hover:text-red-600 cursor-pointer">
            Uplabs
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer