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
  const [swept, setSwept] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      if (current < 77) {
        current += 2;
        setTotal(Math.min(current, 77));
      } else {
        clearInterval(interval);
        setTimeout(() => setSwept(true), 600);
      }
    }, 18);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center z-10 px-[8vw]"
      initial={{ clipPath: 'inset(0 100% 0 0)' }}
      animate={{ clipPath: 'inset(0 0% 0 0)' }}
      exit={{ x: '100vw', opacity: 0, transition: { duration: 0.22, ease: [0.4, 0, 1, 1] } }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex w-full max-w-[90vw] justify-between items-center gap-[6vw]">

        {/* Left — competitor chips */}
        <div className="flex flex-col gap-[1.4vh] w-[50%]">
          <motion.p
            className="text-white/40 font-body text-[1.4vw] mb-[1vh] uppercase tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            Your current stack
          </motion.p>
          {competitors.map((comp, i) => (
            <motion.div
              key={comp.name}
              className="glass-panel py-[1.6vh] px-[2vw] flex justify-between items-center"
              initial={{ x: -80, opacity: 0 }}
              animate={swept ? { x: '120vw', opacity: 0 } : { x: 0, opacity: 1 }}
              transition={swept
                ? { duration: 0.25, delay: i * 0.04, ease: [0.4, 0, 1, 1] }
                : { type: 'spring', stiffness: 380, damping: 28, delay: i * 0.07 }
              }
            >
              <span className="text-white font-body font-medium text-[1.8vw]">{comp.name}</span>
              <span className="text-white/50 font-mono text-[1.5vw]">${comp.price}/mo</span>
            </motion.div>
          ))}
        </div>

        {/* Right — counter */}
        <div className="w-[44%] flex flex-col items-center justify-center">
          <motion.p
            className="text-white/50 font-body text-[1.8vw] mb-[1.5vh] text-center"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            Total monthly cost
          </motion.p>
          <motion.div
            className="font-display font-bold tracking-[-0.04em] leading-none"
            style={{
              fontSize: '14vw',
              color: total === 77 ? '#ef4444' : '#ffffff',
            }}
            animate={total === 77 ? {
              textShadow: ['0 0 0px rgba(239,68,68,0)', '0 0 60px rgba(239,68,68,0.6)', '0 0 30px rgba(239,68,68,0.3)']
            } : {}}
            transition={{ duration: 0.5 }}
          >
            ${total}
          </motion.div>
          <motion.p
            className="text-white/30 font-mono text-[1.2vw] mt-[1vh]"
            initial={{ opacity: 0 }}
            animate={{ opacity: total === 77 ? 1 : 0 }}
          >
            per month · wasted
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
