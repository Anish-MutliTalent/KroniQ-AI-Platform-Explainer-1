import { motion } from 'framer-motion';

const models = [
  { name: "DALL·E 3", color: "from-[#1a1060] to-[#2d1b69]" },
  { name: "Stable Diffusion", color: "from-[#1a0a0a] to-[#3d1515]" },
  { name: "Midjourney", color: "from-[#0a0a2a] to-[#1a1060]" },
  { name: "Flux Pro", color: "from-[#051a0a] to-[#0d3318]" },
];

export function Scene5Images() {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center z-10"
      initial={{ clipPath: 'circle(0% at 50% 50%)' }}
      animate={{ clipPath: 'circle(150% at 50% 50%)' }}
      exit={{ scale: 1.3, opacity: 0, filter: 'blur(35px)', transition: { duration: 0.2, ease: [0.4, 0, 1, 1] } }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="glass-panel w-[72vw] p-[3vw] flex flex-col"
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1, scale: [1, 1.025] }}
        transition={{
          x: { type: 'spring', stiffness: 380, damping: 28 },
          opacity: { duration: 0.35 },
          scale: { duration: 4.5, delay: 0.3, ease: 'linear' }
        }}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-[3.5vh]">
          <h2 className="text-[3vw] font-display font-bold text-white tracking-tight">Image Generation</h2>
          <div className="glass-accent rounded-full px-[1vw] py-[0.6vh] text-[#22c55e] text-[1.1vw] font-body font-medium">
            12 models available
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-[2vw]">
          {models.map((model, i) => (
            <motion.div
              key={model.name}
              className="glass-input p-[1.2vw] flex flex-col gap-[1.2vh]"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 400, damping: 28 }}
            >
              <div className={`w-full h-[16vh] rounded-[0.8vw] bg-gradient-to-br ${model.color} relative overflow-hidden flex items-center justify-center`}>
                {/* Shimmer */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/6 to-transparent"
                  style={{ width: '200%', left: '-50%' }}
                  animate={{ x: ['-60%', '60%'] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
                />
                {/* Checkmark */}
                <motion.div
                  className="relative z-10"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.15, type: 'spring', stiffness: 500, damping: 22 }}
                >
                  <svg width="2.2vw" height="2.2vw" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="11" fill="rgba(34,197,94,0.2)" stroke="rgba(34,197,94,0.5)" strokeWidth="1" />
                    <path d="M7 12l3.5 3.5L17 9" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </div>
              <span className="text-white/80 font-body text-[1.2vw] text-center font-medium">{model.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="mt-[3.5vh] text-[2.2vw] text-white/65 font-body tracking-wide"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
      >
        12 image models. <span className="text-white/90 font-medium">One interface.</span>
      </motion.div>
    </motion.div>
  );
}
