import { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
const logoPath = '/lovable-uploads/951e0319-0db8-4874-93aa-5a2b584aad6a.png';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height plus some padding
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  return <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <button onClick={() => scrollToSection('sobre')} className="font-medium hover:text-sertao-green transition-colors">
            O Programa
          </button>
          <button onClick={() => scrollToSection('metodologia')} className="font-medium hover:text-sertao-green transition-colors">
            Metodologia
          </button>
          <button onClick={() => scrollToSection('beneficios')} className="font-medium hover:text-sertao-green transition-colors">
            Benefícios
          </button>
          <button onClick={() => scrollToSection('faq')} className="font-medium hover:text-sertao-green transition-colors">
            FAQ
          </button>
          <button onClick={() => scrollToSection('contato')} className="flex items-center gap-2 btn-primary">
            <Calendar className="h-5 w-5" />
            <span>Inscreva-se</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="p-2" aria-label="Abrir Menu">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && <div className="md:hidden bg-white absolute w-full shadow-md animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button onClick={() => scrollToSection('sobre')} className="p-2 text-left font-medium hover:bg-gray-100 rounded-lg">
              O Programa
            </button>
            <button onClick={() => scrollToSection('metodologia')} className="p-2 text-left font-medium hover:bg-gray-100 rounded-lg">
              Metodologia
            </button>
            <button onClick={() => scrollToSection('beneficios')} className="p-2 text-left font-medium hover:bg-gray-100 rounded-lg">
              Benefícios
            </button>
            <button onClick={() => scrollToSection('faq')} className="p-2 text-left font-medium hover:bg-gray-100 rounded-lg">
              FAQ
            </button>
            <button onClick={() => scrollToSection('contato')} className="btn-primary flex items-center justify-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>Inscreva-se</span>
            </button>
          </div>
        </div>}
    </nav>;
};
export default Navbar;