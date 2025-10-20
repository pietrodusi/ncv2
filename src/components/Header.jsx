import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "./ui/Button"
import logo from '../public/LOGO DEFINITIVO-03.png';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Home", href: "home" },
    { label: "Chi siamo", href: "chi-siamo" },
    { label: "Servizi", href: "servizi" },
    { label: "Il nostro team", href: "team" },
    { label: "Contatti", href: "contatti" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ease-in-out ${isScrolled || isMobileMenuOpen ? "duration-700 bg-background/95 backdrop-blur-md shadow-md drop-shadow-md" : "duration-200 bg-transparent "}}  
      `}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a onClick={() => document.getElementById("home").scrollIntoView()} className="flex items-center gap-2 group">
            <div className={`relative w-34 ${isScrolled || isMobileMenuOpen ? "md:ml-40" : "md:w-150 md:pt-50 md:mt-30 w-80 mt-30 drop-shadow-[0_0_30px_rgba(0,44,60,0.9)]"} transition-all duration-400 ease-in-out`}>
              <img src={logo} alt="NCV Logo" className="w-full h-full object-contain " />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.href}
                onClick={() => document.getElementById(item.href).scrollIntoView()}
                className={`text-lg font-medium transition-colors relative group text-ncvColor-grey hover:cursor-pointer ${isScrolled ? "hover:text-primary" : "text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.8),0_0_20px_rgba(0,0,0,0.6)]"}`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ncvColor-orange transition-all group-hover:w-full" />
              </a>
            ))}
            {/* <Button size="sm" className="bg-accent hover:bg-accent-light text-white">
              Prenota visita
            </Button> */}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#002c66] hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {
          isMobileMenuOpen && (
            <nav className="md:hidden py-4 border-t border-surface-dark">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    onClick={() => {
                      setIsMobileMenuOpen(false)
                      document.getElementById(item.href).scrollIntoView()
                    }}
                    className="text-sm font-medium text-[#002c66] hover:text-primary transition-colors py-2"
                  >
                    {item.label}
                  </a>
                ))}
                {/* <Button size="sm" className="bg-accent hover:bg-accent-light text-white w-full">
                Prenota visita
              </Button> */}
              </div>
            </nav>
          )
        }
      </div >
    </header >
  )
}
