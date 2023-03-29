import { ProjectCard } from './projectCard'

export const Projects = () => {
  return (
    <section className='m-5'>
      <div className='flex justify-between items-center mb-10'>
        <h2 className='hashtag text-3xl font-medium'>projects</h2>
        <p>View all --&gt;</p>
      </div>

      <div className='flex flex-col gap-4 lg:flex-row'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>

    </section>
  )
}
