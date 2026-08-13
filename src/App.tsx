import React, { useState } from 'react';
import { 
  Sparkles, 
  Medal, 
  Heart, 
  Flag, 
  TrendingUp, 
  BarChart2, 
  Share2, 
  MessageSquare, 
  Users, 
  Award,
  Image,
  Video,
  Star,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  ExternalLink
} from 'lucide-react';

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full border-2 border-purple-500 bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold text-lg shadow-md">
        M
      </div>
      <span className="text-2xl font-bold text-gradient">
        Market Chic
      </span>
    </div>
  );
}

function ServiceCard({ title, description, icon: Icon, color }) {
  return (
    <div className="service-card card-hover bg-white rounded-2xl p-8 relative group">
      <Icon className={`w-12 h-12 text-${color}-600 mb-6 group-hover:scale-110 transition-transform`} />
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function PlanCard({ title, description, features, onSelect }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all pricing-card">
      <h3 className="text-2xl font-bold mb-4 text-gradient">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-purple-600 mt-1">
              <Star className="w-5 h-5" />
            </span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={onSelect}
        className="w-full button-gradient bg-gradient-to-r from-purple-600 via-pink-500 to-emerald-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
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
        "Gestión de 4 redes sociales",
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
      icon: BarChart2,
      title: "Análisis de Datos",
      description: "Medición y análisis de resultados para optimizar tus campañas.",
      color: "pink"
    },
    {
      icon: Share2,
      title: "Redes Sociales",
      description: "Gestión profesional de tus redes sociales.",
      color: "emerald"
    },
    {
      icon: MessageSquare,
      title: "Contenido Digital",
      description: "Creación de contenido relevante y atractivo.",
      color: "purple"
    },
    {
      icon: Users,
      title: "Community Management",
      description: "Gestión efectiva de tu comunidad online.",
      color: "pink"
    },
    {
      icon: Award,
      title: "Branding Digital",
      description: "Desarrollo y fortalecimiento de tu marca.",
      color: "emerald"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Logo />
          <nav className="hidden md:flex gap-6">
            {['inicio', 'nosotros', 'servicios', 'portafolio', 'planes', 'contacto'].map((item) => (
              <a 
                key={item}
                href={`#${item}`} 
                className="nav-link text-gray-600 hover:text-purple-600 transition-colors"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="gradient-background py-32 relative overflow-hidden" id="inicio">
        <div className="absolute inset-0 bg-gradient-radial from-white/50 to-transparent"></div>
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl font-bold mb-6 text-white">
            Tu Aliado en Marketing Digital
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Transformamos tu presencia digital con estrategias innovadoras y resultados medibles
          </p>
          <a 
            href="#contacto"
            className="button-gradient bg-gradient-to-r from-white via-purple-100 to-white text-purple-600 px-8 py-4 rounded-full font-semibold shadow-lg inline-flex items-center gap-2 group"
          >
            Comenzar Ahora
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-4" id="nosotros">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-emerald-500 text-white text-sm font-medium px-6 py-2 rounded-full inline-block animate-float">
              ACERCA DE NOSOTROS
            </span>
            <p className="text-gray-600 mt-8 max-w-3xl mx-auto text-lg leading-relaxed">
              Somos una agencia de marketing que será tu amiga y aliada para el crecimiento de tu marca o empresa, 
              que estudia y propone las estrategias del marketing para alcanzar los objetivos deseados con la 
              innovación y creatividad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="card-hover bg-white rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
                <Medal className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gradient">Misión</h3>
              <p className="text-gray-600 leading-relaxed">
                Posicionar la innovación en marketing de marca o empresa. Además, brindar los servicios 
                personalizados a cada marca para poder guiar, proyectar y destacar sus propósitos en el mercado.
              </p>
            </div>

            <div className="card-hover bg-white rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
                <Heart className="w-10 h-10 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gradient">Valores</h3>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  Innovación
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  Transparencia
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  Compromiso
                </li>
              </ul>
            </div>

            <div className="card-hover bg-white rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
                <Flag className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gradient">Visión</h3>
              <p className="text-gray-600 leading-relaxed">
                Ser ideales para nuestros clientes y referentes de marketing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-emerald-50" id="servicios">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-emerald-500 text-white text-sm font-medium px-6 py-2 rounded-full inline-block animate-float">
              SERVICIOS
            </span>
            <h2 className="text-4xl font-bold mt-6 mb-4 text-gradient">
              Nuestros Servicios
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Ofrecemos soluciones integrales de marketing digital para impulsar tu presencia online.
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
      <section className="py-32 px-4" id="planes">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-emerald-500 text-white text-sm font-medium px-6 py-2 rounded-full inline-block animate-float">
              PLANES
            </span>
            <h2 className="text-4xl font-bold mt-6 mb-4 text-gradient">
              Nuestros Planes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
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
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-800 mb-4">
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
                    <p className="text-xs text-gray-500">809-427-8761</p>
                    <p className="text-xs text-gray-500">829-320-0032</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-gray-800">WhatsApp</h4>
                    <a href="https://wa.me/18094278761" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-purple-600 transition-colors">
                      Envíanos un mensaje
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-gray-800 mb-3">Síguenos en Redes Sociales</h4>
                <div className="flex items-center gap-3">
                  <a href="https://instagram.com/_marketchicdr" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 text-white flex items-center justify-center hover:scale-110 transition-transform">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-110 transition-transform">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-transform">
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
                href="mailto:marketchicdr@gmail.com?subject=Consulta Gratuita"
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
                <a href="https://instagram.com/_marketchicdr" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 text-white flex items-center justify-center hover:scale-110 transition-transform">
                  <Instagram className="w-3.5 h-3.5" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-110 transition-transform">
                  <Facebook className="w-3.5 h-3.5" />
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-transform">
                  <span className="font-bold text-xs">d</span>
                </a>
                <a href="https://wa.me/18094278761" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center hover:scale-110 transition-transform">
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