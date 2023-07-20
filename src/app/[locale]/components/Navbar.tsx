'use client'
import Link from 'next-intl/link'
import { usePathname } from 'next-intl/client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import logo from '../../../../public/assets/Images/logoName.svg'
interface Props {
  curLocale: string
  titles: string[]
  paths: string[]
}

export const Navbar = (props: Props) => {
  const initialThemeState = () => {
    if (localStorage.getItem('theme')) {
      return localStorage.getItem('theme') as 'light' | 'dark'
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  }

  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>(initialThemeState)
  const { curLocale, titles, paths } = props

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    localStorage.setItem('theme', theme)
  }, [theme])

  const handleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <nav className='sticky top-0 z-50 flex flex-wrap items-center justify-between bg-customBGColor p-6'>
      <div className='mr-6 flex flex-shrink-0 items-center gap-2 text-fontColorTitles'>
        <Image src={logo} alt='logo icon' />
        <span className='text-xl font-semibold tracking-tight'>Fernando</span>
      </div>
      <div className='block lg:hidden'>
        <button
          className='flex items-center rounded border border-borderColor px-3 py-2 text-gray-500 hover:border-white hover:text-white'
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className='h-3 w-3 fill-current'
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
        } lg:flex lg:w-auto lg:items-center`}
      >
        <div className='text-sm lg:flex-grow'>
          {titles.map((title, index) => {
            return (
              <Link
                href={`/${paths[index]}`}
                className={`hashtag mt-4 mr-4 block text-fontColor hover:text-white lg:mt-0 lg:inline-block ${
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
            className={`mt-4 mr-4 block text-fontColor hover:text-white lg:mt-0 lg:inline-block ${
              curLocale === 'en' ? 'text-white' : ''
            }`}
          >
            En
          </Link>
          <Link
            href={`${pathname}`}
            locale='es'
            className={`mt-4 block text-fontColor hover:text-white lg:mt-0 lg:inline-block ${
              curLocale === 'es' ? 'text-white' : ''
            }`}
          >
            Es
          </Link>

          <button onClick={handleTheme}>
            <h2>Dark Mode</h2>
          </button>
        </div>
      </div>
    </nav>
  )
}
