import React from "react";

export default function Hero() {
  return (
    <section className="relative bg-[url(/images/imgi_14_banner-01.jpg)] bg-cover bg-center min-h-[80vh] flex items-center justify-center py-10 ">
      {/* Overlay for better readability on mobile */}
      <div className="absolute inset-0 bg-black/30 md:hidden"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start justify-between ">
        {/* Text Section */}
        <div className=" relative bg-[#254c8d]/80 p-6 md:p-8 rounded-2xl flex flex-col items-center lg:items-start text-center lg:text-left shadow-xl border-l-8 border-white">
          <h2 className="text-white text-3xl md:text-4xl lg:text-[40px] font-bold leading-tight md:leading-[50px]">
            Defence & Services <br className="hidden md:block" /> Personnel’s
            Welfare Housing Society
          </h2>
        </div>

        {/* Form Section */}
        <div className="bg-[#cbd1d2]/95 p-2 md:p-3 rounded-[30px] shadow-2xl w-full opacity-80 ">
          <form
            className="w-full  "
            action={`https://formsubmit.co/${process.env.EMAIL}`}
            method="POST"
          >
            <h1 className="text-center text-xl md:text-2xl font-bold text-[#164398] border-b-2 border-white pb-3 mb-6 uppercase tracking-wide">
              Register EOI
            </h1>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                className="w-full p-1 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#164398]"
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                name="phone"
                className="w-full p-1 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#164398]"
              />
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                className="w-full p-1 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#164398]"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Residing City"
                  name="city"
                  className="w-full p-1 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#164398]"
                />
                <input
                  type="text"
                  placeholder="Occupation"
                  name="occupation"
                  className="w-full p-1 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#164398]"
                />
              </div>

              <select
                name="category"
                className="w-full p-1 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#164398]"
              >
                <option value="">Select Category</option>
                <option value="Serving & Retired Defence Officer">
                  Serving & Retired Defence Officer
                </option>
                <option value="Paramilitary Forces">Paramilitary Forces</option>
                <option value="Govt. Officers">Govt. Officers</option>
              </select>

              <select
                name="lotsize"
                className="w-full p-1 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#164398]"
              >
                <option value="">Lot size</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>

              <button className="w-full bg-[#e11d48] opacity-100 hover:bg-red-700 text-white font-bold py-2 mt-4 rounded-lg transition-colors shadow-lg active:scale-[0.98]">
                REGISTER NOW
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
