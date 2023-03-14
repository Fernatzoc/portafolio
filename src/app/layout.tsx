import React from 'react'
import './globals.css'
import localFont from '@next/font/local'

const firaCode = localFont({
  src: [
    {
      path: '../../public/assets/fonts/FiraCode-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/assets/fonts/FiraCode-Bold.woff2',
      weight: '700',
      style: 'normal'
    }
  ],
  variable: '--font-firacode'
})

export default function RootLayout ({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={firaCode.variable}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body
        className='bg-customBGColor text-white tracking-wider leading-relaxed'
      >{children}
      </body>
    </html>
  )
}
