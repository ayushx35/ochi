import React from 'react'

function Reviews() {
  return (
    <section className="sticky top-24 z-0 border-zinc-800">
      <div className="max-w-7xl mx-auto text-left">
        <p className="text-blue-600 text-sm font-medium mb-4">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-serif font-regular mb-20">
          Trusted by executives and families at
        </h2>

        {/* Scrolling logos */}
        <div className="mb-12 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div className="flex animate-scroll whitespace-nowrap">
            {[
              "mckinsey.png",
              "ey.png",
              "Zomato.png",
              "google.png",
              "Cognizant.png",
              "microsoft.png",
              "pwc.png",
              "Bira.png",
              "IBM.png",
              "meta.png",
            ].map((logo, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 mx-[15px] flex items-center justify-center"
              >
                <img
                  src={`/${logo}`}
                  alt={logo.split('.')[0]}
                  className="object-contain grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300 h-8 md:h-8"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dotted divider */}
        <div
          className="mb-14"
          style={{
            height: "1px",
            background:
              "repeating-linear-gradient(to right, rgba(55,65,81,0.4) 0, rgba(55,65,81,0.4) 2px, transparent 5px, transparent 10px)",
          }}
        ></div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          {[
            {
              img: "/customers/anomitra.jpeg",
              name: "Anomitra Saha",
              role: "Principal Engineer, Captainfresh (Bangalore)",
              quote:
                "Very useful platform for me in order to access US stock markets from India, and Nitish and his team make the onboarding process pretty seamless.",
            },
            {
              img: "/customers/deepakM.jpeg",
              name: "Deepak Menon",
              role: "Vice President, Microsoft (Hyderabad)",
              quote:
                "Craft matters. Paasa's experience is clean, but the real win is the rigor behind it; I needed clarity. Paasa delivered.",
            },
            {
              img: "/customers/maadhav.jpeg",
              name: "Maadhav Veer Singh",
              role: "CIO, BTB Family Office (Gurgaon)",
              quote:
                "Great interface and easy to use. Gives access to global portfolios better than any app.",
            },
            {
              img: "/customers/navdeep.jpeg",
              name: "Navdeep Manaktala",
              role: "Co-Founder, Snowbit (Gurgaon)",
              quote:
                "The seamless fund withdrawals and dedicated advisory support make global investing accessible and trustworthy.",
            },
          ].map((t, i) => (
            <div key={i} className="flex flex-col">
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover"
                />
                <blockquote className="text-gray-900 text-sm md:text-base leading-normal tracking-tight">
                  “{t.quote}”
                </blockquote>
              </div>
              <div className="text-left pl-16 md:pl-[72px]">
                <p className="text-base md:text-lg font-medium text-gray-900 mb-0">
                  {t.name}
                </p>
                <p className="text-sm md:text-base text-gray-600">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            height: "1px",
            background:
              "repeating-linear-gradient(to right, rgba(55,65,81,0.4) 0, rgba(55,65,81,0.4) 2px, transparent 5px, transparent 10px)",
          }}
        ></div>
      </div>
    </section>
  )
}

export default Reviews
