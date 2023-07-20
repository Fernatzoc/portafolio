import './globals.css'
import { Footer, Navbar } from './components'
import { notFound } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import Head from './head'
import localFont from 'next/font/local'
import React from 'react'

const firaCode = localFont({
  src: [
    {
      path: '../../../public/assets/fonts/FiraCode-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../../public/assets/fonts/FiraCode-Medium.woff2',
      weight: '500',
      style: 'medium'
    },
    {
      path: '../../../public/assets/fonts/FiraCode-SemiBold.woff2',
      weight: '600',
      style: 'semi-bold'
    },
    {
      path: '../../../public/assets/fonts/FiraCode-Bold.woff2',
      weight: '700',
      style: 'bold'
    }
  ],
  variable: '--font-firacode'
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
    <html lang={locale} className={firaCode.variable}>
      <head>
        <Head />
      </head>
      <body className='bg-customBGColor-light dark:bg-customBGColor-dark tracking-wider leading-relaxed max-w-screen-lg mx-auto'>
        <Navbar
          curLocale={locale}
          paths={['', 'projects', 'about']}
          titles={[t('home'), t('projects'), t('about')]}
        />
        {children}
        <Footer />
      </body>
    </html>
  )
}

// export default function RootLayout ({ children }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang='en' className={firaCode.variable}>
//       {/*
//         <head /> will contain the components returned by the nearest parent
//         head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
//       */}
//       <head />
//       <body
//         className='bg-customBGColor text-white tracking-wider leading-relaxed'
//       >{children}
//       </body>
//     </html>
//   )
// }
