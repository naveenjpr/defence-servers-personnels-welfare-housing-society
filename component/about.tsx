import Image from "next/image"
export default function about() {
  return (
    <>
    <section className="px-25 py-10 text-xl">
        {/* part 1 */}
        <div className="text-center">
            <p>Exclusive farm lots available at special reserved price for defence personnel, paramilitary healthcare professionals & govt. sector officers, and their families under an approved eco-tourism farm project, approved under Govt. of India policy for eco-tourism.</p>
            <p>Located near PGIMER, Chandigarh, the project offers the perfect blend of nature, premium amenities, and high-return investment potential.</p>
        </div>
        {/* part 2 */}
        <div className="my-10 flex flex-row justify-between gap-5">
            <div className="rounded-4xl overflow-hidden h-100 w-100">
                <Image 
                src="/images/imgi_3_featured.jpg"
                alt=""
                width={500}
                height={500}
                className="object-cover h-full w-full"
                />
            </div>
            <div className="w-200 flex flex-col gap-3">
              <h1 className="text-3xl font-bold ">
                LIMITED FARM LOTS AVAILABLE
              </h1>
           <h3 className="text-xl font-bold">Farm Lot Sizes with Basic Sale Price</h3>

           <div>
            <ul className="text-red-400">
                <li>a) 605 Sq. Yards: INR 30000/- (Per sq. yd)</li>
                <li>b) 1250 Sq. Yards: INR 25000/- (Per sq. yd)</li>
            </ul>
           </div>
           <p className="text-gray-500">Now open for applications under the approved Eco-Tourism Policy (Govt. of India). Enjoy special reserved pricing exclusively for Defence, Paramilitary Healthcare Professionals & Govt. service communities with flexible financing options.</p>
            </div>

            <div className="shadow-xl  rounded-2xl">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold">
                            SPECIAL 5% OFF FOR
                        </h2>

                    </div>

            </div>
        </div>
        {/* part3 */}
        <div className="text-center text-xl">
            <p><strong>Disclaimer:</strong> This is not a residential colony. It is an ecotourism projects comprising of forms with farmstay options</p>
        </div>
    </section>
    </>
  )
}
