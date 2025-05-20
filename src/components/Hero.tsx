import { Calendar } from 'lucide-react';
import heroBackground from "../../public/lovable-uploads/bg-img.png"
const logoPath = '/lovable-uploads/951e0319-0db8-4874-93aa-5a2b584aad6a.png';
const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full bg-cover bg-center z-0" style={{
      backgroundImage: `url(${heroBackground})`
    }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center py-20">
        <div className="flex flex-col items-center justify-center space-y-6 max-w-4xl mx-auto">
          
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-md text-center">













Transforme suas ideias em inovação</h1>
          
          <p className="text-xl md:text-2xl text-white opacity-90 drop-shadow max-w-2xl">Programa 100% gratuito de pré-incubação</p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
            <button onClick={scrollToContact} className="btn-primary flex items-center justify-center gap-2 text-lg">
              <Calendar className="h-5 w-5" />
              <span>Inscreva-se Agora</span>
            </button>
            
            <a href="#sobre" className="btn-secondary text-lg flex items-center justify-center">
              Saiba Mais
            </a>
          </div>
          
          <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-xl p-4 mt-6 shadow-lg">
            <div className="text-center">
              <p className="text-lg font-bold text-sertao-green">Inscrições até 06/06/2025</p>
              <p className="text-gray-700">Início: 07/07/2025 • Demoday: 29/09/2025</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
    </div>;
};
export default Hero;