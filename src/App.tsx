import React from "react";
import {
  Brain,
  Heart,
  User,
  Video,
  Sparkles,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";

const WHATSAPP_NUMBER = "5511990157588";
const WHATSAPP_MESSAGE =
  "Ola, Este é um teste para voce ver o funcionamento da ferramenta, Obrigado ! ^^'.";

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

// --- Componentes Auxiliares ---

const StatCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
    <div className="bg-emerald-50 p-3 rounded-full mb-4 text-emerald-600">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-1">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const ServiceCard = ({
  icon: Icon,
  title,
  subtitle,
  description,
}: {
  icon: any;
  title: string;
  subtitle?: string;
  description: string;
}) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
    <div className="bg-emerald-50 p-4 rounded-xl mb-6 text-emerald-600">
      <Icon size={32} />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
    {subtitle && (
      <span className="text-emerald-600 text-sm font-semibold mb-2 block">
        {subtitle}
      </span>
    )}
    <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
  </div>
);

// --- Componente Principal ---

function App() {
  return (
    <div className="min-h-screen text-gray-800">
      {/* SEÇÃO 1: HERO */}
      <section className="relative pt-20 pb-16 px-4 flex flex-col items-center justify-center bg-gradient-to-b from-white to-emerald-50/30">
        <div className="relative mb-8 group">
          <div className="absolute inset-0 bg-emerald-200 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
            {/* FOTO DE PERFIL - Coloque sua foto na pasta public */}
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400"
              alt="Dra. Elena Costa"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-emerald-950 mb-2 text-center">
          Dra. Elena Costa
        </h1>
        <p className="text-emerald-600 font-medium tracking-wide text-sm mb-8 uppercase">
          CRP 06/12345
        </p>

        <div className="max-w-2xl text-center space-y-4 mb-10">
          <h2 className="text-3xl md:text-4xl text-gray-800 leading-tight">
            Recupere seu equilíbrio <br />
            <span className="italic text-emerald-700">emocional</span> e
            qualidade de vida.
          </h2>
          <p className="text-gray-600 text-lg md:px-8">
            Atendimento psicológico online especializado em ansiedade e
            desenvolvimento pessoal. Um espaço seguro para você ser ouvido.
          </p>
        </div>

        {/* Botão CTA (Call to Action) - AGORA COM WHATSAPP */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-emerald-200/50 transition-all transform hover:scale-105"
        >
          <MessageCircle size={20} />
          Agendar Sessão Online
        </a>
      </section>

      {/* SEÇÃO 2: SOBRE MIM */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-emerald-500 font-bold tracking-widest text-xs uppercase mb-4 block">
            Sobre Mim
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-950 mb-8">
            Uma abordagem acolhedora e <br className="hidden md:block" />{" "}
            baseada em evidências
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 mb-16 leading-relaxed">
            Sou psicóloga clínica com 5 anos de experiência em Terapia Cognitivo
            Comportamental. Ajudo pessoas a lidarem com a ansiedade moderna e a
            construírem relacionamentos mais saudáveis consigo mesmas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard
              icon={Brain}
              title="TCC"
              description="Terapia Cognitivo Comportamental"
            />
            <StatCard
              icon={Heart}
              title="5 Anos"
              description="De experiência clínica"
            />
            <StatCard
              icon={User}
              title="100%"
              description="Atendimento online"
            />
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: SERVIÇOS */}
      <section className="py-20 px-4 bg-emerald-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-emerald-500 font-bold tracking-widest text-xs uppercase mb-4 block">
              Serviços
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-950">
              Como posso te ajudar
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={Video}
              title="Terapia Online"
              description="Atendimento seguro por videochamada, no conforto da sua casa e com total sigilo."
            />
            <ServiceCard
              icon={Brain}
              title="Ansiedade e Estresse"
              description="Ferramentas práticas para o dia a dia e técnicas comprovadas cientificamente."
            />
            <ServiceCard
              icon={Sparkles}
              title="Autoconhecimento"
              description="Entenda seus padrões de pensamento e evolua como pessoa em sua jornada."
            />
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="#"
              className="p-3 bg-gray-50 rounded-full text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-50 rounded-full text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-50 rounded-full text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>

          <p className="text-gray-500 text-sm mb-2">
            © 2026 Dra. Elena Costa – Psicóloga CRP 06/12345
          </p>
          <p className="text-gray-400 text-xs">Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Botão Flutuante do WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-110 z-50 flex items-center justify-center"
        title="Fale comigo no WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}

export default App;
