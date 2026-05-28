import { motion } from 'motion/react';
import { MapPin, MessageCircle, ArrowUpRight } from 'lucide-react';
import CyberneticGridShader from './ui/cybernetic-grid-shader';

export default function Contact() {
  return (
    <section id="contato" className="py-32 relative bg-[#030303] border-t border-white/5 overflow-hidden">
      <CyberneticGridShader />
      {/* Luxury minimalist top line glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50 z-10"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[100px] bg-white/5 blur-[100px] rounded-full pointer-events-none z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white"
            >
              Inicie seu <br className="hidden md:block"/>
              <span className="text-white/40 italic font-light">Atendimento.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-gray-400 text-lg mb-12 max-w-md font-light leading-relaxed"
            >
              Nossa equipe de engenharia está pronta para receber seu equipamento e realizar uma análise profunda com absoluta descrição e precisão.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              {/* Luxury Contact Item 1 */}
              <a 
                href="https://maps.google.com/?q=R.+Rio+Xingu,+705+-+Riacho+das+Pedras,+Contagem" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-6 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(255,255,255,0.03)]">
                  <MapPin className="text-white/70 w-5 h-5 group-hover:text-white transition-colors duration-500" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-medium text-base mb-1 tracking-wide">Laboratório Físico</h4>
                  <p className="text-gray-500 text-sm font-light">
                    R. Rio Xingu, 705, Contagem - MG
                  </p>
                </div>
                <ArrowUpRight className="text-white/20 group-hover:text-white/60 transition-colors duration-500 w-5 h-5" />
              </a>

              {/* Luxury Contact Item 2 */}
              <a 
                href="https://wa.me/5531985624340" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-6 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(255,255,255,0.03)]">
                  <MessageCircle className="text-white/70 w-5 h-5 group-hover:text-white transition-colors duration-500" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-medium text-base mb-1 tracking-wide">Atendimento Direto</h4>
                  <p className="text-gray-500 text-sm font-light">
                    (31) 98562-4340
                  </p>
                </div>
                <ArrowUpRight className="text-white/20 group-hover:text-white/60 transition-colors duration-500 w-5 h-5" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.4, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Cinematic frame for map */}
            <div className="absolute -inset-1 bg-gradient-to-br from-white/10 to-transparent rounded-[2rem] blur-sm opacity-50"></div>
            <div className="bg-[#050505] border border-white/10 rounded-[2rem] h-[450px] lg:h-[550px] w-full relative overflow-hidden flex items-center justify-center group p-2">
              <div className="relative w-full h-full rounded-3xl overflow-hidden bg-[#030303]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.569947833583!2d-44.0436906239563!3d-19.942544738725895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa695f7db49d7af%3A0xc64e1e3b0b5d564!2sR.%20Rio%20Xingu%2C%20705%20-%20Riacho%20das%20Pedras%2C%20Contagem%20-%20MG%2C%2032265-290!5e0!3m2!1spt-BR!2sbr!4v1716942000000!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(120%) brightness(80%)' }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 z-0 opacity-40 group-hover:opacity-70 transition-opacity duration-1000 ease-in-out"
                ></iframe>
                
                {/* Overlay vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-transparent to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-0 border border-white/5 rounded-3xl z-20 pointer-events-none"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
