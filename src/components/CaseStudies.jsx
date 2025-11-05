import React from 'react'

function CaseStudies() {
  return (
    <section className='section border-t border-zinc-800'>
      <div className='flex items-end justify-between mb-8 md:mb-10'>
        <h2 className='uppercase text-4xl md:text-5xl tracking-tight heading-xl'>Case Studies</h2>
        <a href='#' className='text-sm underline'>View all</a>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10'>
        <article className='group relative aspect-[16/10] rounded-xl overflow-hidden bg-zinc-800 cursor-zoom-in'>
          <img src='/DirectInvesting.jpg' alt='Direct Investing' className='w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110' />
          {/* Hover title overlay */}
          <div className='pointer-events-none absolute inset-0 flex items-center justify-center'>
            <span className="font-founders-grotesk uppercase text-5xl md:text-7xl tracking-tight text-gray-600 drop-shadow-[black] opacity-0 scale-95 translate-y-2 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0">
              Direct Investing
            </span>
          </div>
          {/* Bottom caption for readability */}
          <div className='pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4'>
            <h3 className='text-lg md:text-xl font-semibold'>Direct Investing</h3>
          </div>
        </article>
        <article className='group relative aspect-[16/10] rounded-xl overflow-hidden bg-zinc-800 cursor-zoom-in'>
          <img src='/Managed.webp' alt='Managed Strategies' className='w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110' />
          {/* Hover title overlay */}
          <div className='pointer-events-none absolute inset-0 flex items-center justify-center'>
            <span className="font-founders-grotesk uppercase text-5xl md:text-7xl tracking-tight text-gray-600 drop-shadow-[black] opacity-0 scale-95 translate-y-2 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0">
            Managed Strategies
            </span>
          </div>
          <div className='pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4'>
            <h3 className='text-lg md:text-xl font-semibold'>Managed Strategies</h3>
          </div>
        </article>
      </div>
    </section>
  )
}

export default CaseStudies
