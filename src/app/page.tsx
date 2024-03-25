"use client"
import About from "@/sections/About/About";
import Contact from "@/sections/Contact/Contact";
import Hero from "@/sections/Hero/Hero";
import Projects from "@/sections/Projects/Projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-16 px-4 md:px-10 max-w-[1280px]">
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </main>
  );
}
