import { motion } from 'framer-motion';

export function Scene11CTA() {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-[#050508]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }} // Fade to dark for loop
    >
      <div className="relative flex flex-col items-center z-10 w-full h-full justify-center">
        {/* Pulsing radial gradient */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#22c55e] rounded-full mix-blend-screen"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            filter: ['blur(100px)', 'blur(120px)', 'blur(100px)']
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.img
          src={`${import.meta.env.BASE_URL}kroniq-logo.png`}
          alt="KroniQ Logo"
          className="w-[20vw] mb-[8vh] relative z-20"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
        />

        <motion.div
          className="glass-panel px-[5vw] py-[4vh] flex flex-col items-center relative z-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
        >
          <span className="text-[3.5vw] font-body text-white mb-2">Try free at</span>
          <span className="text-[7vw] font-display font-bold text-[#22c55e] tracking-tight leading-none">
            kroniqai.com
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}
