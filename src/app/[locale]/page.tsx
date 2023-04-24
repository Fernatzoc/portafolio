import { About } from './components'
import { Contact } from './components/contact'
import { Fisrt } from './components/fisrt'
import { Projects } from './components/projects'
import { Skills } from './components/skills'

export default function Index () {
  return (
    <>
      <Fisrt />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </>

  )
}
