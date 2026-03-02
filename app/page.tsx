import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
    </div>
  );
}

function Hero() {
  return (
    <section className="bg-[url(/images/imgi_14_banner-01.jpg)] bg-cover bg-center h-[80vh] flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-2 gap-4 justify-between">
        <div> left</div>
        <div className="bg-[#cbd1d2]">
          <form className="w-full">
            <h1 className="text-center text-[20px] font-bold">Register EOI</h1>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2 mb-2 border rounded"
            />
            <input
              type="number"
              placeholder="Phone Number"
              className="w-full p-2 mb-2 border rounded"
            />
            <input
              type="number"
              placeholder="Phone Number"
              className="w-full p-2 mb-2 border rounded"
            />
            <input
              type="number"
              placeholder="Phone Number"
              className="w-full p-2 mb-2 border rounded"
            />
            <input
              type="number"
              placeholder="Phone Number"
              className="w-full p-2 mb-2 border rounded"
            />
          </form>
        </div>
      </div>
    </section>
  );
}
