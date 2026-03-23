import { motion } from 'framer-motion';

export function Scene2cOrchestration() {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center z-20 px-[5vw] overflow-hidden bg-[#050508]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ scale: 1.15, opacity: 0, filter: 'blur(20px)', zIndex: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } } as any}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Fixed Overlay Headers */}
      <motion.div 
        className="absolute top-[12vh] flex flex-col items-center z-30"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="glass-input px-[1.2vw] py-[0.6vh] rounded-full border border-[#22c55e]/30 flex items-center gap-[0.6vw] mb-[2vh]">
          <div className="w-[0.5vw] h-[0.5vw] rounded-full bg-[#22c55e] shadow-[0_0_8px_#22c55e]" />
          <span className="text-white font-mono text-[0.85vw]">Powered by KroniQ Intelligence</span>
        </div>
        <h2 className="text-[4vw] font-display font-bold text-white tracking-tight mb-[1vh]">
          Smarter Than You Think
        </h2>
        <p className="text-[1.3vw] font-body text-white/50 max-w-[55vw] text-center leading-relaxed">
          Our proprietary AI orchestration system automatically routes your <br /> requests to the perfect model, every time.
        </p>
      </motion.div>

      {/* 3D Stage */}
      <motion.div
        className="w-[80vw] h-[60vh] mt-[20vh] relative flex flex-col gap-[2vh] perspective-[1500px]"
        initial={{ rotateX: 45, rotateY: -10, rotateZ: -5, scale: 0.8 }}
        animate={{ rotateX: 20, rotateY: 0, rotateZ: 0, scale: 1.05 }}
        transition={{ duration: 4.5, ease: "easeOut" }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Row 1 */}
        <motion.div 
          className="w-full glass-panel border border-[#22c55e]/40 p-[2vw] flex justify-between items-center shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 300, damping: 25 }}
        >
          <div>
            <div className="flex items-center gap-[1vw] mb-[1vh]">
              <div className="w-[3vw] h-[3vw] bg-[#22c55e]/10 rounded-[0.5vw] flex items-center justify-center border border-[#22c55e]/20">
                <div className="w-[1.5vw] h-[1.5vw] bg-[#22c55e] rounded-sm blur-[2px]" />
              </div>
              <h3 className="text-white font-display font-bold text-[1.8vw]">Interpret Prompt</h3>
            </div>
            <p className="text-white/50 text-[1vw] max-w-[40vw]">AI deeply analyzes your intent, context, and nuances to understand exactly what you need.</p>
          </div>
          <div className="flex flex-col gap-[0.8vh] w-[20vw]">
            <div className="flex justify-between items-center"><div className="h-[0.6vh] w-[80%] bg-gradient-to-r from-[#22c55e]/20 to-[#22c55e] rounded-full" /><span className="text-[#22c55e] text-[0.8vw] font-mono">Intent</span></div>
            <div className="flex justify-between items-center"><div className="h-[0.6vh] w-[60%] bg-gradient-to-r from-[#22c55e]/20 to-[#22c55e] rounded-full" /><span className="text-[#22c55e] text-[0.8vw] font-mono">Context</span></div>
            <div className="flex justify-between items-center"><div className="h-[0.6vh] w-[95%] bg-gradient-to-r from-[#22c55e]/20 to-[#22c55e] rounded-full" /><span className="text-[#22c55e] text-[0.8vw] font-mono">Nuance</span></div>
          </div>
        </motion.div>

        {/* Row 2 */}
        <div className="flex gap-[2vh] h-[22vh]">
          {['Auto Enhance', 'User Analytics', 'Model Routing', 'Orchestration'].map((title, i) => (
            <motion.div 
              key={title}
              className="flex-1 glass-panel border border-[#22c55e]/20 p-[1.5vw] flex flex-col justify-between"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 + i * 0.1, type: 'spring', stiffness: 300, damping: 25 }}
            >
              <div className="flex items-center gap-[0.5vw]">
                <div className="w-[1.5vw] h-[1.5vw] bg-[#22c55e]/20 rounded-sm" />
                <h4 className="text-white font-bold text-[1.2vw] leading-tight">{title}</h4>
              </div>
              <div className="h-[4vh] w-full bg-white/5 rounded-sm overflow-hidden flex items-end gap-[0.2vw] p-[0.3vw]">
                {[...Array(5)].map((_, j) => (
                  <motion.div key={j} className="flex-1 bg-[#22c55e]/60 rounded-[1px]"
                    animate={{ height: [`${20 + Math.random() * 80}%`, `${20 + Math.random() * 80}%`] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Row 3 */}
        <div className="flex gap-[2vh] h-[16vh]">
          <motion.div 
            className="flex-1 glass-panel border border-[#22c55e]/20 p-[1.5vw] flex items-center justify-between"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1, type: 'spring', stiffness: 300, damping: 25 }}
          >
            <div>
              <div className="flex items-center gap-[0.5vw] mb-[0.5vh]">
                <div className="w-[1.8vw] h-[1.8vw] bg-[#22c55e]/20 rounded-full" />
                <h4 className="text-white font-bold text-[1.4vw]">Verify Output</h4>
              </div>
              <p className="text-white/40 text-[0.9vw]">Validates quality, accuracy & safety</p>
            </div>
            <div className="flex gap-[1vw] text-[#22c55e] text-[0.9vw]">
              <span>✓ Quality</span><span>✓ Accuracy</span><span>✓ Safety</span>
            </div>
          </motion.div>

          <motion.div 
            className="flex-1 glass-panel border border-[#22c55e] p-[1.5vw] flex items-center justify-between"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, type: 'spring', stiffness: 300, damping: 25 }}
            style={{ boxShadow: 'inset 0 0 40px rgba(34,197,94,0.1)' }}
          >
            <div>
              <div className="flex items-center gap-[0.5vw] mb-[0.5vh]">
                <div className="w-[1.8vw] h-[1.8vw] bg-[#22c55e] rounded-sm shadow-[0_0_15px_#22c55e]" />
                <h4 className="text-white font-bold text-[1.5vw]">Final Response</h4>
              </div>
              <p className="text-white/60 text-[0.9vw]">Polished, accurate output delivered</p>
            </div>
            <div className="px-[1.5vw] py-[0.8vh] bg-[#22c55e]/20 text-[#22c55e] font-display font-medium rounded-full border border-[#22c55e]/40">
              Ready
            </div>
          </motion.div>
        </div>

      </motion.div>
    </motion.div>
  );
}
