import { Screen } from '../App';
import { Waves, User, Calendar, Instagram, Facebook, Twitter, Umbrella, MapPin, Mail, Phone } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useEffect, useRef } from 'react';
import camastroPinkGirlImg from 'figma:asset/88aeae5dd890534ba201d2b32ae8aef41f502b38.png';
import beachClubAerialImg from 'figma:asset/69ae160454f9487ae1816aa2464e8ed8b03c956c.png';
import animadorasImg from 'figma:asset/b2026ee31590a74c0f5dd5a48f61524ccef3c56d.png';
import poolPartyImg from 'figma:asset/f1a753ba7b93ed38291dc7ff017e80c340e85239.png';
import poolCheerImg from 'figma:asset/51b8c76ea2f3405047aef91553f4854e1c7aabe5.png';
import poolDancerImg from 'figma:asset/0b2612a4c151640508716beb762272620edae298.png';
import partyVibesImg from 'figma:asset/a20559afd065cbda487e181eb086c5cdc3bcc3bd.png';
import pinkSquadImg from 'figma:asset/f835e8b4868c94d1825450e6d28dda3124a5d5a5.png';
import logoImg from 'figma:asset/c7a70561c676b6fe564ea88667187b0eafbd4034.png';

interface HomeProps {
  navigateTo: (screen: Screen) => void;
}

export function Home({ navigateTo }: HomeProps) {
  const videoSrc = new URL('../assets/MARTINA AGOSTOP 24.mp4', import.meta.url).href;
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const experiences = [
    {
      id: 1,
      title: 'Zona de Camastros',
      description: 'Relájate frente al mar con nosotros',
      image: camastroPinkGirlImg,
    },
    {
      id: 2,
      title: 'Alberca con DJ',
      description: 'Disfruta de la mejor música con vistas espectaculares al mar',
      image: poolPartyImg,
    },
    {
      id: 3,
      title: 'Restaurante Gourmet',
      description: 'Sabor a mar y tierra con cocina de autor',
      image: 'https://images.unsplash.com/photo-1611262359546-64e2822b2ab5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY2FuJTIwY2V2aWNoZSUyMGRpc2h8ZW58MXx8fHwxNzY1MTEzODQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  const popularItems = [
    {
      id: 1,
      title: 'Energía y Diversión',
      image: poolCheerImg,
    },
    {
      id: 2,
      title: 'Vibras de Pool Party',
      image: poolDancerImg,
    },
    {
      id: 3,
      title: 'Celebración Total',
      image: partyVibesImg,
    },
    {
      id: 4,
      title: 'Pink Squad Goals',
      image: pinkSquadImg,
    },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Borde rosa metálico animado con scroll */}
      <div 
        className="fixed top-0 left-0 right-0 h-1 z-[100] pointer-events-none"
        style={{
          background: `linear-gradient(90deg, 
            rgba(233, 30, 140, 0.9) 0%, 
            rgba(255, 105, 180, 0.9) ${scrollProgress}%, 
            transparent ${scrollProgress}%)`,
          boxShadow: `0 0 20px rgba(233, 30, 140, 0.6), 
                      0 0 40px rgba(233, 30, 140, 0.4),
                      0 0 60px rgba(233, 30, 140, 0.2)`,
        }}
      />

      {/* Navbar - Simple y limpio */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <img
                src={logoImg}
                alt="Martina Beach Club"
                className="h-14 w-auto"
              />
            </div>

            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-gray-700 hover:text-pink-500 transition-colors relative group"
              >
                Inicio
                <span className="absolute -inset-2 bg-pink-500/20 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity -z-10"></span>
              </button>
              <button 
                onClick={() => scrollToSection('sobre-nosotros')}
                className="text-gray-700 hover:text-pink-500 transition-colors relative group"
              >
                Sobre Nosotros
                <span className="absolute -inset-2 bg-pink-500/20 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity -z-10"></span>
              </button>
              <button 
                onClick={() => scrollToSection('experiencias')}
                className="text-gray-700 hover:text-pink-500 transition-colors relative group"
              >
                Experiencias
                <span className="absolute -inset-2 bg-pink-500/20 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity -z-10"></span>
              </button>
              <button
                onClick={() => navigateTo('reservas')}
                className="text-gray-700 hover:text-pink-500 transition-colors relative group"
              >
                Reservas
                <span className="absolute -inset-2 bg-pink-500/20 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity -z-10"></span>
              </button>
              <button 
                onClick={() => scrollToSection('showcase')}
                className="text-gray-700 hover:text-pink-500 transition-colors relative group"
              >
                Showcase
                <span className="absolute -inset-2 bg-pink-500/20 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity -z-10"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section con Video */}
      <section id="hero" className="relative h-screen flex items-center justify-center bg-black pt-16 overflow-hidden">
        {/* Video Background con diseño para formato vertical */}
        <div className="absolute inset-0">
          {/* Capa de fondo borroso para llenar espacio lateral */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-900/40 via-black/60 to-pink-900/40"></div>
          
          {/* Efectos decorativos laterales */}
          <div className="absolute left-0 top-0 bottom-0 w-1/4 bg-gradient-to-r from-pink-500/20 to-transparent backdrop-blur-3xl"></div>
          <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-gradient-to-l from-pink-500/20 to-transparent backdrop-blur-3xl"></div>
          
          {/* Patrón decorativo sutil */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(233, 30, 140, 0.3) 0%, transparent 50%),
                            radial-gradient(circle at 80% 50%, rgba(233, 30, 140, 0.3) 0%, transparent 50%)`
          }}></div>
          
          {/* Video centrado */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative h-full aspect-[9/16] max-w-full">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              >
                <source src={videoSrc} type="video/mp4" />
               
              </video>
              
              {/* Overlay sutil sobre el video */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none"></div>
            </div>
          </div>
          
          {/* Gradiente de desvanecido en la parte inferior */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
          
          {/* Elementos decorativos animados en los laterales */}
          <div className="absolute left-10 top-1/4 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute right-10 top-2/3 w-40 h-40 bg-pink-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute left-20 bottom-1/4 w-24 h-24 bg-pink-600/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Content */}
        <div className="relative z-20 text-center text-white px-4 max-w-4xl">
          <h1 
            className="text-5xl md:text-7xl mb-4 drop-shadow-2xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Bienvenido al Paraíso
          </h1>
          <p className="text-xl md:text-2xl mb-2 drop-shadow-lg">Martina Beach Club</p>
          <p className="text-2xl md:text-3xl tracking-wider drop-shadow-lg" style={{ color: '#E91E8C' }}>
            #siempreMartina
          </p>
        </div>
      </section>

      {/* Ticker Text Animado */}
      <div className="bg-black text-white py-6 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          <span className="mx-16 tracking-widest text-xl" style={{ color: '#E91E8C' }}>
            #siempreMartina
          </span>
          <span className="mx-16 tracking-widest text-xl" style={{ color: '#E91E8C' }}>
            #siempreMartina
          </span>
          <span className="mx-16 tracking-widest text-xl" style={{ color: '#E91E8C' }}>
            #siempreMartina
          </span>
          <span className="mx-16 tracking-widest text-xl" style={{ color: '#E91E8C' }}>
            #siempreMartina
          </span>
          <span className="mx-16 tracking-widest text-xl" style={{ color: '#E91E8C' }}>
            #siempreMartina
          </span>
          <span className="mx-16 tracking-widest text-xl" style={{ color: '#E91E8C' }}>
            #siempreMartina
          </span>
        </div>
      </div>

      {/* Sobre Nosotros Section */}
      <section id="sobre-nosotros" className="py-20 px-4 bg-gradient-to-b from-white via-pink-50/30 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-pink-100">
            <h2 
              className="text-4xl mb-8 text-pink-600"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Sobre Nosotros
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Martina Beach Club es más que un destino, es una experiencia inolvidable donde el lujo se encuentra con la tranquilidad del mar Caribe. Desde 2020, hemos creado un espacio único que combina elegancia, confort y diversión en un ambiente paradisíaco.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Nuestro compromiso es ofrecerte momentos memorables con servicios de primera clase, gastronomía excepcional y las mejores vistas al océano. Cada detalle está diseñado para que vivas una experiencia única.
                </p>
              </div>
              <div className="rounded-2xl h-64 overflow-hidden shadow-lg border-4 border-white group">
                <img 
                  src={animadorasImg}
                  alt="Animadoras Beach Club"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 shadow-[0_0_30px_rgba(233,30,140,0)] group-hover:shadow-[0_0_30px_rgba(233,30,140,0.6)] transition-shadow duration-300 pointer-events-none"></div>
              </div>
            </div>

            <div className="rounded-2xl h-96 overflow-hidden shadow-lg border-4 border-white group relative">
              <img 
                src={beachClubAerialImg}
                alt="Vista Aérea Beach Club"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 shadow-[0_0_40px_rgba(233,30,140,0)] group-hover:shadow-[0_0_40px_rgba(233,30,140,0.8)] transition-shadow duration-300 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiencias Section */}
      <section id="experiencias" className="py-20 px-4 bg-gray-50 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-4xl mb-12 text-center text-pink-600"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Experiencias
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experiences.map((exp) => (
              <div 
                key={exp.id}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all relative"
              >
                <span className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity -z-10"></span>
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(233,30,140,0)] group-hover:shadow-[inset_0_0_30px_rgba(233,30,140,0.5)] transition-shadow duration-300"></div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="mb-2 text-pink-600">{exp.title}</h3>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Virtual 360 Section */}
      <section id="showcase" className="py-20 px-4 bg-white relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-4xl mb-12 text-center text-pink-600"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Tour Virtual 360°
          </h2>

          <div className="relative group cursor-pointer mb-16">
            {/* Contenedor del iframe */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-pink-200 h-[600px]">
              <iframe
                src="https://martinatour.vercel.app/"
                className="w-full h-full"
                title="Tour Virtual 360° Martina Beach Club"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
              
              {/* Overlay con botón para abrir en nueva pestaña */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 pointer-events-none">
                <div className="absolute top-4 right-4 pointer-events-auto">
                  <a
                    href="https://martinatour.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-pink-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
                    style={{
                      boxShadow: '0 0 30px rgba(233, 30, 140, 0.3)',
                    }}
                  >
                    <span>Abrir Tour Completo</span>
                    <svg 
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Efecto de brillo rosa en hover */}
              <div className="absolute inset-0 shadow-[0_0_0px_rgba(233,30,140,0)] group-hover:shadow-[0_0_50px_rgba(233,30,140,0.4)] transition-shadow duration-300 pointer-events-none rounded-2xl"></div>
            </div>

            {/* Texto informativo debajo */}
            <p className="text-center text-gray-600 mt-6">
              Explora nuestras instalaciones con el tour virtual interactivo 360°
            </p>
          </div>

          {/* Populares */}
          <div>
            <h3 
              className="text-3xl mb-8 text-pink-600"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Populares
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {popularItems.map((item) => (
                <div 
                  key={item.id}
                  className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all relative"
                >
                  <span className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity -z-10"></span>
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(233,30,140,0)] group-hover:shadow-[inset_0_0_30px_rgba(233,30,140,0.5)] transition-shadow duration-300"></div>
                  </div>
                  <div className="p-6 bg-white">
                    <h3 className="mb-2 text-pink-600">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ticker Text Animado antes del Footer */}
      <div className="bg-black text-white py-6 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          <span className="mx-16 tracking-widest text-xl" style={{ color: '#E91E8C' }}>
            #siempreMartina
          </span>
          <span className="mx-16 tracking-widest text-xl" style={{ color: '#E91E8C' }}>
            #siempreMartina
          </span>
          <span className="mx-16 tracking-widest text-xl" style={{ color: '#E91E8C' }}>
            #siempreMartina
          </span>
          <span className="mx-16 tracking-widest text-xl" style={{ color: '#E91E8C' }}>
            #siempreMartina
          </span>
          <span className="mx-16 tracking-widest text-xl" style={{ color: '#E91E8C' }}>
            #siempreMartina
          </span>
          <span className="mx-16 tracking-widest text-xl" style={{ color: '#E91E8C' }}>
            #siempreMartina
          </span>
        </div>
      </div>

      {/* Botón Flotante Book Now */}
      <button
        onClick={() => navigateTo('reservas')}
        className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-full shadow-2xl hover:shadow-pink-500/50 hover:scale-110 transition-all duration-300 group"
        style={{
          boxShadow: '0 0 40px rgba(233, 30, 140, 0.4), 0 10px 30px rgba(0, 0, 0, 0.3)',
        }}
      >
        <span className="flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          <span className="tracking-wider">BOOK NOW</span>
        </span>
        <span className="absolute inset-0 rounded-full bg-pink-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity"></span>
      </button>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700/50 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Left Side - Info */}
              <div className="space-y-8">
                <div>
                  <img
                    src={logoImg}
                    alt="Martina Beach Club"
                    className="h-16 w-auto mb-4 brightness-0 invert"
                  />
                  <p className="text-gray-300 mb-6">
                    Donde el lujo se encuentra con el paraíso. Vive experiencias inolvidables en el mejor beach club.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-pink-400 mb-4">Información de Contacto</h4>
                  <div className="flex items-start gap-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                    <div>
                      <p>Albatros, Zacl-ha</p>
                      <p>77720 Playa del Carmen, Q.R.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone className="w-5 h-5 text-pink-400 flex-shrink-0" />
                    <p>+52 998 123 4567</p>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="w-5 h-5 text-pink-400 flex-shrink-0" />
                    <p>info@martinabeachclub.com</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-pink-400 mb-4">Enlaces Rápidos</h4>
                  <div className="flex flex-wrap gap-4">
                    <button 
                      onClick={() => scrollToSection('hero')}
                      className="text-gray-300 hover:text-pink-400 transition-colors"
                    >
                      Inicio
                    </button>
                    <span className="text-gray-600">•</span>
                    <button
                      onClick={() => navigateTo('reservas')}
                      className="text-gray-300 hover:text-pink-400 transition-colors"
                    >
                      Reservas
                    </button>
                    <span className="text-gray-600">•</span>
                    <button
                      onClick={() => scrollToSection('experiencias')}
                      className="text-gray-300 hover:text-pink-400 transition-colors"
                    >
                      Experiencias
                    </button>
                  </div>
                </div>

                <div>
                  <h4 className="text-pink-400 mb-4">Síguenos</h4>
                  <div className="flex gap-4">
                    <button className="w-12 h-12 bg-slate-700/50 rounded-full flex items-center justify-center hover:bg-pink-500 transition-all hover:scale-110 border border-slate-600">
                      <Facebook className="w-5 h-5" />
                    </button>
                    <button className="w-12 h-12 bg-slate-700/50 rounded-full flex items-center justify-center hover:bg-pink-500 transition-all hover:scale-110 border border-slate-600">
                      <Instagram className="w-5 h-5" />
                    </button>
                    <button className="w-12 h-12 bg-slate-700/50 rounded-full flex items-center justify-center hover:bg-pink-500 transition-all hover:scale-110 border border-slate-600">
                      <Twitter className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Side - Map */}
              <div className="h-full min-h-[400px] rounded-xl overflow-hidden border-2 border-slate-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.774286!2d-87.0732!3d20.6288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4fd8e8f4f8f8f8%3A0x8f8f8f8f8f8f8f8f!2sAlbatros%2C%20Zacl-ha%2C%2077720%20Playa%20del%20Carmen%2C%20Q.R.%2C%20Mexico!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Martina Beach Club"
                ></iframe>
              </div>
            </div>

            <div className="border-t border-slate-700 pt-6 text-center">
              <p className="text-gray-400">
                &copy; 2025 Martina Beach Club. Todos los derechos reservados.
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Horario: Lunes - Domingo • 8:00 AM - 8:00 PM
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}