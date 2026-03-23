import { motion } from 'framer-motion';

export function Scene7Music() {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center z-10"
      initial={{ scale: 0.8, opacity: 0, filter: 'blur(20px)' }}
      animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
      exit={{ scale: 1.2, opacity: 0, filter: 'blur(20px)', transition: { duration: 0.6 } }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="glass-panel w-[60vw] p-[3vw] flex flex-col items-center relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-full h-[30vh] bg-gradient-to-b from-[#22c55e]/10 to-transparent pointer-events-none" />
        
        <div className="w-full flex justify-between items-center mb-[6vh] z-10">
          <h2 className="text-[2.5vw] font-display font-bold text-white">Music Generation</h2>
          <div className="bg-white/10 text-white/80 px-[1vw] py-[0.5vh] rounded-full text-[1vw] font-body border border-white/20">
            Suno · Udio · Custom
          </div>
        </div>

        {/* Waveform */}
        <div className="flex items-end justify-center gap-[0.4vw] h-[20vh] w-full mb-[6vh] z-10">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="w-[1vw] bg-[#22c55e] rounded-t-sm"
              animate={{
                height: [
                  `${Math.random() * 20 + 10}%`,
                  `${Math.random() * 80 + 20}%`,
                  `${Math.random() * 20 + 10}%`
                ]
              }}
              transition={{
                duration: 0.5 + Math.random() * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.05
              }}
            />
          ))}
        </div>

        <div className="w-full glass-input p-[1.5vw] flex items-center justify-between z-10">
          <div className="flex items-center gap-[1.5vw]">
            <motion.div 
              className="w-[3vw] h-[3vw] rounded-full bg-[#22c55e] flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.5)]"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-[1vw] h-[1vw] bg-black ml-[0.2vw]" style={{ clipPath: 'polygon(0 0, 0 100%, 100% 50%)' }} />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-white font-body text-[1.2vw]">Product Launch Theme</span>
              <span className="text-[#22c55e] font-mono text-[0.9vw]">AI Composed</span>
            </div>
          </div>
          <span className="text-white/50 font-mono text-[1.2vw]">0:00 / 0:30</span>
        </div>
      </motion.div>
      
      <motion.div 
        className="mt-[4vh] text-[2.5vw] text-white font-body font-medium"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        AI-composed music. In seconds.
      </motion.div>
    </motion.div>
  );
}
