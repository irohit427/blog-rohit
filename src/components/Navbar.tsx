import { Link } from 'react-router-dom'
import ThemeToggler from './ThemeToggler'

const Navbar = () => {
  

  return (
    <div className='flex w-full mx-auto h-16 
      items-center justify-between px-36 border-b border-slate-200'>
      <Link to='/'>
        <div className='text-2xl font-bold'>
          <p className='hover:scale-105 transition duration-200 ease-in-out'>Rohit's Blog</p>
        </div>
      </Link>
      <div>
        <ul className='flex flex-row gap-9'>
          <ThemeToggler />
          <Link to='/' className='hover:scale-105 font-bold text-lg transition duration-300 ease-in-out hover-color'>
            Home
          </Link>
          <Link to='/blogs' className='hover:scale-105 font-bold text-lg transition duration-300 ease-in-out hover-color'>
            Blogs
          </Link>
          <Link to='/about' className='hover:scale-105 font-bold text-lg transition duration-300 ease-in-out hover-color'>
            About
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar