import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Languages from "@/components/Languages";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import LanguageToogle from '../components/common/LanguageToogle';

export default function Home() {
  return (
    <main className="flex flex-col w-full h-max items-center p-2">
      <LanguageToogle/>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Languages />
      <Projects />
      <Contact />
    </main>
  );
}
