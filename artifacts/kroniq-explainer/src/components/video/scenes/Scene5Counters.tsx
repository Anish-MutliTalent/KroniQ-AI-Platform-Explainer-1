import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { sceneTransitions } from '@/lib/video';

function Counter({ endValue, label, delay = 0, duration = 2, isString = false, textValue = "" }: {
  endValue: number;
  label: string;
  delay?: number;
  duration?: number;
  isString?: boolean;
  textValue?: string;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (isString) return;
    
    let startTimestamp: number | null = null;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // Easing out
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
  }, [endValue, delay, duration, isString]);

  return (
    <div className="flex flex-col items-center">
      <motion.div 
        className="text-[10vw] font-display font-bold text-white mb-2"
        initial={{ opacity: 0, y: 50, scale: 0.5 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay, type: "spring", stiffness: 200, damping: 20 }}
      >
        {isString ? textValue : value}
        {isString && <span className="text-green-500">+</span>}
      </motion.div>
      <motion.div 
        className="text-[2.5vw] font-body text-green-400 uppercase tracking-widest font-bold"
        initial={{ opacity: 0, filter: 'blur(10px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        transition={{ delay: delay + 0.5, duration: 0.5 }}
      >
        {label}
      </motion.div>
    </div>
  );
}

export function Scene5Counters() {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center bg-transparent z-10"
      variants={sceneTransitions.scaleFade}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="w-full max-w-[80vw] flex justify-between items-center mb-[10vh]">
        <Counter endValue={70} textValue="70" isString={true} label="models" delay={0.2} />
        <motion.div 
          className="w-[2px] h-[10vh] bg-white/20"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        />
        <Counter endValue={1} label="tab" delay={0.6} duration={1} />
        <motion.div 
          className="w-[2px] h-[10vh] bg-white/20"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        />
        <Counter endValue={0} label="switching" delay={1.0} duration={0.5} />
      </div>

      <motion.div
        className="text-[3vw] font-display font-medium text-white/80 text-center flex gap-[1vw]"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.1, delayChildren: 2.5 }
          }
        }}
      >
        {["70+", "models", "/", "One", "tab", "/", "Zero", "switching."].map((word, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } }
            }}
            className={word === '/' ? 'text-green-500' : ''}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}
