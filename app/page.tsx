import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Languages from "@/components/Languages";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import LanguageToogle from "../components/common/LanguageToogle";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col w-full items-center p-2">
      <LanguageToogle />
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
