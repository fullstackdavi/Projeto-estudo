import { motion } from 'motion/react';
import { Laptop, Smartphone, Cpu, Wrench, Settings, Microscope } from 'lucide-react';
import { PixelCanvas } from './ui/pixel-canvas';

const services = [
  {
    icon: <Laptop className="w-8 h-8" />,
    title: "Conserto de Notebooks",
    desc: "Reparo de placas, troca de telas, teclados e upgrades de performance. Atendimento para Apple e principais marcas."
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Smartphones Premium",
    desc: "Substituição de telas originais, baterias e reparo em Face ID/Biometria com vedação de fábrica."
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Microssoldagem",
    desc: "Recuperação de placas-mãe danificadas, curtos-circuitos e trilhas rompidas com precisão microscópica."
  },
  {
    icon: <Microscope className="w-8 h-8" />,
    title: "Diagnóstico Avançado",
    desc: "Análise térmica e medição de componentes com equipamentos de laboratório de alta precisão."
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Manutenção Preventiva",
    desc: "Limpeza química, troca de pasta térmica premium (metal líquido) e otimização de sistemas de refrigeração."
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Recuperação de Dados",
    desc: "Extração de dados em dispositivos que não ligam ou sofreram danos por líquidos."
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16 md:mb-24 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl md:text-5xl font-bold mb-4"
            >
              Laboratório <span className="text-neon-cyan">Técnico.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-gray-400 text-lg"
            >
              Nossa infraestrutura é equipada com ferramentas de última geração para garantir o mais alto nível de precisão no reparo do seu dispositivo.
            </motion.p>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central line for the branching effect */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-blue/0 via-neon-cyan/20 to-neon-blue/0 transform md:-translate-x-1/2" />
          
          <div className="flex flex-col gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60, y: 20, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex items-center md:justify-between w-full ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Visual marker on the center line */}
                <div className="absolute left-[20px] md:left-1/2 top-1/2 w-4 h-4 rounded-full bg-black border-2 border-neon-cyan shadow-[0_0_10px_rgba(138,230,255,0.6)] transform -translate-x-1/2 -translate-y-1/2 z-10" />

                <div className="hidden md:block w-[45%]" />
                
                <div className="ml-[60px] md:ml-0 w-full md:w-[45%]">
                  <div className="glass-card p-8 group cursor-default h-full relative overflow-hidden isolate transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.05] hover:border-[#8ae6ff]/30 hover:shadow-[0_10px_40px_-10px_rgba(138,230,255,0.15)]">
                    <PixelCanvas colors={["#8ae6ff", "#00f3ff", "#ffffff", "#00aaff"]} gap={5} speed={35} />
                    
                    {/* Connecting branch line */}
                    <div className={`hidden md:block absolute top-[50%] w-[100px] h-px bg-gradient-to-r from-neon-cyan/50 to-transparent transform -translate-y-1/2 -z-10 ${
                      index % 2 === 0 ? '-left-[100px]' : '-right-[100px] rotate-180'
                    }`} />
                    <div className="md:hidden absolute top-[50%] left-[-60px] w-[60px] h-px bg-gradient-to-r from-neon-cyan/50 to-transparent transform -translate-y-1/2 -z-10" />
                    
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-neon-blue mb-6 group-hover:scale-110 group-hover:bg-neon-blue/10 transition-all duration-300 relative z-10 pointer-events-none">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-medium text-white mb-3 font-display relative z-10 pointer-events-none">{service.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm relative z-10 pointer-events-none">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
