import { EmailIcon, GitHubIcon, LinkedinIcon, LogoIcon } from './icons'

export const Footer = () => {
  return (
    <footer className='mt-28 border-t border-solid border-borderColor'>
      <div className='max-w-screen-lg mx-auto flex mt-8 flex-col lg:flex-row gap-10'>
        <div className='w-3/4'>
          <div className='flex gap-8'>
            <div className='flex gap-2'>
              <LogoIcon
                width={16}
                height={16}
                className='fill-fontColor-light dark:fill-fontColor-dark'
              />
              <p className='text-fontColor-light dark:text-fontColor-dark font-bold'>
                Fernando
              </p>
            </div>{' '}
            <p className='text-fontColor-light dark:text-fontColor-dark'>
              <path d='M10.5 0C4.699 0 0 4.588 0 10.253c0 4.537 3.006 8.369 7.18 9.727.524.09.721-.218.721-.487 0-.243-.013-1.05-.013-1.91-2.638.475-3.32-.627-3.53-1.204-.119-.295-.63-1.205-1.077-1.448-.367-.192-.892-.667-.013-.68.827-.012 1.418.744 1.615 1.052.944 1.55 2.454 1.114 3.058.845.092-.666.367-1.115.669-1.371-2.336-.256-4.777-1.14-4.777-5.062 0-1.115.406-2.038 1.076-2.756-.105-.256-.473-1.307.105-2.717 0 0 .88-.269 2.887 1.051a9.963 9.963 0 0 1 2.625-.346c.893 0 1.785.115 2.625.346 2.008-1.333 2.888-1.05 2.888-1.05.577 1.409.21 2.46.105 2.716.67.718 1.076 1.628 1.076 2.756 0 3.934-2.454 4.806-4.79 5.062.38.32.708.936.708 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.197.589.722.486a10.5 10.5 0 0 0 5.179-3.74A10.105 10.105 0 0 0 21 10.253C21 4.588 16.301 0 10.5 0Z' />
              fernandotzoc5@gmail.com
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

          <div className='flex gap-3 items-center'>
            <EmailIcon className='fill-fontColor-light dark:fill-fontColor-dark' />
            <GitHubIcon
              width={21}
              height={22}
              className='fill-fontColor-light dark:fill-fontColor-dark'
            />
            <LinkedinIcon className='fill-fontColor-light dark:fill-fontColor-dark' />
          </div>
        </div>
      </div>
      <div className='mt-12 mb-2 text-center text-fontColor-light dark:text-fontColor-dark'>
        <p>© {new Date().getFullYear()} Fernando. All rights reserved.</p>
      </div>
    </footer>
  )
}
