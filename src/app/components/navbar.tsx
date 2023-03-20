'use client'
import Link from 'next/link'
import { useState } from 'react'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='flex flex-wrap items-center justify-between  p-6 lg:pr-0 lg:pl-0'>
      <div className='flex items-center flex-shrink-0 text-white mr-6'>
        <span className='font-semibold text-xl tracking-tight'>Fernando</span>
      </div>
      <div className='block lg:hidden'>
        <button
          className='flex items-center px-3 py-2 border rounded text-gray-500 border-gray-500 hover:text-white hover:border-white'
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className='fill-current h-3 w-3' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </button>
      </div>
      <div className={`w-full ${isOpen ? '' : 'hidden'} lg:flex lg:items-center lg:w-auto`}>
        <div className='text-sm lg:flex-grow'>
          <Link href='/' className='text-fontColor hover:text-white block mt-4 lg:inline-block lg:mt-0 mr-4 hashtag'>
            home
          </Link>
          <Link href='/about' className='text-fontColor hover:text-white block mt-4 lg:inline-block lg:mt-0 mr-4 hashtag'>
            projects
          </Link>
          <Link href='/contact' className='text-fontColor hover:text-white block mt-4 lg:inline-block lg:mt-0 hashtag'>
            about-me
          </Link>
        </div>
      </div>
    </nav>
  )
}
