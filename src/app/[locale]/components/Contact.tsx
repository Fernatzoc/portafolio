import { useTranslations } from 'next-intl'
import emailIcon from '../../../../public/assets/Images/email.svg'
import Image from 'next/image'

export const Contact = () => {
  const t = useTranslations('Contacts')

  return (
    <section className='m-5 mt-36'>
      <h2 className='hashtag text-3xl font-medium text-fontColorTitles-light dark:text-fontColorTitles-dark'>
        {t('title')}
      </h2>
      <div className='flex gap-10 flex-col lg:flex-row'>
        <div className='mt-5 lg:w-2/3'>
          <p className='text-fontColor-light dark:text-fontColor-dark'>
            {t('message')}
          </p>
        </div>

        <div className='border border-solid border-borderColor p-6'>
          <p className='font-semibold text-fontColorTitles-light dark:text-fontColorTitles-dark mb-2'>
            {t('messageBox')}
          </p>
          <div className='flex justify-center items-center'>
            <Image src={emailIcon} alt='email icon' />
            <p className='text-fontColor-light dark:text-fontColor-dark'>
              fenrandotzoc5@gmail.com
            </p>
          </div>
          <div className='flex justify-center items-center'>
            <Image src={emailIcon} alt='email icon' />
            <p className='text-fontColor-light dark:text-fontColor-dark'>
              fenrandotzoc5@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
