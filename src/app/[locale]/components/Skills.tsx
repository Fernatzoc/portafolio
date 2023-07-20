import { SkillsCard } from './SkillsCard'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import points from '../../../../public/assets/Images/points.svg'
import shape from '../../../../public/assets/Images/shape.svg'
import square from '../../../../public/assets/Images/square.svg'

export const Skills = () => {
  const t = useTranslations('Skills')

  return (
    <section className='m-5 mt-36'>
      <div className='flex justify-between items-center mb-10'>
        <h2 className='hashtag text-3xl font-medium'>{t('title')}</h2>
        <p>{t('seeMore')} --&gt;</p>
      </div>

      <div className='lg:flex gap-5'>
        <div className='hidden lg:block lg:w-2/6'>
          <div className='grid lg:grid-cols-3 lg:justify-items-center gap-4 lg:h-full'>
            <Image
              className='lg:col-span-2 justify-self-start'
              src={points}
              alt='Picture of the author'
            />
            <Image
              src={square}
              alt='Picture of the author'
              width={90}
              height={90}
            />
            <Image
              src={shape}
              alt='Picture of the author'
              className='lg:place-self-end'
              width={100}
              height={100}
            />
            <Image
              src={points}
              className='lg:justify-self-center'
              alt='Picture of the author'
            />
            <Image
              src={square}
              alt='Picture of the author'
              className='lg:place-self-end'
              width={55}
              height={55}
            />
          </div>
        </div>

        <div className='lg:w-4/6'>
          <div className='grid lg:grid-cols-3 gap-3'>
            <SkillsCard
              title='Databases'
              languages='SQLite MongoDB PostgreSQL'
            />
            <SkillsCard
              title='Tools'
              languages='HTML CSS SASS SCSS EJS Jinja2 Node.js Less Pug'
            />
            <SkillsCard
              title='Other'
              languages='VSCode Neovim Linux Figma XFCE Arch Git Font Awesome'
            />
            <div />
            <SkillsCard
              title='Languages'
              languages='TypeScript JavaScript Python'
            />
            <SkillsCard
              title='Frameworks'
              languages='React Vue Disnake Discord.js Flask Quart Express Gulp'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
