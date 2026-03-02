import Image from "next/image";

export default function Contact() {
  const applicants = [
    "Serving & Retired Defence Personnel",
    "Central & State Govt. Service Officers or any other govt. department",
    "Paramilitary Forces",
    "Doctor and Healthcare Professionals",
    "Immediate family members",
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 tracking-tight">
          WHO CAN APPLY?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info Table List */}
          <div className="col-lg-6 best-deal p-0">
            <div className="info-table bg-white rounded-lg shadow-sm border border-gray-100">
              <ul className="m-0 p-0 list-none">
                <li className="py-5 px-8 border-b border-gray-100 text-gray-700 text-lg font-medium leading-tight">
                  Serving & Retired Defence Personnel
                </li>
                <li className="py-5 px-8 border-b border-gray-100 text-gray-700 text-lg font-medium leading-tight">
                  Central & State Govt. Service Officers or any other govt. department
                </li>
                <li className="py-5 px-8 border-b border-gray-100 text-gray-700 text-lg font-medium leading-tight">
                  Paramilitary Forces
                </li>
                <li className="py-5 px-8 border-b border-gray-100 text-gray-700 text-lg font-medium leading-tight">
                  Doctor and Healthcare Professionals
                </li>
                <li className="py-5 px-8 text-gray-700 text-lg font-medium leading-tight">
                  Immediate family members
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Visual Support */}
          <div className="col-lg-6">
            <Image
              src="/images/imgi_11_deal-06.jpg"
              alt="Deal illustration"
              width={800}
              height={500}
              className="deal2 w-full h-auto shadow-sm transition-transform duration-700"
            />
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="contact section py-24 bg-[url(/images/imgi_16_contact-bg.jpg)] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto relative z-10 px-6">
          <div className="row">
            <div className="col-lg-4 offset-lg-4 mx-auto max-w-2xl">
              <div className="section-heading text-center mb-16">
                <h2 className="text-4xl font-extrabold text-white tracking-tight uppercase">CONTACT INFORMATION</h2>
              </div>
            </div>
          </div>

          <div className="contact-content max-w-6xl mx-auto">
            <div className="row grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="col-lg-6">
                <div className="item phone bg-white p-8 rounded-xl shadow-lg flex items-center gap-5">
                  <Image
                    src="/images/imgi_12_phone-icon1.png"
                    alt="Phone Icon"
                    width={52}
                    height={52}
                    style={{ maxWidth: '52px' }}
                  />
                  <h6 className="text-[18px] font-bold text-[#2a2a2a] leading-[26px]">
                    Regd. Office: <br />
                    <span className="text-[#1e1e1e] font-normal">DEFENCE & SERVICES PERSONNEL’S WELFARE HOUSING SOCIETY</span> <br />
                    <span className="text-[#1e1e1e] font-normal">A-12, Industrial Area, Phase-6, Mohali</span>
                  </h6>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="item email bg-white p-8 rounded-xl shadow-lg flex items-center gap-5">
                  <Image
                    src="/images/imgi_13_phone-icon.png"
                    alt="Phone Icon"
                    width={52}
                    height={52}
                    style={{ maxWidth: '52px' }}
                  />
                  <h6 className="text-[18px] font-bold text-[#2a2a2a] leading-[26px]">
                    For More Information: <br />
                    <span>
                      <a style={{ color: '#000' }} href="tel:93579 93579">+91 93579 93579</a>
                    </span>,
                    <span>
                      <a style={{ color: '#000' }} href="tel:99144 64161">+91 99144 64161</a>
                    </span>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
