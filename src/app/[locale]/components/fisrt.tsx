import Image from 'next/image'
import devImage from '../../../../public/assets/Images/devImage.jpg'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export const Fisrt = () => {
  const t = useTranslations('FirstSection')
  return (
    <section className='flex flex-col m-5 gap-6 lg:flex-row lg:justify-between lg:mt-4  animate__animated animate__fadeInDown'>
      <div className='flex flex-col gap-5 lg:w-1/2 lg:justify-center lg:gap-7'>
        <h1 className='text-3xl font-semibold'>{t.rich('h1', {
          span: (chunks) => <span>{chunks}</span>
        })}
        </h1>
        <p>{t('description')}</p>
        <div>
          <Link href='/contact' className='bg-transparen text-fontColorTitles border border-purpleColor pt-2 pb-2 pr-4 pl-4 hover:bg-purpleColor hover:text-fontColor hover:border-fontColor'>
            {t('contact')}
          </Link>
        </div>
      </div>
      <div className='lg:w-1/2'>
        <Image
          src={devImage}
          alt='Picture of the author'
          className='h-96 w-auto'
        />
      </div>
    </section>
  )
}
