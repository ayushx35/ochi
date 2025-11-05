import React from 'react'

function Marquee() {
  return (
    <div className="top-24 z-0 border rounded-lg border-zinc-900 w-full h-[40vh] bg-white text-black uppercase font-semibold text-8xl font-founders-grotesk flex flex-col items-center justify-center gap-10 mb-10 m-auto tracking-tighter overflow-hidden">
  
      <div className="animate-marquee-reverse whitespace-nowrap mt-[-10vh]">
        <h1 className="border-y border-black px-4 py-2 inline-block mr-10">We are Paasa</h1>
        <h1 className="border-y border-black px-4 py-2 inline-block mr-10">We are Paasa</h1>
        <h1 className="border-y border-black px-4 py-2 inline-block mr-10">We are Paasa</h1>
        <h1 className="border-y border-black px-4 py-2 inline-block mr-10">We are Paasa</h1>
        <h1 className="border-y border-black px-4 py-2 inline-block mr-10">We are Paasa</h1>
        <h1 className="border-y border-black px-4 py-2 inline-block mr-10">We are Paasa</h1>
        <h1 className="border-y border-black px-4 py-2 inline-block mr-10">We are Paasa</h1>
        <h1 className="border-y border-black px-4 py-2 inline-block mr-10">We are Paasa</h1>
        <h1 className="border-y border-black px-4 py-2 inline-block mr-10">We are Paasa</h1>
      </div>
    </div>
  )
}

export default Marquee