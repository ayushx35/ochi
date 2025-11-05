import React from 'react'
import { FaArrowRightLong, FaYCombinator } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1 -z-10'>
      <div className='tracking-tighter textstructure px-20 mt-40 mb-[100px]'>
        <div className="masker">
          <h1 className="tracking-[.25em] uppercase text-8xl leading-none tracking-tighter font-medium font-founders-grotesk" style={{ fontFamily: "'Founders_Grotesk', sans-serif" }}>Global Investing</h1>
        </div>

        <div className='flex flex-row items-center gap-4'>
          {/* Y Combinator logo with hover text */}
          <div className="relative group basis-[140px] h-20 w-32 bg-white rounded-lg flex items-center justify-center mb-2 overflow-hidden">
            <FaYCombinator className="text-[#f94a11] animate-bounce" size={80} />
            
            {/* Hover text */}
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-lg font-semibold text-white">
                Backed by <span className="text-[#f94a11]">Y Combinator</span>
              </p>
            </div>
          </div>

          <div className="masker flex-1">
            <h1 className="tracking-tighter uppercase text-8xl leading-none tracking-tighter font-medium font-founders-grotesk" style={{ fontFamily: "'Founders_Grotesk', sans-serif" }}>for the</h1>
          </div>
        </div>

        <div className="masker border-b border-[gray]">
          <h1 className="mb-20 tracking-tighter uppercase text-8xl leading-none tracking-tighter font-medium font-founders-grotesk" style={{ fontFamily: "'Founders_Grotesk', sans-serif" }}>Global Indian</h1>
        </div>
      </div>

      <div className="px-20">
        <ul className="flex justify-between list-none" style={{ textDecoration: 'none' }}>
          <li>Invest with confidence</li>
          <li>For innovation teams and global brands</li>
          <li className='group flex flex-row'>
            <a href="#" className="flex items-center gap-2 transition duration-300 ease-in-out cursor-pointer border border-solid rounded-full px-4 py-3 group-hover:bg-white group-hover:text-black">START INVESTING</a>
            <a href="#" className="rotate-320 flex items-center gap-2 transition duration-300 ease-in-out cursor-pointer border border-solid rounded-full px-4 py-3 group-hover:bg-white group-hover:text-black"><FaArrowRightLong /></a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default LandingPage
