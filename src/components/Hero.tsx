import { motion } from 'motion/react';
import ParticleBackground from './ParticleBackground';
import { HeroLamp } from './ui/hero-lamp';
import { NeonButton } from './ui/neon-button';
import { SlideButton } from './ui/slide-button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Video Background layer */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="https://cdn.pixabay.com/video/2023/10/08/184104-872413674_medium.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#050505_100%)]"></div>
      </div>
      
      {/* 3D/Particle overlay */}
      <ParticleBackground />

      {/* Lamp visual effect wrapper */}
      <HeroLamp />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1] mb-6 text-white"
        >
          Inverter.<span className="text-[#8ae6ff] drop-shadow-[0_0_12px_rgba(138,230,255,0.5)]">tech</span>
        </motion.h1>

        <motion.div
           initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
           animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
           transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
           className="mb-10 w-full flex justify-center"
        >
          <SlideButton onSuccess={() => {
            document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
          }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <NeonButton
            asChild
            variant="solid"
            size="lg"
            className="group font-medium overflow-hidden"
          >
            <a
              href="https://wa.me/5531985624340"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              Fazer Orçamento
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </NeonButton>
          
          <NeonButton
            asChild
            variant="default"
            size="lg"
            className="font-medium"
          >
            <a
              href="#servicos"
              className="flex items-center justify-center gap-2"
            >
              Nossos Serviços
            </a>
          </NeonButton>
        </motion.div>
      </div>
    </section>
  );
}
