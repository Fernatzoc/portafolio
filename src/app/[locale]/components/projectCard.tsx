// 'use client'
import Image from 'next/image'
import Link from 'next/link'
import devImage from '../../../../public/assets/Images/chertnodes.jpg'
import { useTranslations } from 'next-intl'

export const ProjectCard = () => {
  const t = useTranslations('ProjectCard')

  return (
    <div>
      <div className='border border-b-0 border-solid border-gray-500'>
        <Image
          src={devImage}
          alt='Picture of the author'
        />
      </div>
      <div className='border border-b-0 border-solid border-gray-500'>
        <p className='p-3'>Flask Python SCSS</p>
      </div>
      <div className='border border-solid border-gray-500'>
        <div className='p-5 flex flex-col justify-between'>
          <h3 className='mb-4 text-2xl font-medium '>ChertNodes</h3>
          <p className='mb-4'>Minecraft servers hosting</p>
          <div>
            <Link href='/contact' className='bg-transparen border border-purpleColor pt-2 pb-2 pr-4 pl-4 hover:bg-purpleColor hover:text-fontColor hover:border-fontColor'>
              {t('button')} =&gt;
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
