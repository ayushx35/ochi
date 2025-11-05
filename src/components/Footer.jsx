import React from 'react'

function Footer() {
  return (
    <footer className='section border-t border-zinc-800 text-zinc-400 text-sm'>
      <div className='flex flex-col md:flex-row justify-between gap-6'>
        <nav className='flex gap-6'>
          <a href='#' className='hover:text-white'>Instagram</a>
          <a href='#' className='hover:text-white'>LinkedIn</a>
          <a href='#' className='hover:text-white'>Dribbble</a>
        </nav>
        <p>© {new Date().getFullYear()} Ochi replica</p>
      </div>
    </footer>
  )
}

export default Footer
