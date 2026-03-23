import { motion } from 'framer-motion';

const models = [
  { name: "Sora 2", color: "from-[#1a2b4c] to-[#0a152e]", desc: "Ultra-realistic cinematic" },
  { name: "Veo 3.1 Quality", color: "from-[#1d352b] to-[#0d1a15]", desc: "High-fidelity motion" },
  { name: "Kling 3.0", color: "from-[#2b2b2b] to-[#111111]", desc: "Advanced physics engine" },
  { name: "Runway Gen-4", color: "from-[#2d1b69] to-[#1a1040]", desc: "World-class consistency" },
  { name: "Wan 2.6", color: "from-[#35152b] to-[#1e0a18]", desc: "Stylized artistic motion" },
  { name: "Pika 2.2", color: "from-[#4c2b1a] to-[#2e150a]", desc: "Dynamic character AI" },
];

export function Scene5bVideo() {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center z-10"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ scale: 1.15, opacity: 0, filter: 'blur(20px)', zIndex: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } } as any}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div 
        className="w-full h-full flex flex-col items-center justify-center p-[2vw]"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      >
        <motion.div
          className="glass-panel w-[82vw] p-[3vw] flex flex-col"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1, scale: [1, 1.01] }}
          transition={{
            y: { type: 'spring', stiffness: 350, damping: 25 },
            opacity: { duration: 0.4 },
            scale: { duration: 3.5, delay: 0.3, ease: 'linear' }
          }}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-[4vh]">
            <h2 className="text-[3.2vw] font-display font-bold text-white tracking-tight text-shadow-glow">Video Generation</h2>
            <div className="glass-accent rounded-full px-[1.2vw] py-[0.8vh] text-[#22c55e] text-[1.2vw] font-body font-medium shadow-[0_0_15px_rgba(34,197,94,0.3)]">
              6 cinematic models
            </div>
          </div>

          {/* Grid - 3x2 for Video Models */}
          <div className="grid grid-cols-3 gap-[2.5vw]">
            {models.map((model, i) => (
              <motion.div
                key={model.name}
                className="glass-input p-[1.5vw] flex flex-col gap-[0.8vh] group hover:bg-white/5 transition-colors duration-300 border-l-2 border-l-[#22c55e]/30"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, type: 'spring', stiffness: 400, damping: 30 }}
              >
                <div className="flex flex-col gap-[0.2vh]">
                  <span className="text-white font-display font-bold text-[1.5vw] tracking-tight group-hover:text-[#22c55e] transition-colors">{model.name}</span>
                  <span className="text-white/40 font-body text-[0.9vw] leading-tight">{model.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-[4vh] text-[2.4vw] text-white/70 font-body tracking-wide"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          Prompt to video. <span className="text-[#22c55e] font-semibold">Perfect every time.</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
