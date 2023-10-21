import { AboutMe } from "./AboutMe";
import { Navbar } from "./Navbar";
import { Projects } from "./Projects";
import { ContactMe } from "./ContactMe";
import { Hero } from "./Hero";

export const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <AboutMe />
      <ContactMe />
    </>
  );
};
