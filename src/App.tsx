import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Home } from "@/components/Home";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Footer } from "./components/Footer";
import { Toaster } from "sonner";
import "./index.css";

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div>
      <Toaster />
      <div>
        <Navbar />
        <main className="px-4 w-full">
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="footer">
            <Footer />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
