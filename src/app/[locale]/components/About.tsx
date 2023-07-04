import { useTranslations } from 'next-intl'
import devImage from '../../../../public/assets/Images/devImage.jpg'
import Image from 'next/image'

export const About = () => {
  const t = useTranslations('About')

  return (
    <section className='m-5 mt-36'>
      <h2 className='hashtag text-3xl font-medium'>{t('title')}</h2>
      <div className='flex flex-col gap-10 lg:flex-row'>
        <div className='mt-5 lg:w-2/3'>
          <p>{t('paragraph1')}</p>
          <br />
          <p>{t('paragraph2')}</p>
        </div>

        <Image
          src={devImage}
          alt='Picture of the author'
          className='mt-5 lg:w-4/12'
        />
      </div>
    </section>
  )
}
