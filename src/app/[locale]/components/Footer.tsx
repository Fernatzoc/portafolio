import { EmailIcon, GitHubIcon, LinkedinIcon, LogoIcon } from './icons'

export const Footer = () => {
  return (
    <footer className='mt-28 border-t border-solid border-borderColor'>
      <div className='max-w-screen-lg m-5 lg:mx-auto flex flex-col lg:flex-row gap-10'>
        <div className='w-4/4 lg:w-3/4'>
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
            </div>
          </div>
          <p className='mt-5 text-fontColor-light dark:text-fontColor-dark'>
            Web designer and front-end developer
          </p>
        </div>
        <div className='w-4/4 lg:w-1/4'>
          <h3 className='text-xl font-medium text-center lg:text-right text-fontColorTitles-light dark:text-fontColorTitles-dark'>
            Media
          </h3>

          <div className='flex gap-3 items-center justify-center lg:justify-end'>
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
