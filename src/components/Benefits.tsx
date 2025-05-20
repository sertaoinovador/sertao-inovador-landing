
import { Plus, Image, Clock, Calendar } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Image className="h-10 w-10 text-white" />,
      title: "Espaço Maker",
      description: "Acesso a equipamentos de prototipagem, impressoras 3D, cortadora a laser e toda a infraestrutura para desenvolver seu produto."
    },
    {
      icon: <Plus className="h-10 w-10 text-white" />,
      title: "Créditos em nuvem",
      description: "Receba créditos em plataformas como AWS e Zoho para desenvolver sua solução sem custos iniciais."
    },
    {
      icon: <Clock className="h-10 w-10 text-white" />,
      title: "Mentorias especializadas",
      description: "Sessões de mentoria com especialistas em empreendedorismo, tecnologia, marketing e vendas para acelerar seu crescimento."
    },
    {
      icon: <Calendar className="h-10 w-10 text-white" />,
      title: "Demoday com investidores",
      description: "Apresente seu negócio a investidores e parceiros potenciais no evento de encerramento do programa."
    }
  ];

  return (
    <section id="beneficios" className="container-section relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">
          <span className="text-sertao-green">Benefícios</span> & Diferenciais
        </h2>
        
        <p className="section-subheading">
          O que você ganha ao participar do SerTão Inovador
        </p>
        
        {/* Background decoration */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-sertao-green rounded-full opacity-10 blur-3xl -z-10"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-sertao-blue rounded-full opacity-10 blur-3xl -z-10"></div>

        {/* Benefit Cards */}
        <div className="grid md:grid-cols-2 gap-8 relative z-10 mt-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 flex flex-col h-full transition-transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="bg-gradient-to-br from-sertao-green to-sertao-blue p-6">
                <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center">
                  {benefit.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Key Differentials */}
        <div className="bg-gradient-to-br from-sertao-green to-sertao-blue text-white rounded-xl p-8 mt-12 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-1">Programa 100% Gratuito</h3>
            <p className="text-white/80">Sem mensalidade e sem participação acionária (equity-free)</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-5 text-center">
              <div className="font-bold text-3xl">100%</div>
              <div>Gratuito</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-5 text-center">
              <div className="font-bold text-3xl">0%</div>
              <div>Equity</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-5 text-center">
              <div className="font-bold text-3xl">13</div>
              <div>Semanas</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-5 text-center">
              <div className="font-bold text-3xl">∞</div>
              <div>Possibilidades</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
