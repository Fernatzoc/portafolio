import { About } from './components/about'
import { Contact } from './components/contact'
import { Fisrt } from './components/fisrt'
import { Footer } from './components/footer'
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
      <Footer />
    </>

  )
}
