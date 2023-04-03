import { useTranslations } from 'next-intl'
import { Navbar } from '../components/navbar'

export default function AboutPage () {
  const t = useTranslations('Navbar')
  return (
    <Navbar paths={['', 'about', 'projects']} titles={[t('home'), t('about'), t('projects')]} />
  )
}
