import Image from "next/image";

export default function Contact() {


  return (
    <section className="bg-[url(/images/imgi_16_contact-bg.jpg)] bg-cover bg-center  pb-15">

      <h2 className="text-center text-white text-2xl font-bold  pt-10">CONTACT INFORMATION
      </h2>
      <div className="max-w-7xl mx-auto px-6 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">          {/* Office Address Card */}
          <div className="bg-white p-6 rounded-xl shadow-lg flex items-center gap-6">
            <div className="">
              <Image
                src="/images/imgi_12_phone-icon1.png"
                alt="Office icon"
                width={50}
                height={50}
                className="w-12 h-12 md:w-14 md:h-14"
              />
            </div>
            <div className="py-2">
              <h3 className="text-lg font-bold text-gray-900 leading-tight">Regd. Office:</h3>
              <p className="text-sm font-medium text-gray-700 mt-1 uppercase">
                DEFENCE & SERVICES PERSONNEL’S WELFARE HOUSING SOCIETY
              </p>
              <p className="text-sm text-gray-600">A-12, Industrial Area, Phase-6, Mohali</p>
            </div>
          </div>

          {/* Contact Information Card */}
          <div className="bg-white p-6 rounded-xl shadow-lg flex items-center gap-6">
            <div className="">
              <Image
                src="/images/imgi_13_phone-icon.png"
                alt="Phone icon"
                width={50}
                height={50}
                className="w-12 h-12 md:w-14 md:h-14"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 leading-tight">For More Information:</h3>
              <div className="mt-1 flex flex-wrap gap-x-2 text-sm font-bold text-gray-900">
                <a href="tel:9357993579" className="hover:text-[#ee1c25] transition-colors">
                  +91 93579 93579
                </a>
                <span>,</span>
                <a href="tel:9914464161" className="hover:text-[#ee1c25] transition-colors">
                  +91 99144 64161
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
