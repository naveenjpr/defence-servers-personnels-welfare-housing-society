import React from 'react'
import Image from "next/image";

export default function Disclaimmer() {
  return (
    <>

      <div className='bg-[url(/images/imgi_15_video-bg.jpg)] py-15 '>
        <h2 className='text-center text-white text-2xl font-bold pt-3 pb-5'>FLEXIBLE FINANCING OPTIONS AVAILABLE
        </h2>
        <p className="text-white text-center">Loan facility is available to make it easier, smoother, and more accessible.
          Get assistance for loan support, and documentation.
        </p>
        <p className='text-white text-center'>Pay 50% now and Pay the remaining amount in easy installment over 2 years or 5 years options</p>
        <p className='text-white text-center'>Transfer benefits available | Loan transfer benefits available</p>
        <p className='text-white text-center'>OPTION 1: Pay remaining 50% in 2 years @10% interest </p>
        <p className='text-white text-center'>OPTION 2: Pay remaining 50% in 5 years @12% interest</p>
      </div>
      <ProjectHighlights />
      <Location />
    </>

  )
}


function ProjectHighlights() {
  return (
    <section className="w-full bg-[#fafafa] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <button className="bg-[#ee1c25] hover:bg-black text-white px-8 py-4 rounded-lg font-bold text-sm tracking-widest transition-all duration-300 shadow-md whitespace-nowrap">
            PROJECT LOCATION
          </button>
          <button className="bg-[#1c1c1c] hover:bg-[#ee1c25] text-white px-8 py-4 rounded-lg font-bold text-sm tracking-widest transition-all duration-300 shadow-md whitespace-nowrap">
            PROJECT HIGHLIGHTS
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <article>
            <div className="mb-6">
              <h2 className="font-medium text-2xl">Strategically Located Near</h2>
            </div>
            <div className="shadow-xl bg-white rounded-xl overflow-hidden">
              <ul>
                <li className="py-5 px-8 border-b border-gray-100 text-gray-700 text-lg font-medium leading-tight">7 Kms from PGIMER, Chandigarh</li>
                <li className="py-5 px-8 border-b border-gray-100 text-gray-700 text-lg font-medium leading-tight">8 Kms from Punjab University, Chandigarh</li>
                <li className="py-5 px-8 border-b border-gray-100 text-gray-700 text-lg font-medium leading-tight">5 Kms from Chandigarh Club & Civil Secretariat</li>
                <li className="py-5 px-8 border-b border-gray-100 text-gray-700 text-lg font-medium leading-tight">9.8 Kms from Sukhna Lake, Chandigarh</li>
                <li className="py-5 px-8 border-b border-gray-100 text-gray-700 text-lg font-medium leading-tight">10 Kms from Sector 17, i.e., Heart of Chandigarh</li>
              </ul>
            </div>
          </article>

          <figure className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="bg-gray-200 flex items-center justify-center">
              <Image
                src="/images/imgi_7_deal-01.jpg"
                alt="Project presentation showing strategic location"
                width={800}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  )
}


function Location() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 tracking-tight uppercase">
            WHO CAN APPLY?
          </h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Info Table List */}
          <article className="w-full">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-50 overflow-hidden">
              <ul className="m-0 p-0 list-none">
                <li className="py-6 px-10 border-b border-gray-100 text-gray-700 text-lg font-medium leading-tight hover:bg-gray-50 transition-colors">
                  Serving & Retired Defence Personnel
                </li>
                <li className="py-6 px-10 border-b border-gray-100 text-gray-700 text-lg font-medium leading-tight hover:bg-gray-50 transition-colors">
                  Central & State Govt. Service Officers or any other govt. department
                </li>
                <li className="py-6 px-10 border-b border-gray-100 text-gray-700 text-lg font-medium leading-tight hover:bg-gray-50 transition-colors">
                  Paramilitary Forces
                </li>
                <li className="py-6 px-10 border-b border-gray-100 text-gray-700 text-lg font-medium leading-tight hover:bg-gray-50 transition-colors">
                  Doctor and Healthcare Professionals
                </li>
                <li className="py-6 px-10 text-gray-700 text-lg font-medium leading-tight hover:bg-gray-50 transition-colors">
                  Immediate family members
                </li>
              </ul>
            </div>
          </article>

          {/* Right: Visual Support */}
          <figure className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/imgi_11_deal-06.jpg"
              alt="Illustration of eligible categories for housing"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}