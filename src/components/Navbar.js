export const Navbar = () => {
  return (
    <header className="max-w-5xl mx-auto my-0 flex justify-center p-4">
      <nav className="w-full">
        <ul className="list-none flex justify-around">
          <li>
            <a className="p-2 text-teal-800 hover:text-teal-500" href="#home">
              Home
            </a>
          </li>
          <li>
            <a
              className="p-2 text-teal-800 hover:text-teal-500"
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a className="p-2 text-teal-800 hover:text-teal-500" href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a
              className="p-2 text-teal-800 hover:text-teal-500"
              href="#contact-me"
            >
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
