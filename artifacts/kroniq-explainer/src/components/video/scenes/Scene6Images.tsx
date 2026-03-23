import { motion } from 'framer-motion';

const models = [
  { name: "DALL·E 3", color: "from-blue-500/20 to-purple-500/20" },
  { name: "Stable Diffusion", color: "from-orange-500/20 to-red-500/20" },
  { name: "Midjourney", color: "from-indigo-500/20 to-blue-500/20" },
  { name: "Flux", color: "from-green-500/20 to-emerald-500/20" }
];

export function Scene6Images() {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center z-10"
      initial={{ clipPath: 'circle(0% at 50% 50%)' }}
      animate={{ clipPath: 'circle(150% at 50% 50%)' }}
      exit={{ scale: 1.5, opacity: 0, filter: 'blur(30px)', transition: { duration: 0.6 } }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="glass-panel w-[70vw] p-[3vw] flex flex-col relative"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1, scale: [1, 1.03] }}
        transition={{ 
          x: { type: 'spring', stiffness: 300, damping: 25 },
          opacity: { duration: 0.5 },
          scale: { duration: 4.5, delay: 0.5, ease: "linear" }
        }}
      >
        <div className="flex justify-between items-center mb-[4vh]">
          <h2 className="text-[3vw] font-display font-bold text-white">Image Generation</h2>
          <div className="bg-[#22c55e]/20 text-[#22c55e] px-[1vw] py-[0.5vh] rounded-full text-[1.2vw] font-body border border-[#22c55e]/30">
            Powered by 12 models
          </div>
        </div>

        <div className="grid grid-cols-2 gap-[2vw]">
          {models.map((model, i) => (
            <motion.div
              key={model.name}
              className="glass-input p-[1vw] flex flex-col gap-[1vh]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.15, type: "spring" }}
            >
              <div className={`w-full h-[15vh] rounded-[0.5vw] bg-gradient-to-br ${model.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <motion.div
                  className="absolute"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1 + i * 0.2, type: "spring", stiffness: 400 }}
                >
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </div>
              <span className="text-white/80 font-body text-[1.2vw] text-center">{model.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      <motion.div 
        className="mt-[4vh] text-[2vw] text-white/70 font-body"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        12 image models. One interface.
      </motion.div>
    </motion.div>
  );
}
