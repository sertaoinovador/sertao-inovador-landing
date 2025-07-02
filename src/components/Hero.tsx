import { Calendar } from 'lucide-react';
import heroBackground from "../../public/lovable-uploads/bg-img.png"
import { CiViewList } from "react-icons/ci";
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
              <span>Inscreva-se Agora </span>
            </button>
            
            <a href="#sobre" className="btn-secondary text-lg flex items-center justify-center">
              Saiba Mais
            </a>
          </div>
          
          <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-xl p-4 mt-6 shadow-lg">
            <div className="text-center">
              <p className="text-lg font-bold text-sertao-green">Inscrições até 09/06/2025</p>
              <p className="text-gray-700">Início: 07/07/2025 • Demoday: 29/09/2025</p>
            </div>
          </div>
        </div>

      {/*Resultado */}
      <section className="relative mt-8">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto text-center">
                <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-4 mt-6 shadow-lg">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-sertao-green">
                      Resultado Preliminar já Disponível!
                    </h3>
                  </div>
                  <p className="text-md text-gray-600 mb-6 leading-relaxed">
                    Confira agora o resultado preliminar do processo seletivo do SerTão Inovador
                  </p>
                  <a target='_blank'
                    href="https://ifsertaope.edu.br/wp-content/uploads/2025/05/Resultado_preliminar.pdf"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-normal px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-md"
                  >

                    <CiViewList className='h-6 w-6 text-sm'/> Confira aqui!
                  </a>
                </div>
              </div>
            </div>
          </section>
      {/*Fim resultado */}
      
      </div>
      
      

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
    </div>;
};
export default Hero;