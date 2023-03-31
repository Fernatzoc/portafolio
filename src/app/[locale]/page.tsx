import { Fisrt } from './components/fisrt'
import { Navbar } from './components/navbar'
import { Projects } from './components/projects'

export default function Index () {
  return (
    <>
      <div className='max-w-screen-lg mx-auto'>
        <Navbar />
        <Fisrt />
        <Projects />
      </div>
    </>
  )
}

// export default function Home () {
//   return (
//     <>
//       <div className='max-w-screen-lg mx-auto'>
//         <Navbar />
//         <Fisrt />
//         <Projects />
//       </div>
//     </>

//   )
// }
