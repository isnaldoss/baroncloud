"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

const TopBar = () => {
  return (
    <div className="bg-accent-blue py-2 px-6 hidden md:block">
      <div className="container mx-auto flex justify-between items-center text-[11px] font-bold uppercase tracking-widest text-white">
        <div className="flex gap-6">
          <span className="flex items-center gap-2">
            <i className="ri-flashlight-line"></i>
            Infraestrutura de Alta Performance
          </span>
          <span className="flex items-center gap-2">
            <i className="ri-shield-check-line"></i>
            Uptime Real de 99.9%
          </span>
        </div>
        <div className="flex gap-6">
          <a href="mailto:suporte@baroncloud.com.br" className="hover:text-white/80 transition-colors">suporte@baroncloud.com.br</a>
          <div className="flex gap-3">
            <i className="ri-facebook-fill hover:text-white/80 cursor-pointer"></i>
            <i className="ri-twitter-x-fill hover:text-white/80 cursor-pointer"></i>
            <i className="ri-linkedin-fill hover:text-white/80 cursor-pointer"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 md:top-8 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "md:top-0 py-4 bg-background/80 backdrop-blur-xl border-b border-white/5" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-accent-blue to-accent-purple rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-accent-blue/20">
            <i className="ri-server-line text-white text-2xl"></i>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tighter text-white leading-none">BARONCLOUD</span>
            <span className="text-[9px] font-bold tracking-[0.2em] text-accent-blue uppercase">Cloud Infrastructure</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {["Sobre", "Serviços", "Planos", "Feedback"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[13px] font-bold uppercase tracking-widest text-white/50 hover:text-accent-blue transition-all relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-blue transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="https://wa.me/5500000000000"
            className="hidden sm:flex px-6 py-3 bg-white text-black text-[12px] font-black uppercase tracking-widest rounded-xl hover:bg-accent-blue hover:text-white transition-all duration-500 shadow-xl shadow-white/5"
          >
            Ativar Servidor
          </Link>
          <button className="lg:hidden text-white text-2xl">
            <i className="ri-menu-4-line"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Hero Image Background */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero-servers.png" 
          alt="Data Center" 
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        <div className="absolute inset-0 bg-grid opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black tracking-[0.2em] uppercase text-accent-blue mb-6 backdrop-blur-md">
              <span className="w-2 h-2 bg-accent-blue rounded-full animate-ping"></span>
              Infraestrutura Cloud de Elite
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] text-white"
          >
            Potência Bruta para <br />
            sua <span className="text-accent-blue relative">
              Operação
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent-blue/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-white/50 mb-12 max-w-3xl leading-relaxed font-medium"
          >
            Hospedagem por hora com performance dedicada. <br className="hidden md:block" />
            Servidores robustos, segurança máxima e uptime garantido para sua empresa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <Link
              href="#planos"
              className="w-full sm:w-auto px-10 py-5 bg-accent-blue text-white text-[14px] font-black uppercase tracking-widest rounded-2xl hover:scale-105 hover:glow-blue transition-all duration-500 flex items-center justify-center gap-3 group"
            >
              Ver Planos por Hora
              <i className="ri-arrow-right-up-line text-xl group-hover:rotate-45 transition-transform"></i>
            </Link>
            <Link
              href="#sobre"
              className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white text-[14px] font-black uppercase tracking-widest rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-3"
            >
              Nossa Infraestrutura
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="sobre" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent-blue font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Nossa Infraestrutura</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 text-white leading-tight">
              Hardware de <br />
              <span className="text-accent-blue">Última Geração.</span>
            </h2>
            <p className="text-white/50 text-xl leading-relaxed mb-10 font-medium">
              A BaronCloud oferece servidores de alta performance com faturamento por hora. 
              Nossa infraestrutura é projetada para suportar cargas críticas com estabilidade absoluta.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: "ri-cpu-line", title: "Processadores de Alta Frequência" },
                { icon: "ri-database-2-line", title: "Armazenamento NVMe Enterprise" },
                { icon: "ri-global-line", title: "Rede Global de Baixa Latência" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-all">
                    <i className={item.icon}></i>
                  </div>
                  <span className="text-white/80 font-bold tracking-tight">{item.title}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square glass rounded-[40px] p-12 flex flex-col justify-center gap-8 relative overflow-hidden group glow-blue">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-transparent"></div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-accent-blue/20 flex items-center justify-center shadow-inner">
                  <i className="ri-server-line text-accent-blue text-3xl"></i>
                </div>
                <div>
                  <h4 className="font-black text-white text-xl tracking-tight">Servidores Dedicados</h4>
                  <p className="text-white/40 text-sm font-bold uppercase tracking-widest">Performance sem limites</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-accent-purple/20 flex items-center justify-center shadow-inner">
                  <i className="ri-shield-keyhole-line text-accent-purple text-3xl"></i>
                </div>
                <div>
                  <h4 className="font-black text-white text-xl tracking-tight">Segurança Avançada</h4>
                  <p className="text-white/40 text-sm font-bold uppercase tracking-widest">Proteção DDoS ativa</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center shadow-inner">
                  <i className="ri-speed-up-line text-green-500 text-3xl"></i>
                </div>
                <div>
                  <h4 className="font-black text-white text-xl tracking-tight">Alta Disponibilidade</h4>
                  <p className="text-white/40 text-sm font-bold uppercase tracking-widest">Uptime 99.9% garantido</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Hospedagem por Hora",
      description: "Pague apenas pelo que usar com faturamento flexível e escalabilidade instantânea.",
      icon: "ri-time-line",
      badge: "Flexível",
      className: "md:col-span-2 md:row-span-1",
    },
    {
      title: "Infraestrutura Cloud",
      description: "Servidores robustos com gestão especializada e foco em estabilidade operacional.",
      icon: "ri-cloud-line",
      badge: "Cloud",
      className: "md:col-span-2 md:row-span-1",
    },
    {
      title: "Proteção de Dados",
      description: "Backups automáticos e redundância geográfica para total segurança das suas informações.",
      icon: "ri-shield-user-line",
      badge: "Segurança",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      title: "Rede de Alta Velocidade",
      description: "Conectividade de elite com baixa latência para garantir a melhor experiência aos seus usuários.",
      icon: "ri-pulse-line",
      badge: "Rede",
      className: "md:col-span-3 md:row-span-1",
    },
  ];

  return (
    <section id="serviços" className="py-32 bg-white/[0.01] relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-accent-blue font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Nossas Soluções</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 text-white">O Que Oferecemos</h2>
          <p className="text-white/40 text-xl font-medium">Infraestrutura completa para empresas que buscam o próximo nível de estabilidade.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`glass p-10 rounded-[32px] glass-hover group flex flex-col justify-between relative overflow-hidden ${service.className}`}
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <i className={`${service.icon} text-9xl`}></i>
              </div>
              
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-accent-blue group-hover:text-white transition-all duration-500 shadow-inner">
                    <i className={`${service.icon} text-3xl`}></i>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-widest text-white/40 group-hover:text-accent-blue transition-colors">
                    {service.badge}
                  </span>
                </div>
                <h3 className="text-3xl font-black text-white mb-6 tracking-tight">{service.title}</h3>
                <p className="text-white/40 text-lg leading-relaxed font-medium group-hover:text-white/60 transition-colors">{service.description}</p>
              </div>
              
              <div className="mt-10 flex items-center gap-4 text-[12px] font-black uppercase tracking-widest text-accent-blue group-hover:gap-6 transition-all">
                Ver Detalhes
                <i className="ri-arrow-right-line"></i>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "Básico",
      price: "R$ 56,90",
      period: "/mês",
      description: "Ideal para sites institucionais e pequenas operações.",
      features: ["3 Contas de E-mail", "Performance Dedicada", "SSL Grátis", "Backup Semanal", "Suporte via Ticket"],
      button: "Ativar Agora",
      popular: false,
    },
    {
      name: "Profissional",
      price: "R$ 79,90",
      period: "/mês",
      description: "Para empresas em crescimento que exigem mais recursos.",
      features: ["10 Contas de E-mail", "Performance Prioritária", "Monitoramento 24/7", "Backup Diário", "Suporte Prioritário"],
      button: "Escolher Plano",
      popular: true,
    },
    {
      name: "Corporativo",
      price: "R$ 96,90",
      period: "/mês",
      description: "Solução definitiva para grandes volumes e infraestrutura crítica.",
      features: ["E-mails Ilimitados", "Performance Máxima", "Uptime 99.99%", "Segurança Nível Bancário", "Gerente de Conta"],
      button: "Falar com Consultor",
      popular: false,
    },
  ];

  return (
    <section id="planos" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-accent-blue font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Planos por Hora</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 text-white">Escolha sua Potência</h2>
          <p className="text-white/40 text-xl font-medium">Hospedagem profissional com faturamento justo e transparente.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative p-10 rounded-[40px] border ${
                plan.popular ? "bg-accent-blue border-transparent glow-blue" : "glass border-white/5"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-accent-blue text-[10px] font-black uppercase tracking-widest rounded-full">
                  Mais Popular
                </span>
              )}
              <h3 className={`text-2xl font-black mb-4 tracking-tight ${plan.popular ? "text-white" : "text-white"}`}>
                {plan.name}
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-black text-white">{plan.price}</span>
                <span className={`text-sm font-bold ${plan.popular ? "text-white/70" : "text-white/30"}`}>{plan.period}</span>
              </div>
              <p className={`mb-8 text-sm font-medium leading-relaxed ${plan.popular ? "text-white/80" : "text-white/40"}`}>
                {plan.description}
              </p>
              <div className="space-y-4 mb-10">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <i className={`ri-checkbox-circle-fill ${plan.popular ? "text-white" : "text-accent-blue"}`}></i>
                    <span className={`text-sm font-bold tracking-tight ${plan.popular ? "text-white" : "text-white/80"}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              <button
                className={`w-full py-4 rounded-2xl text-[12px] font-black uppercase tracking-widest transition-all ${
                  plan.popular 
                    ? "bg-white text-accent-blue hover:bg-white/90" 
                    : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                }`}
              >
                {plan.button}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const feedbacks = [
    {
      name: "Ricardo Santos",
      role: "CTO @ TechFlow",
      text: "A BaronCloud transformou nossa operação. Saímos de quedas constantes para 100% de uptime e uma velocidade incrível.",
      avatar: "RS",
    },
    {
      name: "Ana Oliveira",
      role: "Founder @ GrowthSaaS",
      text: "O suporte deles é de outro nível. A estabilidade dos servidores é impressionante, nunca tivemos problemas.",
      avatar: "AO",
    },
    {
      name: "Marcos Lima",
      role: "CEO @ EduDigital",
      text: "Performance é tudo no nosso negócio. Com a BaronCloud, garantimos a melhor experiência para nossos usuários.",
      avatar: "ML",
    },
  ];

  return (
    <section id="feedback" className="py-32 bg-white/[0.01]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-accent-blue font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Feedback</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 text-white">O Que Dizem Nossos Clientes</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {feedbacks.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass p-10 rounded-[32px] relative"
            >
              <i className="ri-double-quotes-l text-4xl text-accent-blue/20 absolute top-8 left-8"></i>
              <p className="text-white/60 text-lg italic leading-relaxed mb-8 relative z-10">
                "{item.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent-blue/20 flex items-center justify-center text-accent-blue font-black">
                  {item.avatar}
                </div>
                <div>
                  <h4 className="text-white font-black tracking-tight">{item.name}</h4>
                  <p className="text-white/30 text-xs font-bold uppercase tracking-widest">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contato" className="py-24 border-t border-white/5 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent-blue/50 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-blue to-accent-purple rounded-xl flex items-center justify-center">
                <i className="ri-server-line text-white text-2xl"></i>
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">BARONCLOUD</span>
            </Link>
            <p className="text-white/40 text-lg leading-relaxed max-w-md mb-8 font-medium">
              Infraestrutura cloud de elite com faturamento por hora. 
              A solução definitiva para empresas que exigem alta performance e estabilidade.
            </p>
            <div className="flex gap-4">
              {["ri-linkedin-box-fill", "ri-facebook-box-fill", "ri-twitter-x-fill", "ri-instagram-line"].map((icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:bg-accent-blue hover:text-white transition-all">
                  <i className={`${icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Navegação</h4>
            <nav className="flex flex-col gap-4">
              {["Sobre", "Serviços", "Planos", "Feedback"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white/40 hover:text-accent-blue transition-colors text-[15px] font-bold tracking-tight"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Contato</h4>
            <div className="flex flex-col gap-6">
              <a href="mailto:suporte@baroncloud.com.br" className="group">
                <p className="text-white/20 text-[10px] font-black uppercase tracking-widest mb-1">E-mail</p>
                <p className="text-white/60 group-hover:text-white transition-colors font-bold">suporte@baroncloud.com.br</p>
              </a>
              <a href="https://wa.me/5500000000000" className="group">
                <p className="text-white/20 text-[10px] font-black uppercase tracking-widest mb-1">WhatsApp</p>
                <p className="text-white/60 group-hover:text-white transition-colors font-bold">+55 (00) 00000-0000</p>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/20 text-[11px] font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} BaronDesk. High Performance Infrastructure.
          </p>
          <div className="flex gap-8 text-[11px] font-bold uppercase tracking-widest text-white/20">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Testimonials />
      <Footer />
    </main>
  );
}
