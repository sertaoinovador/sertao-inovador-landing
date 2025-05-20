import { Star } from 'lucide-react';
import wahdwaniLogo from "../../public/lovable-uploads/wadhwani-logo.png"
const About = () => {
  return <section id="sobre" className="container-section bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">
          O Programa <span className="text-sertao-green">SerTão Inovador</span>
        </h2>
        
        <p className="section-subheading">
          Impulsionando a inovação de Pernambuco
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          <div className="space-y-6">
            <div className="bg-sertao-light rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold mb-4 text-sertao-green">O que é?</h3>
              <p className="text-gray-700 mb-6">
                O <strong>SerTão Inovador</strong> é um programa completo de pré-incubação para 
                empreendedores do semiárido pernambucano que desejam transformar suas ideias 
                em negócios reais. Durante 13 semanas, você terá acesso gratuito a:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-sertao-green mt-1 mr-2 flex-shrink-0" />
                  <span>Mentorias especializadas com empreendedores experientes</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-sertao-green mt-1 mr-2 flex-shrink-0" />
                  <span>Acesso ao Laboratório Maker com equipamentos de prototipagem</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-sertao-green mt-1 mr-2 flex-shrink-0" />
                  <span>Metodologia internacional reconhecida para validar seu negócio</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-sertao-green mt-1 mr-2 flex-shrink-0" />
                  <span>Networking com investidores e empreendedores regionais</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-sertao-light rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold mb-4 text-sertao-green">Para quem?</h3>
              <p className="text-gray-700 mb-4">
                O programa é ideal para empreendedores em fase inicial, que estão na etapa de 
                ideação ou validação de seu negócio. Você não precisa ter CNPJ ou experiência 
                prévia - apenas uma ideia que resolva problemas reais do semiárido brasileiro.
              </p>
              <p className="text-gray-700">
                Buscamos pessoas comprometidas, com disponibilidade para dedicar tempo ao desenvolvimento
                do seu negócio e participar ativamente dos encontros semanais.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="flex flex-col items-center justify-center">
                <div className="mb-6 text-center">
                  <h3 className="text-xl font-medium mb-2 text-gray-700">Metodologia de classe mundial com</h3>
                  <img src={wahdwaniLogo} alt="Wadhwani Foundation Logo" className="h-16 object-contain mx-auto" />
                </div>
                
                <div className="w-full h-px bg-gray-200 my-4"></div>
                
                <p className="text-gray-700 text-center">
                  A <strong>Wadhwani Foundation</strong> é uma organização global com presença em mais de 
                  20 países, dedicada a acelerar o desenvolvimento econômico por meio do empreendedorismo 
                  e da inovação. No SerTão Inovador, eles fornecem a metodologia e os recursos pedagógicos
                  para ajudar você a construir um negócio com base sólida e escalável.
                </p>
              </div>
            </div>
            
            <div className="bg-sertao-green text-white rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Principais diferenciais</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="bg-white bg-opacity-20 rounded-full p-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>100% gratuito e equity-free (sem participação societária)</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-white bg-opacity-20 rounded-full p-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Acesso ao Laboratório Maker (impressoras 3D, corte a laser)</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-white bg-opacity-20 rounded-full p-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Créditos em nuvem (AWS, Zoho) para seu negócio</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-white bg-opacity-20 rounded-full p-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Apresentação para investidores no Demoday final</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;