import Image from "next/image";

export default function about() {
  return (
    <>
      <section className={`  px-25 mt-2 mx-5 py-10 leading-[1.8]`}>
        {/* part 1 */}
        <div className="text-center">
          <p>
            Exclusive farm lots available at special reserved price for defence
            personnel, paramilitary healthcare professionals & govt. sector
            officers, and their families under an approved eco-tourism farm
            project, approved under Govt. of India policy for eco-tourism.
          </p>
          <p>
            Located near PGIMER, Chandigarh, the project offers the perfect
            blend of nature, premium amenities, and high-return investment
            potential.
          </p>
        </div>
        {/* part 2 */}
        <div className="my-10 flex flex-col lg:flex-row justify-between gap-5">
          <div className="rounded-[50px]  overflow-hidden h-105 w-105">
            <Image
              src="/images/imgi_3_featured.jpg"
              alt=""
              width={510}
              height={510}
              className="object h-full w-full"
            />
          </div>
          <div className="w-125 text-justify flex flex-col gap-3 py-5">
            <h1 className="text-2xl font-[font2] ">
              LIMITED FARM LOTS AVAILABLE
            </h1>
            <h3 className="text-sm font-extrabold">
              Farm Lot Sizes with Basic Sale Price
            </h3>

            <div>
              <ul className="text-red-500 text-[15px]">
                <li>a) 605 Sq. Yards: INR 30000/- (Per sq. yd)</li>
                <li>b) 1250 Sq. Yards: INR 25000/- (Per sq. yd)</li>
              </ul>
            </div>
            <p className="text-gray-600 border-t border-gray-200 pt-5">
              Now open for applications under the approved Eco-Tourism Policy
              (Govt. of India). Enjoy special reserved pricing exclusively for
              Defence, Paramilitary Healthcare Professionals & Govt. service
              communities with flexible financing options.
            </p>
          </div>

          <div className="shadow-[0px_3px_13px_rgba(0,0,0,0.25)] rounded-xl w-75 ">
            <div className=" pt-5 ">
              <h2 className="text-[19px] font-bold pl-8 pb-2 my-5 ">SPECIAL 5% OFF FOR</h2>
              <div className="text-xl text-center font-bold ">
                <p className="text-left border-y py-4 mx-5 border-gray-200 flex items-center gap-2 ">
                  <Image
                    src={"/images/imgi_4_war.png"}
                    alt=""
                    width={50}
                    height={50}
                    className="m-3"
                  />{" "}
                  War Widows
                </p>
                <p className="text-left py-4 mx-5 border-y border-gray-200 flex items-center gap-2">
                  <Image
                    src={"/images/imgi_4_war.png"}
                    alt=""
                    width={50}
                    height={50}
                    className="m-3"
                  />{" "}
                  War Veterans
                </p>
                <p className="text-left pt-4 mx-5 pb-4 border-t border-gray-200 flex items-center gap-2  ">
                  <Image
                    src={"/images/imgi_5_mad.png"}
                    alt=""
                    width={50}
                    height={50}
                    className="m-3"
                  />{" "}
                  Gallantry Award Winners
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* part3 */}
        <div className="text-center ">
          <p className="mx-45">
            <strong>Disclaimer:</strong> This is not a residential colony. It is
            an ecotourism projects comprising of forms with farmstay options
          </p>
        </div>
      </section>
    </>
  );
}
