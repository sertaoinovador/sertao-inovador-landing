import { LightbulbIcon, CircleCheckIcon, CircleDollarSign, CirclePercent, ArrowRight } from 'lucide-react';
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
const StartupInfo = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="startup" className="container-section bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">
          Ideias que Crescem Rápido: <span className="text-sertao-green">entenda o que é uma Startup</span>
        </h2>
        
        <p className="section-subheading">
          Startup é um negócio ainda pequeno que nasce para resolver um problema de modo inovador e pode crescer muito sem multiplicar os custos na mesma velocidade.
          Pense em plantar uma semente de ideia: se ela for boa, rapidamente vira uma árvore frutífera para muita gente.
        </p>

        {/* Exemplos Pernambucanos */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-center mb-8">Exemplos Pernambucanos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Prol Educa — Educação</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">Bolsa de estudo até 80% para quem não consegue pagar mensalidade.</p>
                <p className="text-gray-600 italic">Mostra que inovação também é inclusão social.</p>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">AICury — Saúde</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">App com IA que acompanha feridas cirúrgicas e evita infecções.</p>
                <p className="text-gray-600 italic">Exemplo de como tecnologia melhora a vida das pessoas.</p>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Pluvi — Sustentabilidade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">Sistema que capta água da chuva e a torna potável sem químicos.</p>
                <p className="text-gray-600 italic">Prova de que é possível lucrar cuidando do meio ambiente.</p>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">PetLife — Saúde Animal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">Plataforma que integra histórico veterinário, vacinas e adoção, ligando tutores, clínicas e prefeituras.</p>
                <p className="text-gray-600 italic">Demonstra que o Sertão também gera soluções tech para o bem-estar dos pets.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Ideias que você pode desenvolver */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Ideias que Você Pode Desenvolver (mas não limitado...)</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm text-center hover:bg-gray-100 transition-colors">
              <LightbulbIcon className="w-12 h-12 text-sertao-green mx-auto mb-3" />
              <h4 className="font-semibold">AgTech</h4>
              <p className="text-sm text-gray-600">Sensores para agricultura de precisão</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm text-center hover:bg-gray-100 transition-colors">
              <LightbulbIcon className="w-12 h-12 text-sertao-green mx-auto mb-3" />
              <h4 className="font-semibold">EdTech</h4>
              <p className="text-sm text-gray-600">Plataformas de ensino on-line</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm text-center hover:bg-gray-100 transition-colors">
              <LightbulbIcon className="w-12 h-12 text-sertao-green mx-auto mb-3" />
              <h4 className="font-semibold">FinTech</h4>
              <p className="text-sm text-gray-600">Meios de pagamento digitais</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm text-center hover:bg-gray-100 transition-colors">
              <LightbulbIcon className="w-12 h-12 text-sertao-green mx-auto mb-3" />
              <h4 className="font-semibold">HealthTech</h4>
              <p className="text-sm text-gray-600">Telemedicina e monitoramento de saúde</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm text-center hover:bg-gray-100 transition-colors">
              <LightbulbIcon className="w-12 h-12 text-sertao-green mx-auto mb-3" />
              <h4 className="font-semibold">CleanTech</h4>
              <p className="text-sm text-gray-600">Soluções de energia e água sustentáveis</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm text-center hover:bg-gray-100 transition-colors">
              <LightbulbIcon className="w-12 h-12 text-sertao-green mx-auto mb-3" />
              <h4 className="font-semibold">IoT & Smart Cities</h4>
              <p className="text-sm text-gray-600">Automação de casas e espaços públicos</p>
            </div>
          </div>
        </div>

        {/* Por que vale a pena */}
        <div className="mt-16 bg-gray-50 p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold mb-6 text-center">Por que Vale a Pena</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <CircleCheckIcon className="w-6 h-6 text-sertao-green mt-1 mr-3 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Impacto rápido</h4>
                <p className="text-gray-600">Resolva um problema que afeta muita gente.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CircleDollarSign className="w-6 h-6 text-sertao-green mt-1 mr-3 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Crescimento escalável</h4>
                <p className="text-gray-600">Comece local, alcance o mundo.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CirclePercent className="w-6 h-6 text-sertao-green mt-1 mr-3 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Apoio do ecossistema</h4>
                <p className="text-gray-600">Mentorias, Laboratório Maker, Wadhwani Foundation.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CircleCheckIcon className="w-6 h-6 text-sertao-green mt-1 mr-3 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Realização pessoal</h4>
                <p className="text-gray-600">Transforme paixão em carreira de alto impacto.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Button variant="secondary" size="lg" className="rounded-xl" onClick={scrollToContact}>
              Quero testar minha ideia
              <ArrowRight className="ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default StartupInfo;