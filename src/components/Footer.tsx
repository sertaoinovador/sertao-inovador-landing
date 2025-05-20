import { Calendar } from 'lucide-react';
import qrCodeImage from "../../public/lovable-uploads/qrcode.png"
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer id="contato" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Contact and CTA */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para transformar sua ideia em um negócio?
            </h2>
            
            <p className="text-gray-300 mb-8">Inscreva-se agora e faça parte do programa SerTão Inovador. Transforme sua ideia em um negócio de sucesso com nossa metodologia comprovada e suporte especializado.
Link do edital: https://ifsertaope.edu.br/editais/edital-no-58-2025/</p>
            
            <div className="space-y-6">
              <a href="https://forms.gle/6U24wx69YByzHL3KA" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Inscreva-se já</span>
              </a>

              <div className="pt-4 space-y-4">
                <p className="text-xl font-semibold">Entre em contato</p>
                <div className="space-y-2 text-gray-300">
                  <p className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:isa@ifsertao-pe.edu.br">isa@ifsertao-pe.edu.br</a>
                  </p>
                  <p className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>(81) 99838-6191</span>
                  </p>
                </div>

                <div className="pt-4">
                  <p className="font-medium mb-3">Siga-nos nas redes sociais</p>
                  <div className="flex space-x-4">
                    <a href="https://www.instagram.com/incubadora_sertaomaker/" target="_blank" rel="noopener noreferrer" className="hover:text-sertao-green transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* QR Code and address */}
          <div className="flex flex-col items-center">
            <div className="bg-white p-4 rounded-xl shadow-lg mx-auto">
              <img src={qrCodeImage} alt="QR Code para inscrição" className="w-48 h-48 object-cover" />
              <p className="text-black text-center mt-2 text-sm font-medium">
                Acesse a página de inscrições pelo QR Code
              </p>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-300 mb-2">
                <strong>IF Sertão Pernambucano</strong><br />
                R. Aristarco Lopes, 240 - Centro<br />
                Petrolina - PE, 56302-100
              </p>
            </div>
          </div>
        </div>

        <hr className="border-gray-800 my-12" />

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 SerTão Inovador. Todos os direitos reservados.
          </p>

          <button onClick={scrollToTop} className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors" aria-label="Voltar ao topo">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>;
};
export default Footer;