import { useTranslations } from 'next-intl'
import { Fisrt } from './components/fisrt'
import { Navbar } from './components/navbar'
import { Projects } from './components/projects'

export default function Index () {
  const t = useTranslations('Navbar')
  return (
    <>
      <div className='max-w-screen-lg mx-auto'>
        <Navbar paths={['', 'about', 'projects']} titles={[t('home'), t('about'), t('projects')]} />
        <Fisrt />
        <Projects />
      </div>
    </>

  )
}
