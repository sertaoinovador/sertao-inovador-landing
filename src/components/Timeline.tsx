
const modules = [
  {
    module: "Módulo 0",
    title: "Orientação em Empreendedorismo",
    date: "Semana 1 (07/07)",
    description: "Introdução ao programa e aos conceitos básicos de empreendedorismo."
  },
  {
    module: "Módulo 1",
    title: "Identificação do Problema",
    date: "Semana 2 (14/07)",
    description: "Aprenda a identificar problemas reais que podem ser convertidos em oportunidades de negócio."
  },
  {
    module: "Módulo 2",
    title: "Identificação de Clientes & Validação",
    date: "Semana 3 (21/07)",
    description: "Descubra quem são seus potenciais clientes e como validar suas hipóteses junto a eles."
  },
  {
    module: "Módulo 3",
    title: "Geração de Ideias",
    date: "Semana 4 (28/07)",
    description: "Técnicas e ferramentas para gerar ideias inovadoras de produtos e serviços."
  },
  {
    module: "Módulo 4",
    title: "Mapeamento de Oportunidades & Concorrência",
    date: "Semana 5 (04/08)",
    description: "Análise de mercado, concorrência e identificação de vantagens competitivas.",
    milestone: "Quiz & Marco 1"
  },
  {
    module: "Módulo 5",
    title: "Prototipagem & MVP",
    date: "Semana 6 (11/08)",
    description: "Como criar protótipos e produtos mínimos viáveis para testar sua solução."
  },
  {
    module: "Módulo 6",
    title: "Avaliação de Oportunidades – Viabilidade",
    date: "Semana 7 (18/08)",
    description: "Análise de viabilidade técnica, econômica e mercadológica do seu negócio.",
    milestone: "Quiz & Marco 2"
  },
  {
    module: "Módulo 7",
    title: "Modelagem de Negócios",
    date: "Semana 8 (25/08)",
    description: "Construção de um modelo de negócios sustentável usando a metodologia Canvas."
  },
  {
    module: "Módulo 8",
    title: "Marketing & Estratégia de Vendas",
    date: "Semana 9 (01/09)",
    description: "Estratégias de marketing, precificação e canais de venda para sua solução.",
    milestone: "Quiz & Marco 3"
  },
  {
    module: "Módulo 9",
    title: "Gestão Financeira",
    date: "Semana 10 (08/09)",
    description: "Fundamentos de gestão financeira, projeções e indicadores para startups."
  },
  {
    module: "Módulo 10",
    title: "Requisitos de Equipe & Talento",
    date: "Semana 11 (15/09)",
    description: "Como montar e gerir uma equipe de alto desempenho para seu negócio."
  },
  {
    module: "Módulo 11",
    title: "Orientação para Escalabilidade",
    date: "Semana 12 (22/09)",
    description: "Estratégias e caminhos para escalar seu negócio após a validação."
  },
  {
    module: "Módulo 12",
    title: "Preparação para Pitch",
    date: "Semana 13 (29/09)",
    description: "Como preparar e apresentar um pitch eficaz para investidores e parceiros."
  }
];

const Timeline = () => {
  return (
    <section id="metodologia" className="container-section bg-gray-50 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">
          Metodologia <span className="text-sertao-green">SerTão Inovador</span>
        </h2>
        
        <p className="section-subheading">
          Jornada de 13 semanas para transformar sua ideia em um negócio inovador
        </p>
        
        <div className="relative pl-8 md:pl-0 mt-16">
          {/* Timeline line for mobile */}
          <div className="timeline-line md:hidden h-[calc(100%-4rem)]"></div>
          
          <div className="grid md:grid-cols-3 gap-x-6 gap-y-12">
            {modules.map((item, index) => (
              <div key={index} className="relative">
                {/* Mobile timeline marker */}
                <div className="timeline-marker md:hidden top-6"></div>
                
                <div className={`
                  p-6 rounded-xl shadow-md h-full
                  ${index % 3 === 0 ? 'bg-sertao-green text-white' : 
                    index % 3 === 1 ? 'bg-white border border-gray-200' : 
                    'bg-sertao-blue text-white'}
                `}>
                  <div className="flex justify-between items-start mb-4">
                    <span className={`
                      text-sm font-semibold px-3 py-1 rounded-full
                      ${index % 3 === 0 ? 'bg-white text-sertao-green' : 
                        index % 3 === 1 ? 'bg-gray-100 text-gray-800' : 
                        'bg-white text-sertao-blue'}
                    `}>
                      {item.module}
                    </span>
                    <span className={`
                      text-sm
                      ${index % 3 === 0 || index % 3 === 2 ? 'text-white/80' : 'text-gray-500'}
                    `}>
                      {item.date}
                    </span>
                  </div>
                  
                  <h3 className={`
                    text-xl font-bold mb-3
                    ${index % 3 === 1 ? 'text-gray-800' : 'text-white'}
                  `}>
                    {item.title}
                  </h3>
                  
                  <p className={`
                    text-sm mb-4
                    ${index % 3 === 0 || index % 3 === 2 ? 'text-white/90' : 'text-gray-600'}
                  `}>
                    {item.description}
                  </p>
                  
                  {item.milestone && (
                    <div className={`
                      mt-auto text-sm font-medium px-3 py-1 rounded-full inline-block
                      ${index % 3 === 0 ? 'bg-white bg-opacity-30 text-white' : 
                        index % 3 === 1 ? 'bg-sertao-green bg-opacity-10 text-sertao-green' : 
                        'bg-white bg-opacity-30 text-white'}
                    `}>
                      {item.milestone}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold mb-4 text-center text-sertao-green">Calendário Resumido</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4 bg-sertao-light rounded-lg">
              <p className="font-semibold text-lg">Inscrições</p>
              <p className="text-xl font-bold text-sertao-green">até 06/06/2025</p>
            </div>
            <div className="p-4 bg-sertao-light rounded-lg">
              <p className="font-semibold text-lg">Início do programa</p>
              <p className="text-xl font-bold text-sertao-green">07/07/2025</p>
            </div>
            <div className="p-4 bg-sertao-light rounded-lg">
              <p className="font-semibold text-lg">Demoday</p>
              <p className="text-xl font-bold text-sertao-green">29/09/2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
