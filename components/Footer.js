import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <footer class="text-white bg-black body-font border-t-2 border-gray-600">
      <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a class="flex title-font font-medium items-center md:justify-start justify-center text-white">
        <Image className='w-10 h-10 text-white p-2 bg-blue-500 rounded-full' src="https://thumbs.dreamstime.com/b/blue-letter-b-logo-power-blue-letter-b-logo-power-logo-luxury-minimalist-badge-logo-edge-contrast-color-logo-114749609.jpg" alt="logo" />
          <span class="ml-3 text-xl text-gray-100">MI_Design</span>
        </a>
        <p class="text-sm text-gray-200 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 MI_Design —
          <a href="https://www.instagram.com/mi_dexign/" class="text-gray-200 hover:text-red-600 ml-1" rel="noopener noreferrer" target="_blank">@Irfanmalik</a>
        </p>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 space-x-3 justify-center sm:justify-start md:mr-10">
          <a rel="noreferrer" href='https://www.facebook.com/profile.php?id=100087282346637' target='_blank' class="text-xl text-gray-200 hover:text-red-600 cursor-pointer">
            Facebook
          </a>
          <a rel="noreferrer" href="https://www.instagram.com/mi_dexign/" target='_blank' class="text-xl ml-3 text-gray-200 hover:text-red-600 cursor-pointer">
            Instagram
          </a>
          <a rel="noreferrer" href='https://www.uplabs.com/midexign' target='_blank' class="text-xl ml-3 text-gray-200 hover:text-red-600 cursor-pointer">
            Uplabs
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer