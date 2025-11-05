import React from 'react'

function Services() {
  return (
    <section className='section border-t border-zinc-800'>
      <h2 className='uppercase text-4xl md:text-5xl tracking-tight heading-xl mb-8 md:mb-10'>Services</h2>
      <ul className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-zinc-300'>
        <li className='bg-zinc-800 rounded-xl p-5 md:p-6'>AI Monitoring</li>
        <li className='bg-zinc-800 rounded-xl p-5 md:p-6'>Special FX rates</li>
        <li className='bg-zinc-800 rounded-xl p-5 md:p-6'>Round-the-clock support</li>
        <li className='bg-zinc-800 rounded-xl p-5 md:p-6'>Data Visualisation</li>
      </ul>
    </section>
  )
}

export default Services
