import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-[#4b5161] text-[#fdf5eb]'>
      <div className='container mx-auto py-6 px-8'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <Link to='/' className='flex items-center gap-2'>
              <span className='font-bold text-xl'>
                Aaramya<span className='text-[#f58b44]'></span>
              </span>
            </Link>
          </div>
          <p className='text-sm font-medium hidden sm:block'>
            © {currentYear} Aaramya. All rights reserved.
          </p>
          
        </div>
        <div className='mt-3 text-center sm:hidden'>
          <p className='text-xs'>© {currentYear} MindChain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
