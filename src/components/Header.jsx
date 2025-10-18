import { useState, useEffect, useRef } from 'react';
import logo from '../images/LOGO DEFINITIVO-03.png';

export default function Header() {
  const minHeaderHeight = 80;
  const maxHeaderHeight = 250;

  const [isOpen, setIsOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [headerHeight, setHeaderHeight] = useState(() =>
    typeof window !== 'undefined' && window.innerWidth >= 768 ? maxHeaderHeight : minHeaderHeight
  );

  const headerRef = useRef(null);

  const navbarButtons = ["Home", "Chi siamo", "Servizi", "Il nostro team", "Contatti"];

  useEffect(() => {
    const onScroll = () => {
      const newIsTop = window.scrollY <= 5;
      setIsTop(newIsTop);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Cleanup function removes the event listener when component unmounts
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const computeHeights = () => {
      const expanded = window.innerWidth >= 768 ? maxHeaderHeight : minHeaderHeight;
      const collapsed = window.innerWidth >= 768 ? minHeaderHeight : 60;
      setHeaderHeight(isTop ? expanded : collapsed);
    };

    computeHeights();
    const onResize = () => computeHeights();
    window.addEventListener('resize', onResize);

    // Cleanup function removes the event listener when component unmounts
    return () => window.removeEventListener('resize', onResize);
  }, [isTop]);

  return (
    <div
      className="sticky top-0 z-50"
      style={{ height: `${minHeaderHeight}px` }} // Fixed container height
    >
      <header
        ref={headerRef}
        className="bg-white w-full shadow-md shadow-ncvColor-grey flex justify-center transition-all duration-300 mt-2"
        style={{ height: `${headerHeight}px` }}
      >
        <div className="container flex justify-between items-center h-full py-2 md:px-0 max-w-7xl">
          <div className="h-full m-auto">
            <img
              src={logo}
              alt="Nuova Clinica Veterinaria val d'Elsa"
              id="Home"
              className="max-h-[60px] md:max-h-full w-auto flex items-center pr-4"
            />
          </div>

          <button
            className="block lg:hidden text-3xl text-ncvColor-blue focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>
          <nav
            className={`${isOpen ? 'block' : 'hidden'
              } shadow-md lg:shadow-none lg:static lg:block z-40  max-w-[80%]`}
            style={{ top: `${headerHeight}px` }}
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-12 text-center lg:text-left font-semibold text-lg md:text-xl py-4 lg:py-0">
              {navbarButtons.map((button) =>
                <li key={button}>
                  <button
                    name={button.replace(/ /g, '')}
                    onClick={() => {
                      if (button === "Home") {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      } else {
                        const sectionId = button.replace(/ /g, "");
                        const section = document.getElementById(sectionId);
                        if (section) {
                          const yOffset = -100;
                          const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                          window.scrollTo({ top: y, behavior: "smooth" });
                        }
                      }
                      setIsOpen(false);
                    }}
                    className="text-ncvColor-blue hover:text-ncvColor-orange transition px-4 py-2 block"
                  >
                    {button}
                  </button>
                </li>)}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

