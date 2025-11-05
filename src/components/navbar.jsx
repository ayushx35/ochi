import React from 'react'

function Navbar() {
  return (
    <div className='fixed z-[999] w-full px-20 py-8 font-neue-montreal flex justify-between items-center' style={{ fontFamily: "'Neue Montreal', sans-serif" }}>
      <div className='h-1 w-[10vw]'><img href='#'src="/Logo.png" alt="" />
      </div>
      <div className='links flex gap-10 '>
        {["Services","Our Work","About Us","Insights"].map((item,index)=>(
          <a key={index} className='font-medium relative text-md font-light p-1 rounded-sm transition-all duration-300 ease-out text-white
             hover:text-black hover:bg-white
             before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-white
             before:scale-y-0 hover:before:scale-y-100 before:origin-bottom
             before:transition-transform before:duration-800 before:ease-out
             hover:-translate-y-1 hover:opacity-100' href='#'>{item}</a>
        ))}
      </div>
    </div>
  )
}

export default Navbar