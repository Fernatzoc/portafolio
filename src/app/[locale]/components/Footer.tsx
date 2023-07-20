import emailIcon from '../../../../public/assets/Images/email.svg'
import Image from 'next/image'
import logo from '../../../../public/assets/Images/logoName.svg'

export const Footer = () => {
  return (
    <footer className='m-5 mt-28 border-t border-solid border-borderColor'>
      <div className='flex mt-8 flex-col lg:flex-row gap-10'>
        <div className='w-3/4'>
          <div className='flex gap-8'>
            <div className='flex gap-2'>
              <Image src={logo} alt='logo icon' />
              <p className='text-fontColor-light dark:text-fontColor-dark font-bold'>
                Fernando
              </p>
            </div>{' '}
            <p className='text-fontColor-light dark:text-fontColor-dark'>
              fernandotzoc4@gmail.com
            </p>
          </div>
          <p className='mt-5 text-fontColor-light dark:text-fontColor-dark'>
            Web designer and front-end developer
          </p>
        </div>
        <div className='w-1/4'>
          <h3 className='text-xl font-medium text-fontColorTitles-light dark:text-fontColorTitles-dark'>
            Media
          </h3>

          <div className='flex'>
            <Image src={emailIcon} alt='email icon' />
            <Image src={emailIcon} alt='email icon' />
            <Image src={emailIcon} alt='email icon' />
          </div>
        </div>
      </div>
      <div className='mt-12 text-center text-fontColor-light dark:text-fontColor-dark'>
        <p>© {new Date().getFullYear()} Fernando. All rights reserved.</p>
      </div>
    </footer>
  )
}
