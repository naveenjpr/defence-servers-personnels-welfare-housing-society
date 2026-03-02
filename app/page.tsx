import Hero from "@/component/hero";
import About from "@/component/about";
import Disclaimmer from "@/component/disclaimmer";
import Contact from "@/component/contact";
import { Roboto } from "next/font/google"
import { Poppins } from "next/font/google"

const roboto = Roboto({
    subsets: ["latin"],
    weight: "400",
})

const poppins = Poppins({
    subsets: ["latin"],
    weight: "400",
})

export default function Home() {
  return (
    <><main className={`${poppins.className}`}>

      <Hero />
      <About />
      <Disclaimmer />
      <Contact />
    </main>
    </>
  );
}

