import { Toaster } from "sonner";
import { Background } from "./components/Background";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { ResumeCard } from "./components/ResumeCard";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-indigo-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <Background />
      <Navbar />

      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <ResumeCard />
        <Contact />
      </main>

      <Footer />

      <Toaster
        theme="dark"
        position="bottom-right"
        richColors
        closeButton
        toastOptions={{
          style: {
            background: "rgba(15, 23, 42, 0.9)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(16px)",
          },
        }}
      />
    </>
  );
}
