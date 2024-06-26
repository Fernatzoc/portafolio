'use client'
import { usePathname } from 'next-intl/client'
import { useEffect, useState } from 'react'
import SunIcon from './icons/SunIcon'
import MoonIcon from './icons/MoonIcon'
import LanguajeIcon from './icons/LanguajeIcon'
import LogoIcon from './icons/LogoIcon'
import Link from 'next-intl/link'
interface Props {
  curLocale: string
  titles: string[]
  paths: string[]
}

export const Navbar = (props: Props) => {
  const initialThemeState = () => {
    if (typeof window !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme') as 'light' | 'dark'
    } else {
      return 'dark'
    }
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
    <nav className='sticky top-0 z-50 bg-customBGColor-light dark:bg-customBGColor-dark p-6 border-b border-solid border-borderColor'>
      <div className='max-w-screen-lg mx-auto flex flex-wrap items-center justify-between lg:justify-between md:justify-end'>
        <div className='mr-6 flex items-center justify-center flex-shrink-0  gap-2 text-fontColorTitles'>
          <LogoIcon
            width={20}
            height={20}
            className='fill-fontColor-light dark:fill-fontColor-dark'
          />
          <span className='text-xl font-semibold tracking-tight text-fontColorTitles-light dark:text-fontColorTitles-dark'>
            Fernando
          </span>
        </div>
        <div className='flex'>
          <div className='inline-block lg:hidden m-0'>
            <Link
              href={`${pathname}`}
              locale={curLocale === 'es' ? 'en' : 'es'}
              className='text-fontColor-light dark:text-fontColor-dark hover:text-purpleColor dark:hover:text-white'
            >
              <LanguajeIcon
                width={50}
                height={18}
                className='inline-block fill-fontColor-light dark:fill-fontColor-dark  hover:fill-purpleColor dark:hover:fill-white'
              />
              {curLocale === 'es' ? 'EN' : 'ES'}
            </Link>
          </div>

          <button className='inline-block lg:hidden' onClick={handleTheme}>
            {theme === 'light' ? (
              <MoonIcon
                width={50}
                height={18}
                className='inline-block fill-fontColor-light dark:fill-fontColor-dark hover:fill-purpleColor dark:hover:fill-white'
              />
            ) : (
              <SunIcon
                width={50}
                height={18}
                className='inline-block fill-fontColor-light dark:fill-fontColor-dark hover:fill-purpleColor dark:hover:fill-white'
              />
            )}
          </button>
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
          className={`w-full ${isOpen ? '' : 'hidden'
            } lg:flex lg:w-auto lg:items-center`}
        >
          <div className='text-sm lg:flex-grow'>
            {titles.map((title, index) => {
              return (
                <Link
                  href={`/${paths[index]}`}
                  className={`hashtag mt-4 mr-4 block text-fontColor-light dark:text-fontColor-dark hover:text-purpleColor dark:hover:text-white lg:mt-0 lg:inline-block ${pathname === `/${paths[index]}`
                    ? 'text-purpleColor dark:text-white'
                    : ''
                    }`}
                  key={index}
                >
                  {title}
                </Link>
              )
            })}
            <div className='hidden lg:inline-block mt-4'>
              <Link
                href={`${pathname}`}
                locale={curLocale === 'es' ? 'en' : 'es'}
                className='text-fontColor-light dark:text-fontColor-dark hover:text-purpleColor dark:hover:text-white'
              >
                <LanguajeIcon
                  width={50}
                  height={18}
                  className='inline-block fill-fontColor-light dark:fill-fontColor-dark  hover:fill-purpleColor dark:hover:fill-white'
                />
                {curLocale === 'es' ? 'EN' : 'ES'}
              </Link>
            </div>

            <button className='hidden lg:inline-block' onClick={handleTheme}>
              {theme === 'light' ? (
                <MoonIcon
                  width={50}
                  height={18}
                  className='inline-block fill-fontColor-light dark:fill-fontColor-dark hover:fill-purpleColor dark:hover:fill-white'
                />
              ) : (
                <SunIcon
                  width={50}
                  height={18}
                  className='inline-block fill-fontColor-light dark:fill-fontColor-dark hover:fill-purpleColor dark:hover:fill-white'
                />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
