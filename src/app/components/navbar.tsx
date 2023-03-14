import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className='mt-8 mb-2'>
      <ul className='flex justify-between'>
        <div>
          <li>
            <Link href='/' className='font-bold'>
              Fernando
            </Link>
          </li>
        </div>
        <div className='flex justify-between gap-8'>
          <li className='hashtag'>
            <Link href='/' className='text-fontColor hover:text-white'>
              home
            </Link>
          </li>
          <li className='hashtag'>
            <Link href='/about' className='text-fontColor hover:text-white'>
              projects
            </Link>
          </li>
          <li className='hashtag'>
            <Link href='/contact' className='text-fontColor hover:text-white'>
              about-me
            </Link>
          </li>
        </div>

      </ul>
    </nav>
  )
}
