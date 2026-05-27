import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Carlos Eduardo",
    role: "Engenheiro de Software",
    content: "O nível de profissionalismo da Inverter é absurdo. Salvaram a placa-mãe do meu MacBook Pro que a autorizada havia condenado. Atendimento impecável e transparente.",
    rating: 5
  },
  {
    name: "Mariana Silva",
    role: "Designer Gráfica",
    content: "Ambiente que respira tecnologia e confiança. Deixei meu iPhone para troca de tela e o serviço foi de altíssimo padrão, mantendo a vedação original e o True Tone.",
    rating: 5
  },
  {
    name: "Rodrigo Almeida",
    role: "Empresário",
    content: "Excelente laboratório. Fizeram um diagnóstico que três outras assistências não conseguiram. Preço justo pela qualidade premium que entregam.",
    rating: 5
  }
];

export default function Reviews() {
  return (
    <section id="depoimentos" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl md:text-5xl font-bold mb-4"
          >
            Reputação <span className="text-gray-500">Inquestionável.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            O que dizem os clientes que confiam seus equipamentos à nossa engenharia.
          </motion.p>
        </div>

        <div className="relative overflow-hidden w-full py-10 group">
          <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

          <motion.div 
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.4, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 35,
              }}
              whileHover={{ animationPlayState: "paused" }}
              className="flex w-max gap-6 px-6"
              style={{ WebkitAnimationPlayState: "inherit" }}
            >
              {[...reviews, ...reviews, ...reviews, ...reviews, ...reviews, ...reviews].map((review, i) => (
                <div
                  key={i}
                  className="w-[320px] md:w-[420px] shrink-0 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col relative group transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.05] hover:border-[#8ae6ff]/30 hover:shadow-[0_10px_40px_-10px_rgba(138,230,255,0.15)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8ae6ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                  <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5 group-hover:text-[#8ae6ff]/10 transition-colors duration-500" />
                  
                  <div className="flex gap-1 mb-6 relative z-10">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-neon-blue text-neon-blue drop-shadow-[0_0_5px_rgba(0,243,255,0.5)]" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mb-8 flex-1 leading-relaxed text-sm md:text-base relative z-10">
                    "{review.content}"
                  </p>
                  
                  <div className="relative z-10 pt-4 border-t border-white/5">
                    <h5 className="font-semibold text-white font-display text-lg">{review.name}</h5>
                    <p className="text-sm text-[#8ae6ff]/70 font-medium">{review.role}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
