'use client'
import { Link } from 'next-intl'
import { usePathname } from 'next-intl/client'
import { useState } from 'react'
import Image from 'next/image'
import logo from '../../../../public/assets/Images/logoName.svg'
interface Props {
  curLocale: string
  titles: string[]
  paths: string[]
}

export const Navbar = (props: Props) => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const { curLocale, titles, paths } = props

  return (
    <nav className='sticky top-0 z-50 bg-customBGColor flex flex-wrap items-center justify-between p-6'>
      <div className='flex gap-2 items-center flex-shrink-0 text-fontColorTitles mr-6'>
        <Image src={logo} alt='logo icon' />
        <span className='font-semibold text-xl tracking-tight'>Fernando</span>
      </div>
      <div className='block lg:hidden'>
        <button
          className='flex items-center px-3 py-2 border rounded text-gray-500 border-borderColor hover:text-white hover:border-white'
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className='fill-current h-3 w-3'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </button>
      </div>
      <div
        className={`w-full ${
          isOpen ? '' : 'hidden'
        } lg:flex lg:items-center lg:w-auto`}
      >
        <div className='text-sm lg:flex-grow'>
          {titles.map((title, index) => {
            return (
              <Link
                href={`/${paths[index]}`}
                className={`text-fontColor hover:text-white block mt-4 lg:inline-block lg:mt-0 mr-4 hashtag ${
                  pathname === `/${paths[index]}` ? 'text-white' : ''
                }`}
                key={index}
              >
                {title}
              </Link>
            )
          })}
          <Link
            href={`${pathname}`}
            locale='en'
            className={`text-fontColor hover:text-white block mt-4 lg:inline-block lg:mt-0 mr-4 ${
              curLocale === 'en' ? 'text-white' : ''
            }`}
          >
            En
          </Link>
          <Link
            href={`${pathname}`}
            locale='es'
            className={`text-fontColor hover:text-white block mt-4 lg:inline-block lg:mt-0 ${
              curLocale === 'es' ? 'text-white' : ''
            }`}
          >
            Es
          </Link>
        </div>
      </div>
    </nav>
  )
}
