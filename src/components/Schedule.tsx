
import { Calendar, Clock, Users, Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Schedule = () => {
  const scheduleData = [
    {
      phase: "INSCRIÇÕES E SELEÇÃO",
      icon: Users,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      items: [
        {
          title: "Período de inscrições",
          start: "16/05/2025",
          end: "09/06/2025"
        },
        {
          title: "Avaliação e seleção",
          start: "10/06/2025",
          end: "27/06/2025"
        },
        {
          title: "Divulgação do resultado preliminar",
          start: "01/07/2025",
          end: "01/07/2025"
        },
        {
          title: "Prazo de recursos",
          start: "02/07/2025",
          end: "03/07/2025"
        },
        {
          title: "Divulgação do resultado final",
          start: "04/07/2025",
          end: "04/07/2025"
        }
      ]
    },
    {
      phase: "CAPACITAÇÃO EMPREENDEDORA",
      icon: Trophy,
      color: "from-teal-500 to-teal-500",
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600",
      items: [
        {
          title: "Atividades de capacitação empreendedora e mentorias",
          start: "14/07/2025",
          end: "03/10/2025"
        },
        {
          title: "Demoday de apresentação das soluções",
          start: "06/10/2025",
          end: "10/10/2025"
        }
      ]
    }
  ];

  return (
    <section id="cronograma" className="py-10 bg-gradient-to-br from-gray-10 to-white-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Cronograma tentativo do SerTão Inovador - <span className="text-green-800">2025</span>
          </h2>
        </div>

        <div className="space-y-16">
          {scheduleData.map((phase, phaseIndex) => {
            const IconComponent = phase.icon;
            return (
              <div key={phaseIndex} className="relative">
                <div className="flex items-center justify-center md:justify-start mb-10">
                  <div className={`${phase.bgColor} p-5 rounded-2xl mr-4 shadow-lg`}>
                    <IconComponent className={`h-10 w-10 ${phase.iconColor}`} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center md:text-left">{phase.phase}</h3>
                </div>
                
                <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6">
                  {phase.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="hover:shadow-xl transition-all duration-300 border-0 bg-white rounded-2xl overflow-hidden group hover:scale-[1.02]">
                      <div className={`h-2 bg-gradient-to-r ${phase.color} transition-all duration-300 group-hover:h-3`}></div>
                      <CardHeader className="pb-4 px-6 pt-6">
                        <CardTitle className="text-lg font-semibold text-gray-900 leading-tight min-h-[3rem] flex items-center">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="px-6 pb-6">
                        <div className="space-y-3">
                          <div className="flex items-center text-sm text-gray-600 bg-green-50 p-3 rounded-xl">
                            <Calendar className="h-4 w-4 mr-3 text-green-600 flex-shrink-0" />
                            <div className="flex flex-col sm:flex-row sm:items-center">
                              <span className="font-semibold text-green-700 mr-1">Início:</span>
                              <span className="text-gray-700">{item.start}</span>
                            </div>
                          </div>
                          <div className="flex items-center text-sm text-gray-600 bg-red-50 p-3 rounded-xl">
                            <Clock className="h-4 w-4 mr-3 text-red-600 flex-shrink-0" />
                            <div className="flex flex-col sm:flex-row sm:items-center">
                              <span className="font-semibold text-red-700 mr-1">Término:</span>
                              <span className="text-gray-700">{item.end}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                {/* Timeline connector */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
