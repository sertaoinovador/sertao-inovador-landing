
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqItems: FAQItem[] = [
    {
      question: "Quem pode participar?",
      answer: "Qualquer pessoa interessada em empreendedorismo no semiárido pernambucano pode participar. O programa é ideal para empreendedores em fase de ideação ou validação inicial. Não é necessário ter um negócio formalizado ou CNPJ."
    },
    {
      question: "Preciso ter CNPJ?",
      answer: "Não, você não precisa ter CNPJ para participar. O programa é voltado justamente para ajudar empreendedores desde a fase inicial, antes mesmo da formalização do negócio."
    },
    {
      question: "É realmente gratuito?",
      answer: "Sim, o programa é 100% gratuito. Não há taxas de inscrição, mensalidades ou qualquer tipo de cobrança durante ou após o programa. Também não solicitamos participação acionária (equity) nas empresas criadas."
    },
    {
      question: "Qual o nível de conhecimento técnico exigido?",
      answer: "Não é necessário conhecimento técnico prévio. O programa é desenhado para pessoas com diferentes backgrounds, e fornecemos todo o suporte necessário durante a jornada. O mais importante é ter uma ideia ou problema que deseja resolver."
    },
    {
      question: "Como será o formato (online x presencial)?",
      answer: "O programa será 100% online. Todo o conteúdo, mentorias e atividades serão realizadas remotamente, permitindo que você participe de qualquer lugar com acesso à internet. Isso facilita a participação sem necessidade de deslocamento ou custos adicionais com transporte."
    },
    {
      question: "Posso participar se minha ideia ainda não está bem definida?",
      answer: "Sim! Um dos objetivos do programa é justamente ajudar a refinar e desenvolver ideias desde o estágio inicial. Nossa metodologia vai guiá-lo pelo processo de identificação de problemas e geração de soluções."
    },
    {
      question: "Quantas pessoas da minha equipe podem participar?",
      answer: "Recomendamos a participação de até 3 pessoas por projeto/equipe, mas não há limite rígido. Os recursos e mentorias são disponibilizados por projeto, independentemente do tamanho da equipe."
    }
  ];
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="container-section bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading">
          Perguntas <span className="text-sertao-green">Frequentes</span>
        </h2>
        
        <p className="section-subheading">
          Tudo o que você precisa saber sobre o programa SerTão Inovador
        </p>
        
        <div className="mt-12 space-y-4">
          {faqItems.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200"
            >
              <button
                className="flex justify-between items-center w-full text-left p-6"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                <div className={`transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sertao-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div 
                className={`
                  overflow-hidden transition-all duration-300 ease-in-out
                  ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                `}
              >
                <div className="p-6 pt-0 text-gray-600 border-t border-gray-100">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
