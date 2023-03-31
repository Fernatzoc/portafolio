import React from 'react'
import './globals.css'
import localFont from '@next/font/local'
import { NextIntlClientProvider } from 'next-intl/client'
import { notFound } from 'next/navigation'

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
      style: 'normal'
    },
    {
      path: '../../../public/assets/fonts/FiraCode-Bold.woff2',
      weight: '700',
      style: 'normal'
    }
  ],
  variable: '--font-firacode'
})

export function generateStaticParams () {
  return [{ locale: 'en' }, { locale: 'es' }]
}

export default async function LocaleLayout ({ children, params: { locale } }: any) {
  let messages
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html lang={locale} className={firaCode.variable}>
      <body className='bg-customBGColor text-white tracking-wider leading-relaxed'>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
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
