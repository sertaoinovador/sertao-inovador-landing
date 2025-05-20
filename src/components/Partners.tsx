
import isaLogo from "../../public/lovable-uploads/isa.png";
import wadhwaniLogo from "../../public/lovable-uploads/wadhwani2.png";
import sertaoMakerLogo from "../../public/lovable-uploads/sertao-maker.png";
import propipLogo from "../../public/lovable-uploads/propip.png";
import ifLogo from "../../public/lovable-uploads/if-sertao.png";
import facepeLogo from "../../public/lovable-uploads/facepe.png";

// New sponsor logos
import prefeituraLogo from "../../public/lovable-uploads/prefeitura.png";
import zohoLogo from "../../public/lovable-uploads/zoho.png";
import awsLogo from "../../public/lovable-uploads/aws.png";
import sicrediLogo from "../../public/lovable-uploads/sicredi.png";
import sudeneLogo from "../../public/lovable-uploads/sudene.png"
import ministerioLogo from "../../public/lovable-uploads/ministerio-logo.png";

const Partners = () => {
  return <section className="container-section bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">
          Parceiros & <span className="text-sertao-green">Patrocinadores</span>
        </h2>
        
        <p className="section-subheading">
          Conheça as instituições que tornam o SerTão Inovador possível
        </p>

        {/* Partner Categories */}
        <div className="space-y-12 mt-12">
          {/* Main Partner */}
          <div className="bg-sertao-light p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-center mb-6">Metodologia</h3>
            <div className="flex justify-center">
              <div className="w-3/4 md:w-1/3 p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
                <img alt="Wadhwani Foundation Logo" className="h-24 object-contain" src={wadhwaniLogo} />
              </div>
            </div>
          </div>
          
          {/* Realizadores */}
          <div>
            <h3 className="text-xl font-semibold text-center mb-6">Realização e Execução</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center aspect-video">
                <img src={isaLogo} alt="ISA - Incubadora do Semiárido Logo" className="max-h-16 object-contain" />
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center aspect-video">
                <img src={sertaoMakerLogo} alt="Incubadora Sertão Maker Logo" className="max-h-16 object-contain" />
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center aspect-video">
                <img src={propipLogo} alt="PROPIP - Instituto Federal do Sertão Pernambucano Logo" className="max-h-16 object-contain" />
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center aspect-video">
                <img src={ifLogo} alt="Instituto Federal Sertão Pernambucano Logo" className="max-h-16 object-contain" />
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center aspect-video">
                <img src={facepeLogo} alt="FACEPE Logo" className="max-h-16 object-contain" />
              </div>
            </div>
          </div>
          
          {/* Patrocinadores */}
          <div>
            <h3 className="text-xl font-semibold text-center mb-6">Apoiadores e Patrocinadores</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="p-3 bg-white rounded-lg shadow-sm flex items-center justify-center aspect-video">
                <img src={prefeituraLogo} alt="Prefeitura de Salgueiro Logo" className="max-h-12 object-contain" />
              </div>
              <div className="p-3 bg-white rounded-lg shadow-sm flex items-center justify-center aspect-video">
                <img src={zohoLogo} alt="Zoho Logo" className="max-h-12 object-contain" />
              </div>
              <div className="p-3 bg-white rounded-lg shadow-sm flex items-center justify-center aspect-video">
                <img src={awsLogo} alt="AWS Logo" className="max-h-12 object-contain" />
              </div>
              <div className="p-3 bg-white rounded-lg shadow-sm flex items-center justify-center aspect-video">
                <img src={sicrediLogo} alt="Sicredi Logo" className="max-h-12 object-contain" />
              </div>
              <div className="p-3 bg-white rounded-lg shadow-sm flex items-center justify-center aspect-video">
                <img src={sudeneLogo} alt="Sudene Logo" className="max-h-12 object-contain" />
              </div>
              <div className="p-3 bg-white rounded-lg shadow-sm flex items-center justify-center aspect-video">
                <img src={ministerioLogo} alt="Ministério do Empreendedorismo Logo" className="max-h-12 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Partners;
