import Image from "next/image";

export default function hero() {
  return (
    <section className="bg-[url(/images/imgi_14_banner-01.jpg)] bg-cover bg-center h-[80vh] flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-2 gap-16 justify-between">
        <div className="bg-[#254c8d] bg-opacity-70 p-4 rounded-lg flex items-start justify-center w-full h-[200px] opacity-90 ">
          <h2 className="text-white text-[40px] font-bold leading-[50px] px-3 py-3">
            Defence & Services <br /> Personnel’s Welfare Housing Society
          </h2>
        </div>

        <div className="bg-[#cbd1d2] p-4 rounded-[30px] opacity-90 w-135 h-126.75">
          <form className="w-full">
            <h1 className="text-center text-[20px] font-bold text-[#164398] border-b-2 border-[white] mb-4">
              Register EOI
            </h1>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2 mb-5  rounded bg-white"
            />
            <input
              type="number"
              placeholder="mobile Number"
              className="w-full p-2 mb-5 bg-white rounded"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-2 mb-5  bg-white rounded"
            />
            <div className="flex justify-between gap-4">
              <input
                type="number"
                placeholder="Residing City"
                className="w-full p-2 mb-5  rounded bg-white"
              />
              <input
                type="number"
                placeholder="Occupation"
                className="w-full p-2 mb-5  rounded bg-white"
              />
            </div>
            <select className="w-full p-2 mb-5  rounded bg-white">
              <option value="">Select Category</option>
              <option value="option1">Serving & Retired Defence Officer</option>
              <option value="option2">Paramilitary Forces</option>
              <option value="option3">Govt. Officers</option>
            </select>
            <select className="w-full p-2 mb-5  rounded bg-white">
              <option value="">Lot size</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <button className="w-full bg-[red] text-white p-2 rounded ">
              Register
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
