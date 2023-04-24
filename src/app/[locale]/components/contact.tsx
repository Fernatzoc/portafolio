import { useTranslations } from 'next-intl'
import Image from 'next/image'
import emailIcon from '../../../../public/assets/Images/email.svg'

export const Contact = () => {
  const t = useTranslations('Contacts')

  return (
    <section className='m-5 mt-36  animate__animated animate__fadeInDown'>
      <h2 className='hashtag text-3xl font-medium'>{t('title')}</h2>
      <div className='flex gap-10 flex-col lg:flex-row'>
        <div className='mt-5 lg:w-2/3'>
          <p>{t('message')}</p>
        </div>

        <div className='border border-solid border-borderColor p-6'>
          <p className='font-semibold text-fontColorTitles mb-2'>{t('messageBox')}</p>
          <div className='flex justify-center items-center'>
            <Image
              src={emailIcon}
              alt='email icon'
            />
            <p>fenrandotzoc5@gmail.com</p>
          </div>
          <div className='flex justify-center items-center'>
            <Image
              src={emailIcon}
              alt='email icon'
            />
            <p>fenrandotzoc5@gmail.com</p>
          </div>
        </div>

      </div>
    </section>
  )
}
