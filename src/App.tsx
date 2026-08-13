import React from 'react';
import { 
  Sparkles, 
  Medal, 
  Heart, 
  Flag, 
  TrendingUp, 
  Share2, 
  MessageSquare, 
  Users, 
  Award,
  Star,
  Mail,
  Phone,
  Instagram,
  Facebook,
  ExternalLink,
  Code,
  Megaphone,
  FileText,
  Layers,
  Lightbulb,
  CheckCircle,
  Target
} from 'lucide-react';

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <img 
        src="/logo.png" 
        onError={(e) => { e.currentTarget.src = "https://i.ibb.co/JjrJtDC/logo.png"; }}
        alt="Market Chic Logo" 
        className="w-10 h-10 object-contain rounded-full shadow-sm"
      />
      <span className="text-2xl font-bold text-gradient">
        Market Chic
      </span>
    </div>
  );
}

function ServiceCard({ title, description, icon: Icon, color }) {
  return (
    <div className="service-card card-hover bg-white rounded-2xl p-8 relative group border border-purple-50/60 shadow-sm hover:shadow-xl transition-all">
      <div className={`w-14 h-14 rounded-2xl bg-${color}-50 flex items-center justify-center mb-6 text-${color}-600 group-hover:scale-110 transition-transform`}>
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function PlanCard({ title, description, features, onSelect }) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all pricing-card border border-purple-50/60 flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-bold mb-3 text-gradient">{title}</h3>
        <p className="text-gray-600 text-sm mb-6">{description}</p>
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-sm">
              <span className="text-purple-600 mt-1 shrink-0">
                <Star className="w-4 h-4" />
              </span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={onSelect}
        className="w-full button-gradient bg-gradient-to-r from-purple-600 via-pink-500 to-emerald-500 text-white px-6 py-3.5 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all"
      >
        Elegir Plan
      </button>
    </div>
  );
}

function App() {
  const handlePlanSelection = (plan) => {
    const mailtoLink = `mailto:marketchicdr@gmail.com?subject=Solicitud de Plan: ${plan.title}&body=Hola, me interesa el plan "${plan.title}". Por favor, contáctenme para discutir los detalles.%0D%0A%0D%0AServicios incluidos:%0D%0A${plan.features.map(feature => `- ${feature}`).join('%0D%0A')}`;
    window.location.href = mailtoLink;
  };

  const plans = [
    {
      title: "Plan Básico",
      description: "Ideal para pequeñas empresas que están comenzando su presencia digital",
      features: [
        "Gestión de 2 redes sociales",
        "4 publicaciones semanales",
        "Diseño básico de contenido",
        "Reporte mensual de métricas",
        "Soporte por correo electrónico"
      ]
    },
    {
      title: "Plan Profesional",
      description: "Perfecto para empresas en crecimiento que buscan expandir su alcance",
      features: [
        "Gestión de 3 redes sociales",
        "8 publicaciones semanales",
        "Diseño profesional de contenido",
        "Estrategia de contenido personalizada",
        "Reporte quincenal de métricas",
        "Soporte prioritario"
      ]
    },
    {
      title: "Plan Empresarial",
      description: "Solución completa para empresas que buscan dominar su presencia digital",
      features: [
        "Gestión de todas las redes sociales",
        "Publicaciones diarias",
        "Diseño premium de contenido",
        "Estrategia integral de marketing",
        "Campañas publicitarias",
        "Reportes semanales personalizados",
        "Soporte 24/7"
      ]
    }
  ];

  const services = [
    {
      icon: TrendingUp,
      title: "Marketing Digital",
      description: "Estrategias personalizadas para aumentar tu presencia online.",
      color: "purple"
    },
    {
      icon: Code,
      title: "Desarrollo Web",
      description: "Creación de sitios web profesionales y optimizados para tu negocio.",
      color: "pink"
    },
    {
      icon: Share2,
      title: "Redes Sociales",
      description: "Gestión profesional de tus redes sociales.",
      color: "emerald"
    },
    {
      icon: Megaphone,
      title: "Campañas Publicitarias",
      description: "Diseño y ejecución de campañas publicitarias efectivas.",
      color: "purple"
    },
    {
      icon: FileText,
      title: "Content Manager",
      description: "Gestión y creación de contenido estratégico para tu marca.",
      color: "pink"
    },
    {
      icon: Layers,
      title: "Planes de Contenido",
      description: "Estrategias de contenido personalizadas para cada plataforma.",
      color: "emerald"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Logo />
          <nav className="hidden md:flex gap-6">
            {['inicio', 'nosotros', 'servicios', 'planes', 'contacto'].map((item) => (
              <a 
                key={item}
                href={`#${item}`} 
                className="nav-link text-gray-600 hover:text-purple-600 transition-colors text-sm font-medium"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-500 via-purple-600 to-purple-700 py-32 relative overflow-hidden text-white" id="inicio">
        <div className="absolute inset-0 bg-gradient-radial from-white/10 to-transparent pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl font-extrabold mb-6 text-white tracking-tight">
            Tu Aliado en Marketing Digital
          </h1>
          <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto font-normal">
            Transformamos tu presencia digital con estrategias innovadoras y resultados medibles
          </p>
          <a 
            href="#contacto"
            className="bg-white text-purple-700 hover:bg-purple-50 px-8 py-4 rounded-full font-bold shadow-xl inline-flex items-center gap-2 group transition-all transform hover:-translate-y-0.5"
          >
            Comenzar Ahora
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </section>

      {/* Nuestra Historia / About Us Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-purple-50/20 via-white to-pink-50/20" id="nosotros">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs font-semibold px-5 py-2 rounded-full uppercase tracking-wider inline-block shadow-sm">
              ACERCA DE NOSOTROS
            </span>
            <h2 className="text-4xl font-extrabold animate-text-gradient mt-4 mb-4">
              Nuestra Historia
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-base leading-relaxed">
              Somos una agencia de marketing que será tu amiga y aliada para el crecimiento de tu marca o empresa, 
              que estudia y propone las estrategias del marketing para alcanzar los objetivos deseados con la 
              innovación y creatividad.
            </p>
          </div>

          {/* Misión y Visión */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg shadow-purple-500/5 border border-purple-50/60 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 text-purple-600">
                <Flag className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-700">Nuestra Misión</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Potenciar el éxito digital de nuestros clientes a través de estrategias innovadoras y personalizadas, creando conexiones significativas entre marcas y sus audiencias.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg shadow-purple-500/5 border border-purple-50/60 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-pink-50 rounded-2xl flex items-center justify-center mb-6 text-pink-600">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-pink-700">Nuestra Visión</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ser la agencia líder en transformación digital en República Dominicana, reconocida por nuestra excelencia creativa, resultados medibles y compromiso con el éxito de nuestros clientes.
              </p>
            </div>
          </div>

          {/* Estrategias, Valores y Objetivos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Pilares */}
            <div className="bg-white rounded-3xl p-8 shadow-lg shadow-purple-500/5 border border-purple-50/60 space-y-6">
              <div>
                <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-3">
                  <Share2 className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-gray-800 text-sm mb-1">Estrategias Personalizadas</h4>
                <p className="text-xs text-gray-500">Soluciones adaptadas a cada cliente</p>
              </div>

              <div>
                <div className="w-10 h-10 bg-pink-50 rounded-xl flex items-center justify-center text-pink-600 mb-3">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-gray-800 text-sm mb-1">Resultados Medibles</h4>
                <p className="text-xs text-gray-500">Análisis detallado del desempeño</p>
              </div>

              <div>
                <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-3">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-gray-800 text-sm mb-1">Soporte Continuo</h4>
                <p className="text-xs text-gray-500">Atención personalizada 24/7</p>
              </div>
            </div>

            {/* Card 2: Nuestros Valores */}
            <div className="bg-white rounded-3xl p-8 shadow-lg shadow-purple-500/5 border border-purple-50/60">
              <h3 className="text-lg font-bold mb-6 text-purple-700 text-center">Nuestros Valores</h3>
              <div className="space-y-4 text-xs">
                <div className="bg-purple-50/50 p-4 rounded-2xl">
                  <h4 className="font-bold text-purple-700 mb-1">Innovación</h4>
                  <p className="text-gray-600">Buscamos constantemente nuevas formas de mejorar y crecer.</p>
                </div>
                <div className="bg-pink-50/50 p-4 rounded-2xl">
                  <h4 className="font-bold text-pink-700 mb-1">Transparencia</h4>
                  <p className="text-gray-600">Comunicación clara y honesta en todo momento.</p>
                </div>
                <div className="bg-emerald-50/50 p-4 rounded-2xl">
                  <h4 className="font-bold text-emerald-700 mb-1">Compromiso</h4>
                  <p className="text-gray-600">Dedicación total al éxito de nuestros clientes.</p>
                </div>
              </div>
            </div>

            {/* Card 3: Nuestros Objetivos */}
            <div className="bg-white rounded-3xl p-8 shadow-lg shadow-purple-500/5 border border-purple-50/60">
              <h3 className="text-lg font-bold mb-6 text-emerald-700 text-center">Nuestros Objetivos</h3>
              <div className="space-y-4 text-xs">
                <div className="bg-emerald-50/40 p-4 rounded-2xl text-gray-600 leading-relaxed">
                  Impulsar el crecimiento sostenible de nuestros clientes en el entorno digital.
                </div>
                <div className="bg-purple-50/40 p-4 rounded-2xl text-gray-600 leading-relaxed">
                  Crear estrategias innovadoras que generen resultados tangibles.
                </div>
                <div className="bg-pink-50/40 p-4 rounded-2xl text-gray-600 leading-relaxed">
                  Establecer relaciones duraderas basadas en la confianza y el éxito mutuo.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biografía de la Fundadora Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-emerald-500 text-white text-xs font-semibold px-5 py-2 rounded-full uppercase tracking-wider inline-block mb-4 shadow-sm">
            NUESTRA FUNDADORA
          </span>
          <h2 className="text-4xl font-extrabold animate-text-gradient mb-12">
            Biografía de la Fundadora
          </h2>

          <div className="relative w-64 h-64 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-emerald-400 p-1.5 shadow-xl animate-float">
              <img 
                src="/founder.jpg" 
                onError={(e) => { e.currentTarget.src = "https://i.ibb.co/2dLGr4M/C8562504-A74-F-4866-9-E08-2-B886078632-A-Original.jpg"; }}
                alt="Emily Y. Morales Nova - Fundadora Market Chic" 
                className="w-full h-full object-cover rounded-full border-4 border-white shadow-inner"
              />
            </div>
          </div>

          <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto font-normal">
            Conoce a la mente creativa detrás de Market Chic, una visionaria del marketing digital que está transformando la industria en República Dominicana. Con una sólida formación académica y años de experiencia en el campo, nuestra fundadora lidera con pasión y compromiso el crecimiento digital de nuestros clientes.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-purple-50/40 via-pink-50/40 to-emerald-50/40" id="servicios">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="bg-emerald-500 text-white text-xs font-semibold px-5 py-2 rounded-full uppercase tracking-wider inline-block mb-4 shadow-sm">
              NUESTROS SERVICIOS
            </span>
            <h2 className="text-4xl font-extrabold animate-text-gradient mb-4">
              Soluciones Digitales Completas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base">
              Ofrecemos una gama completa de servicios diseñados para impulsar tu presencia digital y alcanzar tus objetivos de negocio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-24 px-4 bg-white" id="planes">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs font-semibold px-5 py-2 rounded-full uppercase tracking-wider inline-block mb-4 shadow-sm">
              NUESTROS PLANES
            </span>
            <h2 className="text-4xl font-extrabold animate-text-gradient mb-4">
              Nuestros Planes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base">
              Selecciona el plan que mejor se adapte a tus necesidades y objetivos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <PlanCard
                key={index}
                {...plan}
                onSelect={() => handlePlanSelection(plan)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-white via-pink-50/30 to-purple-50/40 relative" id="contacto">
        <div className="max-w-6xl mx-auto text-center">
          <span className="bg-emerald-500 text-white text-xs font-semibold px-5 py-2 rounded-full uppercase tracking-wider inline-block mb-4 shadow-sm">
            CONTÁCTANOS
          </span>
          <h2 className="text-4xl font-extrabold animate-text-gradient mb-4">
            ¿Listo para Comenzar?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm mb-12">
            Agenda una consulta gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos digitales.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
            {/* Card 1: Información de Contacto */}
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-purple-500/5 border border-purple-50/50 hover:shadow-2xl transition-all">
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-gray-800">Correo Electrónico</h4>
                    <a href="mailto:marketchicdr@gmail.com" className="text-xs text-gray-500 hover:text-purple-600 transition-colors">
                      marketchicdr@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-gray-800">Teléfonos</h4>
                    <a href="tel:+18094278761" className="text-xs text-gray-500 block hover:text-purple-600 transition-colors">809-427-8761</a>
                    <a href="tel:+18293200032" className="text-xs text-gray-500 block hover:text-purple-600 transition-colors">829-320-0032</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-gray-800">WhatsApp</h4>
                    <a href="https://wa.me/message/SKONPMVANVZAA1" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-purple-600 transition-colors">
                      Envíanos un mensaje
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-gray-800 mb-3">Síguenos en Redes Sociales</h4>
                <div className="flex items-center gap-3">
                  <a href="https://www.instagram.com/_marketchicdr/profilecard/?igsh=d3puZWU4bWE0NDNw" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 text-white flex items-center justify-center hover:scale-110 transition-transform">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="https://m.facebook.com/Marvelouschic" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-110 transition-transform">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="https://www.tiktok.com/@marketchic" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-transform">
                    <span className="font-bold text-xs">d</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2: Agenda una Consulta Gratuita */}
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-purple-500/5 border border-purple-50/50 flex flex-col justify-between hover:shadow-2xl transition-all">
              <div>
                <h3 className="text-xl font-bold text-emerald-600 mb-4">
                  Agenda una Consulta Gratuita
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  Evaluaremos tu emprendimiento o marca personal sin costo. Completa el formulario y nos pondremos en contacto contigo.
                </p>
              </div>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfjNjhnHqegmfKT6q6I52OzjNaqeT47Ar6HAk1OO04PTbY41g/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 text-white py-3.5 px-6 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-95 shadow-lg shadow-purple-500/20 transition-all text-center"
              >
                Solicitar Consulta Gratuita
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-50/30 border-t border-emerald-100/50 text-gray-600 py-16 text-xs">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div>
              <Logo />
              <p className="mt-4 text-gray-500 leading-relaxed max-w-xs">
                Transformando negocios a través de marketing digital innovador y estratégico.
              </p>
              <div className="flex items-center gap-2.5 mt-5">
                <a href="https://www.instagram.com/_marketchicdr/profilecard/?igsh=d3puZWU4bWE0NDNw" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 text-white flex items-center justify-center hover:scale-110 transition-transform">
                  <Instagram className="w-3.5 h-3.5" />
                </a>
                <a href="https://m.facebook.com/Marvelouschic" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-110 transition-transform">
                  <Facebook className="w-3.5 h-3.5" />
                </a>
                <a href="https://www.tiktok.com/@marketchic" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-transform">
                  <span className="font-bold text-xs">d</span>
                </a>
                <a href="https://wa.me/message/SKONPMVANVZAA1" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center hover:scale-110 transition-transform">
                  <MessageSquare className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-emerald-600 mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2.5 text-gray-500">
                <li><a href="#inicio" className="hover:text-purple-600 transition-colors">Inicio</a></li>
                <li><a href="#nosotros" className="hover:text-purple-600 transition-colors">Nosotros</a></li>
                <li><a href="#servicios" className="hover:text-purple-600 transition-colors">Servicios</a></li>
                <li><a href="#planes" className="hover:text-purple-600 transition-colors">Planes</a></li>
                <li><a href="#contacto" className="hover:text-purple-600 transition-colors">Contacto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-emerald-600 mb-4">Servicios</h4>
              <ul className="space-y-2.5 text-gray-500">
                <li>Marketing Digital</li>
                <li>Desarrollo Web</li>
                <li>Redes Sociales</li>
                <li>Campañas Publicitarias</li>
                <li>Content Manager</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-emerald-600 mb-4">Contacto</h4>
              <ul className="space-y-2.5 text-gray-500">
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  marketchicdr@gmail.com
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  809-427-8761
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  829-320-0032
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200/60 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500">
            <p>&copy; {new Date().getFullYear()} Market Chic. Todos los derechos reservados.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-purple-600 transition-colors">Términos y Condiciones</a>
              <a href="#" className="hover:text-purple-600 transition-colors">Política de Privacidad</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;