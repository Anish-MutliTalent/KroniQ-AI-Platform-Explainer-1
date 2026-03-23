import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { sceneTransitions, staggerConfigs, easings } from '@/lib/video';

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
    let currentTotal = 0;
    const intervals: NodeJS.Timeout[] = [];

    competitors.forEach((comp, index) => {
      const timeout = setTimeout(() => {
        currentTotal += comp.price;
        setTotal(currentTotal);
      }, 500 + index * 400); // Stagger timing matches the animation stagger
      intervals.push(timeout);
    });

    return () => intervals.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center bg-transparent z-10"
      variants={sceneTransitions.wipe}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="w-full max-w-4xl px-8 flex justify-between items-center relative">
        <motion.div 
          className="flex flex-col gap-[2vh]"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.4, delayChildren: 0.5 } }
          }}
        >
          {competitors.map((comp, idx) => (
            <motion.div 
              key={comp.name} 
              className="flex items-center gap-[2vw]"
              variants={{
                hidden: { opacity: 0, x: -50, filter: 'blur(10px)' },
                visible: { 
                  opacity: 1, 
                  x: 0, 
                  filter: 'blur(0px)',
                  transition: { type: 'spring', stiffness: 300, damping: 25 }
                }
              }}
            >
              <span className="text-[3vw] font-display font-medium text-white/80 w-[20vw]">{comp.name}</span>
              <motion.div
                className="bg-green-500/20 text-green-400 px-[1.5vw] py-[0.5vh] rounded-full text-[2vw] font-mono border border-green-500/30"
                initial={{ opacity: 0, scale: 0, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 0.5 + idx * 0.4 + 0.2, type: 'spring', stiffness: 400, damping: 20 }}
              >
                ${comp.price}/mo
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="flex flex-col items-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <span className="text-[2vw] text-white/50 mb-2">Total Monthly</span>
          <motion.div 
            className={`text-[8vw] font-bold font-mono ${total === 77 ? 'text-red-500 drop-shadow-[0_0_20px_rgba(239,68,68,0.5)]' : 'text-white'}`}
            animate={{ scale: total === 77 ? [1, 1.1, 1] : 1 }}
            transition={{ duration: 0.3 }}
          >
            ${total}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
