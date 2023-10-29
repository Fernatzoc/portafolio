import './globals.css'
import { Footer, Navbar } from './components'
import { notFound } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import Head from './head'
import localFont from 'next/font/local'
import React from 'react'

const interFont = localFont({
  src: [
    {
      path: '../../../public/assets/fonts/Inter-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../../public/assets/fonts/Inter-Medium.ttf',
      weight: '500',
      style: 'medium'
    },
    {
      path: '../../../public/assets/fonts/Inter-SemiBold.ttf',
      weight: '600',
      style: 'semi-bold'
    },
    {
      path: '../../../public/assets/fonts/Inter-Bold.ttf',
      weight: '700',
      style: 'bold'
    }
  ],
  variable: '--font-inter'
})

export default function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: any
}) {
  const locale = useLocale()
  const t = useTranslations('Navbar')

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound()
  }

  return (
    <html lang={locale} className={`${interFont.variable} dark`}>
      <head>
        <Head />
      </head>
      <body className='bg-customBGColor-light dark:bg-customBGColor-dark tracking-wider leading-relaxed'>
        <Navbar
          curLocale={locale}
          paths={['', 'projects', 'about']}
          titles={[t('home'), t('projects'), t('about')]}
        />
        <main className='max-w-screen-lg mx-auto'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
