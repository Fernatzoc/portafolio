import { useTranslations } from 'next-intl'
import devImage from '../../../../public/assets/Images/chertnodes.jpg'
import Image from 'next/image'
import Link from 'next/link'

export const ProjectCard = () => {
  const t = useTranslations('ProjectCard')

  return (
    <div>
      <div className='border border-b-0 border-solid border-borderColor'>
        <Image src={devImage} alt='Picture of the author' />
      </div>
      <div className='border border-b-0 border-solid border-borderColor'>
        <p className='p-3 text-fontColor-light dark:text-fontColor-dark'>
          Flask Python SCSS
        </p>
      </div>
      <div className='border border-solid border-borderColor'>
        <div className='p-5 flex flex-col justify-between'>
          <h3 className='mb-4 text-2xl font-medium text-fontColorTitles-light dark:text-fontColorTitles-dark'>
            ChertNodes
          </h3>
          <p className='mb-4 text-fontColor-light dark:text-fontColor-dark'>
            Minecraft servers hosting
          </p>
          <div>
            <Link
              href='/contact'
              className='bg-transparen text-fontColorTitles-light dark:text-fontColorTitles-dark font-medium border border-purpleColor pt-2 pb-2 pr-4 pl-4 hover:bg-purpleColor hover:text-fontColor hover:border-fontColor'
            >
              {t('button')} =&gt;
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
