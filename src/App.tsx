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
  MapPin
} from 'lucide-react';

function Logo() {
  return (
    <div className="flex items-center gap-2 animate-float">
      <Sparkles className="w-8 h-8 text-purple-600" />
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
      <section className="py-32 px-4 gradient-background relative" id="contacto">
        <div className="absolute inset-0 bg-gradient-radial from-white/50 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="bg-white text-purple-600 text-sm font-medium px-6 py-2 rounded-full inline-block animate-float">
              CONTACTO
            </span>
            <h2 className="text-4xl font-bold mt-6 mb-4 text-white">
              ¿Listo para empezar?
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto text-lg">
              Contáctanos hoy mismo para comenzar a transformar tu presencia digital.
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <div className="bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-xl">
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-gray-700">
                  <Mail className="w-6 h-6 text-purple-600" />
                  <a href="mailto:marketchicdr@gmail.com" className="hover:text-purple-600 transition-colors">
                    marketchicdr@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4 text-gray-700">
                  <Phone className="w-6 h-6 text-purple-600" />
                  <a href="tel:+18094270000" className="hover:text-purple-600 transition-colors">
                    809-427-8761
                  </a>
                </div>
                <div className="flex items-center gap-4 text-gray-700">
                  <MapPin className="w-6 h-6 text-purple-600" />
                  <span>
                    Calle Bienvenido Creales #87, Centro de la Ciudad, La Romana, República Dominicana
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <Logo />
              <p className="mt-6 text-gray-400 leading-relaxed">
                Tu aliado en el crecimiento digital. Transformamos marcas con estrategias innovadoras.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Enlaces</h4>
              <ul className="space-y-4">
                {['inicio', 'nosotros', 'servicios', 'planes', 'contacto'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item}`} 
                      className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-2 h-2 bg-purple-500 rounded-full group-hover:w-3 transition-all"></span>
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Servicios</h4>
              <ul className="space-y-4">
                {['Marketing Digital', 'Redes Sociales', 'Análisis de Datos', 'Branding Digital'].map((service) => (
                  <li key={service}>
                    <span className="text-gray-400 flex items-center gap-2">
                      <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Contacto</h4>
              <ul className="space-y-4">
                <li className="text-gray-400 flex items-center gap-3">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  marketchicdr@gmail.com
                </li>
                <li className="text-gray-400 flex items-center gap-3">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  809-427-8761
                </li>
                <li className="text-gray-400 flex items-center gap-3">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  La Romana, RD
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Market Chic. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;