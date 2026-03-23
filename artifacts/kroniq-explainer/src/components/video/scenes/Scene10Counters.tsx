import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Counter({ endValue, label, delay = 0, isString = false, textValue = "", highlight = false }: {
  endValue: number;
  label: string;
  delay?: number;
  isString?: boolean;
  textValue?: string;
  highlight?: boolean;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (isString) return;
    
    let startTimestamp: number | null = null;
    let animationFrame: number;
    const duration = 2; // 2 seconds

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(easeOutProgress * endValue));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    const timeout = setTimeout(() => {
      animationFrame = requestAnimationFrame(step);
    }, delay * 1000);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(animationFrame);
    };
  }, [endValue, delay, isString]);

  return (
    <motion.div 
      className="glass-panel w-[25vw] h-[30vh] flex flex-col items-center justify-center relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, type: "spring", stiffness: 200, damping: 20 }}
    >
      {highlight && (
        <div className="absolute inset-0 bg-gradient-to-b from-[#22c55e]/10 to-transparent pointer-events-none" />
      )}
      <motion.div 
        className={`text-[8vw] font-display font-bold leading-none tracking-tighter ${highlight ? 'text-[#22c55e]' : 'text-white'}`}
      >
        {isString ? textValue : value}
      </motion.div>
      <div className="text-[1.5vw] font-body text-white/70 uppercase tracking-widest mt-2 font-medium">
        {label}
      </div>
    </motion.div>
  );
}

export function Scene10Counters() {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ scale: 1.2, opacity: 0, transition: { duration: 0.6 } }}
    >
      <div className="flex gap-[3vw] mb-[8vh]">
        <Counter endValue={70} textValue="70+" isString={true} label="Models Available" delay={0.2} highlight={true} />
        <Counter endValue={1} label="Tab Open" delay={0.6} />
        <Counter endValue={0} label="Switching Required" delay={1.0} />
      </div>

      <motion.div
        className="text-[2.5vw] font-body text-white/80 flex gap-[1vw]"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.1, delayChildren: 2 }
          }
        }}
      >
        {["70+ models", "/", "One tab", "/", "Zero switching."].map((word, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } }
            }}
            className={word === '/' ? 'text-[#22c55e]' : 'font-medium'}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}
