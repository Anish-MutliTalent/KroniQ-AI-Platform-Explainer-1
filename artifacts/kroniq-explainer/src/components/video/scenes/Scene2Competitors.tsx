import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const competitors = [
  { name: 'ChatGPT', price: 20 },
  { name: 'Claude', price: 20 },
  { name: 'Gemini', price: 10 },
  { name: 'Notion AI', price: 10 },
  { name: 'Midjourney', price: 10 },
  { name: 'ElevenLabs', price: 7 },
];

export function Scene2Competitors() {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      if (current < 77) {
        current += 1;
        setTotal(current);
      } else {
        clearInterval(interval);
      }
    }, 20); // Reach 77 in ~1.5s
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center z-10 px-[10vw]"
      initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }}
      animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
      exit={{ x: '100vw', opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex w-full max-w-7xl justify-between items-center">
        {/* Left Column - Chips */}
        <div className="flex flex-col gap-[2vh] w-[45%]">
          {competitors.map((comp, i) => (
            <motion.div
              key={comp.name}
              className="glass-panel py-[2vh] px-[2vw] flex justify-between items-center"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20, delay: i * 0.15 }}
            >
              <span className="text-white font-body text-[2vw]">{comp.name}</span>
              <span className="text-[#a1a1aa] font-mono text-[1.8vw]">${comp.price}/mo</span>
            </motion.div>
          ))}
        </div>

        {/* Right Column - Counter */}
        <div className="w-[45%] flex flex-col items-center justify-center">
          <motion.div
            className="text-[2.5vw] text-white font-body mb-[2vh]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            Your AI stack costs you
          </motion.div>
          <motion.div
            className={`font-display font-bold text-[12vw] tracking-tighter ${total === 77 ? 'text-[#ef4444]' : 'text-white'}`}
            animate={total === 77 ? { scale: [1, 1.1, 1] } : {}}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            ${total}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
