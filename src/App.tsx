/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { 
  Scissors, 
  MapPin, 
  Clock, 
  Star, 
  ChevronRight, 
  Instagram, 
  Facebook, 
  Phone,
  Menu,
  X,
  ArrowRight
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Hero Entrance
    const tl = gsap.timeline();
    tl.from('.hero-title span', {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: 'power4.out'
    })
    .from('.hero-sub', {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    }, '-=0.8')
    .from('.hero-cta', {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.7)'
    }, '-=0.6');

    // Scroll Reveals
    const sections = gsap.utils.toArray('.reveal');
    sections.forEach((section: any) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });
    });

    // Bento Grid Stagger
    gsap.from('.bento-item', {
      scrollTrigger: {
        trigger: '.bento-grid',
        start: 'top 75%'
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out'
    });

    // Marquee Animation
    gsap.to('.marquee-content', {
      xPercent: -50,
      ease: 'none',
      duration: 12,
      repeat: -1
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen font-sans overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 glass py-3 px-6 md:px-12 flex justify-between items-center transition-all duration-500">
        <div className="flex items-center">
          <img 
            src="https://i.ibb.co/chcbRJf7/Logo-para-site-2.png" 
            alt="Barbearia Ricci Homme" 
            className="h-12 md:h-16 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <nav className="hidden lg:flex items-center gap-10 text-[10px] font-bold uppercase tracking-[0.3em] opacity-50 hover:opacity-100 transition-opacity">
          <a href="#sobre" className="hover:text-accent transition-colors">Sobre</a>
          <a href="#servicos" className="hover:text-accent transition-colors">Serviços</a>
          <a href="#unidades" className="hover:text-accent transition-colors">Unidades</a>
          <a href="#contato" className="hover:text-accent transition-colors">Contato</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block bg-accent text-dark px-8 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white transition-all active:scale-95 shadow-lg shadow-accent/20">
            Agendar Agora
          </button>
          <button className="lg:hidden text-white p-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-start px-6 md:px-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=2000" 
            alt="Barbearia Ricci" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/40 to-dark"></div>
        </div>

        <div className="relative z-10 max-w-5xl">
          <h1 className="hero-title font-display text-5xl md:text-7xl font-extrabold leading-[0.9] tracking-tighter mb-8 flex flex-col items-start text-left">
            <span className="block">ESTILO.</span>
            <span className="block text-accent">VISAGISMO.</span>
            <span className="block italic font-light">EXCLUSIVIDADE.</span>
          </h1>
          <p className="hero-sub text-lg md:text-xl font-light opacity-80 mb-12 max-w-xl text-balance text-left">
            Descubra o Método Ricci: onde a tradição da barbearia encontra a ciência do visagismo para revelar sua melhor versão.
          </p>
          <div className="hero-cta flex justify-start">
            <button className="group relative bg-white text-dark px-10 py-5 rounded-full text-sm font-bold uppercase tracking-[0.2em] animate-pulse-accent overflow-hidden">
              <span className="relative z-10">Viver a Experiência</span>
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
          <div className="w-px h-12 bg-white"></div>
        </div>
      </section>

      {/* Authority Band (Marquee) */}
      <section className="py-6 border-y border-white/5 bg-white/[0.02] overflow-hidden whitespace-nowrap">
        <div className="marquee-content flex gap-12 items-center">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-12">
              <span className="text-xl font-display font-bold opacity-20">MÉTODO RICCI</span>
              <Star className="w-4 h-4 text-accent opacity-30" />
              <span className="text-xl font-display font-bold opacity-20">+5000 CLIENTES</span>
              <Star className="w-4 h-4 text-accent opacity-30" />
              <span className="text-xl font-display font-bold opacity-20">CAMPINAS SP</span>
              <Star className="w-4 h-4 text-accent opacity-30" />
            </div>
          ))}
        </div>
      </section>

      {/* Differentials (Bento Grid) */}
      <section id="sobre" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8 reveal">
          <div className="max-w-2xl">
            <p className="text-accent uppercase tracking-[0.4em] text-[10px] font-bold mb-3">Exclusividade & Tradição</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">A Arte da <span className="italic font-light">Perfeição</span></h2>
          </div>
          <p className="opacity-40 max-w-xs text-xs leading-relaxed">
            Combinamos técnicas ancestrais com a ciência moderna do visagismo para criar uma identidade única para cada homem.
          </p>
        </div>

        <div className="bento-grid grid grid-cols-1 md:grid-cols-4 gap-3 auto-rows-[200px]">
          {/* Item 1: Visagismo (Grande Vertical) */}
          <div className="bento-item md:row-span-2 flex flex-col justify-end relative overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1593702295094-ada35bc1307e?auto=format&fit=crop&q=80&w=800" 
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-1000"
              alt="Visagismo"
              referrerPolicy="no-referrer"
            />
            <div className="relative z-10">
              <h3 className="text-xl font-display font-bold mb-1">Visagismo</h3>
              <p className="text-[10px] opacity-40 leading-relaxed">Análise geométrica facial para harmonização total.</p>
            </div>
          </div>

          {/* Item 2: Método Ricci (Largo Superior) */}
          <div className="bento-item md:col-span-2 flex flex-col justify-center relative overflow-hidden group bg-accent/[0.03] border-accent/10">
            <div className="relative z-10">
              <Scissors className="w-6 h-6 text-accent mb-3 opacity-40" />
              <h3 className="text-2xl font-display font-bold mb-1">Método Ricci</h3>
              <p className="opacity-50 text-xs max-w-md">Uma metodologia autoral que prioriza a saúde capilar e a precisão milimétrica em cada movimento.</p>
            </div>
            <div className="absolute top-0 right-0 p-6 opacity-[0.03]">
              <Scissors className="w-24 h-24 rotate-45" />
            </div>
          </div>

          {/* Item 3: Ambiente (Quadrado) */}
          <div className="bento-item flex flex-col justify-end relative overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1512690196252-741d2fd36ad0?auto=format&fit=crop&q=80&w=600" 
              className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:scale-110 transition-transform duration-1000"
              alt="Ambiente"
              referrerPolicy="no-referrer"
            />
            <div className="relative z-10">
              <h3 className="text-lg font-display font-bold">Lounge</h3>
            </div>
          </div>

          {/* Item 4: Barba (Largo Inferior Esquerda) */}
          <div className="bento-item md:col-span-2 flex items-center gap-6 relative overflow-hidden group">
            <div className="relative z-10 flex gap-6 items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden border border-white/5 flex-shrink-0">
                <img src="https://images.unsplash.com/photo-1621605815841-aa88c82b0281?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Barba" referrerPolicy="no-referrer" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold mb-1">Barba Terapia</h3>
                <p className="text-[10px] opacity-40">Rituais de relaxamento com toalhas quentes e ozônio.</p>
              </div>
            </div>
          </div>

          {/* Item 5: Produtos (Quadrado) */}
          <div className="bento-item flex flex-col justify-center items-center text-center border-white/5">
            <Star className="w-6 h-6 text-accent mb-2" />
            <h3 className="text-base font-display font-bold">Premium</h3>
            <p className="text-[8px] uppercase tracking-[0.3em] opacity-30">Curadoria Global</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 reveal">
            <div className="max-w-2xl">
              <p className="text-accent uppercase tracking-[0.4em] text-[10px] font-bold mb-3">Experiência Ricci</p>
              <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">Serviços de <span className="italic font-light">Elite</span></h2>
            </div>
            <p className="opacity-40 max-w-xs text-xs leading-relaxed">
              Cada serviço é um ritual de cuidado, precisão e relaxamento absoluto, desenhado para o homem que não aceita menos que o topo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                title: "Corte Signature", 
                desc: "Consultoria de visagismo inclusa para um visual que comunica sua verdadeira identidade.",
                img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800",
                price: "R$ 120"
              },
              { 
                title: "Barba Terapia", 
                desc: "Rituais com toalhas quentes, óleos essenciais e ozonioterapia para relaxamento total.",
                img: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=800",
                price: "R$ 90"
              },
              { 
                title: "Combo Ricci", 
                desc: "A experiência definitiva: Cabelo, Barba e Sobrancelha com o método exclusivo Ricci.",
                img: "https://images.unsplash.com/photo-1599351431247-f10b21ce49ac?auto=format&fit=crop&q=80&w=800",
                price: "R$ 180"
              }
            ].map((service, i) => (
              <div key={i} className="group relative h-[450px] overflow-hidden rounded-2xl border border-white/5 reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <img 
                  src={service.img} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-30 group-hover:opacity-50"
                  alt={service.title}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/10 to-transparent"></div>
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex justify-between items-end mb-3">
                    <span className="text-accent font-display text-4xl opacity-10 font-bold">0{i + 1}</span>
                    <span className="text-accent font-bold text-base">{service.price}</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-accent transition-colors">{service.title}</h3>
                  <p className="text-xs opacity-50 leading-relaxed max-w-xs transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {service.desc}
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-accent opacity-0 group-hover:opacity-100 transition-all duration-700">
                    <span>Agendar Agora</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center reveal">
            <button className="px-10 py-4 bg-white text-dark font-bold rounded-full hover:bg-accent hover:text-white transition-all duration-500 text-[10px] uppercase tracking-[0.2em]">
              Ver Menu Completo
            </button>
          </div>
        </div>
      </section>

      {/* Unidades */}
      <section id="unidades" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-12 reveal">
          <p className="text-accent uppercase tracking-[0.4em] text-[10px] font-bold mb-3">Onde Estamos</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">Nossas Unidades</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { 
              name: "Taquaral", 
              address: "Rua Paula Bueno, Campinas", 
              img: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800",
              mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.647344919323!2d-47.0543!3d-22.889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c60f00000000%3A0x0!2sRua%20Paula%20Bueno%2C%20Campinas%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1711920000000!5m2!1spt-BR!2sbr"
            },
            { 
              name: "Barão Geraldo", 
              address: "Av. Albino J. B. de Oliveira, Campinas", 
              img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800",
              mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.2!2d-47.08!3d-22.82!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c60f00000000%3A0x0!2sAv.%20Albino%20J.%20B.%20de%20Oliveira%2C%20Campinas%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1711920000000!5m2!1spt-BR!2sbr"
            }
          ].map((unidade, i) => (
            <div key={i} className="reveal flex flex-col">
              <div className="group relative h-[250px] rounded-t-2xl overflow-hidden">
                <img src={unidade.img} className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-700" alt={unidade.name} referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-display font-bold mb-1">{unidade.name}</h3>
                  <div className="flex items-center gap-2 opacity-50">
                    <MapPin className="w-3 h-3 text-accent" />
                    <span className="text-xs">{unidade.address}</span>
                  </div>
                </div>
              </div>
              <div className="h-[250px] w-full rounded-b-2xl overflow-hidden border border-white/5 border-t-0 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                <iframe 
                  src={unidade.mapEmbed}
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa ${unidade.name}`}
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 reveal">
            <div>
              <h2 className="font-display text-5xl font-bold mb-4">O que dizem nossos <span className="text-accent">Clientes</span></h2>
              <p className="opacity-60">A opinião de quem vive a experiência Ricci Homme.</p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-1 text-accent">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <span className="font-bold">4.9/5 no Google</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Ricardo Silva", text: "O melhor atendimento que já tive em Campinas. O visagismo realmente mudou a forma como eu me vejo." },
              { name: "André Santos", text: "Ambiente impecável e profissionais de altíssimo nível. O Método Ricci é diferenciado." },
              { name: "Marcos Oliveira", text: "Lugar de homem que se cuida. Recomendo a Unidade Taquaral, o café é excelente também!" }
            ].map((t, i) => (
              <div key={i} className="glass p-8 rounded-3xl reveal">
                <p className="italic opacity-70 mb-6 font-light">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center font-bold text-accent">
                    {t.name[0]}
                  </div>
                  <span className="font-bold">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="py-12 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-6">
              <img 
                src="https://i.ibb.co/chcbRJf7/Logo-para-site-2.png" 
                alt="Barbearia Ricci Homme" 
                className="h-24 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-sm opacity-40">© 2026 Barbearia Ricci Homme. Todos os direitos reservados.</p>
          </div>

          <div className="flex gap-8">
            <a href="#" className="opacity-40 hover:opacity-100 hover:text-accent transition-all"><Instagram /></a>
            <a href="#" className="opacity-40 hover:opacity-100 hover:text-accent transition-all"><Facebook /></a>
            <a href="#" className="opacity-40 hover:opacity-100 hover:text-accent transition-all"><Phone /></a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-xs uppercase tracking-[0.2em] opacity-40 mb-2">Agendamento Exclusivo</p>
            <p className="font-bold text-accent">(19) 99999-9999</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/5519999999999" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 backdrop-blur-md border border-green-500/30 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(34,197,94,0.2)] hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] group"
      >
        <svg 
          viewBox="0 0 24 24" 
          className="w-8 h-8 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
}
