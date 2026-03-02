import Hero from "@/component/hero";
import About from "@/component/about";
import Disclaimmer from "@/component/disclaimmer";
import Contact from "@/component/contact";
export default function Home() {
  return (
    <><main className="font-roboto">

      <Hero />
      <About />
      <Disclaimmer />
      <Contact />
    </main>
    </>
  );
}

