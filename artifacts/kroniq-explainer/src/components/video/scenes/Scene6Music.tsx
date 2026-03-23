import { motion } from 'framer-motion';

export function Scene6Music() {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center z-10"
      initial={{ opacity: 0, clipPath: 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)' }}
      animate={{ opacity: 1, clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
      exit={{ scale: 1.15, opacity: 0, filter: 'blur(20px)', zIndex: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } } as any}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div 
        className="w-full h-full flex flex-col items-center justify-center"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: "linear" }}
      >
        <motion.div
          className="glass-panel w-[62vw] p-[3vw] flex flex-col items-center relative overflow-hidden"
        >
          {/* Green light leak from top */}
          <div className="absolute top-0 left-0 right-0 h-[35%] pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, rgba(34,197,94,0.08), transparent)' }} />

          <div className="w-full flex justify-between items-center mb-[4vh] z-10">
            <h2 className="text-[2.8vw] font-display font-bold text-white tracking-tight">Voice Studio</h2>
            <div className="glass-input text-white/70 px-[1.2vw] py-[0.6vh] text-[1vw] font-body shadow-[0_0_10px_rgba(255,255,255,0.05)]">
              ElevenLabs · OpenAI TTS · Azure
            </div>
          </div>

          {/* Waveform — sinusoidal heights per bar */}
          <div className="flex items-end justify-center gap-[0.5vw] h-[22vh] w-full mb-[5vh] z-10">
            {[...Array(44)].map((_, i) => {
              const baseH = 20 + Math.sin(i * 0.42) * 18;
              const peakH = 40 + Math.sin(i * 0.42 + 1.2) * 48;
              return (
                <motion.div
                  key={i}
                  className="flex-1 rounded-full"
                  style={{
                    background: i % 3 === 0
                      ? 'linear-gradient(to top, #166534, #22c55e)'
                      : i % 3 === 1
                      ? 'linear-gradient(to top, #0d4a24, #4ade80)'
                      : 'linear-gradient(to top, #052010, #22c55e)',
                    opacity: 0.6 + (i % 5) * 0.08,
                  }}
                  animate={{ height: [`${baseH}%`, `${peakH}%`, `${baseH}%`] }}
                  transition={{
                    duration: 0.45 + (i % 5) * 0.12,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.035,
                  }}
                />
              );
            })}
          </div>

          {/* Track info */}
          <div className="w-full glass-input p-[1.8vw] flex items-center justify-between z-10">
            <div className="flex items-center gap-[1.5vw]">
              <motion.div
                className="w-[3.2vw] h-[3.2vw] rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: 'radial-gradient(circle, #22c55e, #166534)', boxShadow: '0 0 20px rgba(34,197,94,0.4)' }}
                animate={{ scale: [1, 1.08, 1], boxShadow: ['0 0 20px rgba(34,197,94,0.4)', '0 0 35px rgba(34,197,94,0.6)', '0 0 20px rgba(34,197,94,0.4)'] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              >
                <div className="w-[1vw] h-[1vw] bg-black ml-[0.2vw]" style={{ clipPath: 'polygon(0 0, 0 100%, 100% 50%)' }} />
              </motion.div>
              <div>
                <p className="text-white font-body text-[1.2vw] font-medium">Hyper-Realistic TTS</p>
                <p className="text-[#22c55e] font-mono text-[0.9vw]">Speech Synthesis · Voice Cloning</p>
              </div>
            </div>
            <div className="relative w-[15vw] h-[4px] bg-white/10 rounded-full overflow-hidden mx-[2vw] flex-1">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-[#22c55e] rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2.2, ease: "linear" }}
              />
            </div>
            <div className="text-white/40 font-mono text-[1.2vw]">0:30</div>
          </div>
        </motion.div>

        <motion.div
          className="mt-[4vh] text-[2.4vw] text-white font-body font-medium"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          Studio-quality voice. <span className="text-[#22c55e]">In seconds.</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
