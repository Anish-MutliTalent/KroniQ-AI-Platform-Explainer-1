import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const roles = ["Agency", "Team", "Marketing", "Brand", "Growth"];

export function Scene2bIntro() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex(current => (current + 1) % roles.length);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center z-10 overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ scale: 1.15, opacity: 0, filter: 'blur(20px)', zIndex: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } } as any}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div 
        className="w-full h-full flex flex-col items-center justify-center px-[8vw]"
        initial={{ scale: 1, y: 15 }}
        animate={{ scale: 1.05, y: -15 }}
        transition={{ duration: 4, ease: "linear" }}
      >
        <div className="flex flex-col items-center text-center max-w-[80vw]">
          <motion.h1 
            className="text-[6.5vw] font-display font-bold text-white tracking-tight leading-[1.1] mb-[3vh]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 400, damping: 30 }}
          >
            Your AI Growth Workspace <br />
            for Your{' '}
            <span className="text-[#22c55e] inline-flex items-center relative">
              <div className="relative inline-block min-w-[30vw] text-left">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    className="absolute top-0 left-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20, transition: { duration: 0.15 } } as any}
                    transition={{ duration: 0.3 }}
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
                {/* Invisible spacer to maintain layout */}
                <span className="invisible text-[6.5vw]">{roles[0]}</span>
              </div>
              <motion.span
                className="inline-block w-[0.8vw] h-[6.5vw] bg-[#22c55e] ml-[1vw] translate-y-[-0.5vh]"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
              />
            </span>
          </motion.h1>

          <motion.p 
            className="text-[2vw] font-body text-white/50 mb-[4vh] tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Multi-model AI • Content + social + creative — one workspace
          </motion.p>

          <motion.p 
            className="text-[1.8vw] font-body text-white/70 max-w-[70vw] leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Ship LinkedIn posts, X threads, Instagram-ready visuals, and launch videos with <span className="text-white font-bold">one AI layer</span> — not five different tabs.
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
}
