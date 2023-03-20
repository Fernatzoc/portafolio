import Link from 'next/link'
import { Navbar } from './components/navbar'
import Image from 'next/image'
import devImage from '../../public/assets/Images/devImage.jpg'

export default function Home () {
  return (
    <>
      <div className='max-w-screen-lg mx-auto'>
        <Navbar />

        <div className='flex flex-col m-5 gap-6 lg:flex-row lg:m-0 lg:justify-between lg:mt-4'>
          <div className='flex flex-col gap-5 lg:w-1/2 lg:justify-center lg:gap-7'>
            <h1 className='text-3xl font-semibold'>Fernando is a <span>web designer</span> and <span>front-end</span> developer</h1>
            <p className='text-fontColor'>He crafts responsive websites where technologies meet creativity</p>
            <div className='hidden lg:block'>
              <Link href='/contact' className='bg-transparen border border-purpleColor pt-2 pb-2 pr-4 pl-4 hover:bg-purpleColor hover:text-fontColor hover:border-fontColor'>
                Contact ME ##
              </Link>
            </div>
          </div>
          <div className='lg:w-1/2'>
            <Image
              src={devImage}
              alt='Picture of the author'
              className='h-96 w-auto'
            />
          </div>
        </div>

      </div>
    </>

  )
}
