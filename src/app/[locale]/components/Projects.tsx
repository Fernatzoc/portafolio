import { ProjectCard } from './ProjectCard'
import { useTranslations } from 'next-intl'

export const Projects = () => {
  const t = useTranslations('Projects')

  return (
    <section className='m-5 mt-20'>
      <div className='flex justify-between items-center mb-10'>
        <h2 className='hashtag text-3xl font-medium text-fontColortitles-light dark:text-fontColorTitles-dark'>
          {t('title')}
        </h2>
        <p className='text-fontColorTitles-light dark:text-fontColorTitles-dark'>
          {t('seeMore')} --&gt;
        </p>
      </div>

      <div className='flex flex-col gap-4 lg:flex-row'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  )
}
