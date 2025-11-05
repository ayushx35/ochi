import React from 'react'

function About() {
  return (
    <section className="section border-t border-zinc-800 py-20">
      {/* group allows hover effects to target nested elements */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-6 group">
        
        {/* Text Section */}
        <div className="md:w-1/2">
          <h2 className="uppercase text-4xl md:text-5xl tracking-tight heading-xl mb-6">
            How can we help :
          </h2>
          <p className="text-zinc-300 mb-6">
            Paasa is a financial technology company, not a bank or brokerage or financial advisor. 
            All banking and brokerage services are provided by our licensed partners.
          </p>

          {/* Hover on this affects image too */}
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-zinc-600 rounded-full px-4 py-2 text-sm hover:bg-white hover:text-black transition-colors duration-200"
          >
            Learn more
          </a>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/founder.png"
            alt="Founder"
            className="w-full max-w-md object-cover rounded-2xl border-2 border-dotted border-zinc-600 transition-transform duration-300 ease-out group-hover:scale-105 group-hover:brightness-110"
          />
        </div>
      </div>
    </section>
  )
}

export default About
