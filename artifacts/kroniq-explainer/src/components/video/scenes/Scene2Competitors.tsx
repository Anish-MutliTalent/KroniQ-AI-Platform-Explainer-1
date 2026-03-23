import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

const CanvaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[1.2vw] h-[1.2vw] text-[#00c4cc]" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1-6h2v4h-2V10z" />
  </svg>
);

const competitors = [
  { name: 'ChatGPT Plus', price: 20, icon: <img src={`${import.meta.env.BASE_URL}chatgpt.png`} className="w-[1.4vw] h-[1.4vw] object-contain invert" alt="ChatGPT" /> },
  { name: 'Claude Pro', price: 20, icon: <img src={`${import.meta.env.BASE_URL}claude.png`} className="w-[1.4vw] h-[1.4vw] object-contain" alt="Claude" /> },
  { name: 'Leonardo AI', price: 24, icon: <img src={`${import.meta.env.BASE_URL}leonardo.png`} className="w-[1.4vw] h-[1.4vw] object-contain" alt="Leonardo" /> },
  { name: 'Canva Pro', price: 15, icon: <CanvaIcon /> },
  { name: 'Perplexity Pro', price: 20, icon: <img src={`${import.meta.env.BASE_URL}perplexity.png`} className="w-[1.4vw] h-[1.4vw] object-contain" alt="Perplexity" /> },
  { name: 'Runway Pro', price: 35, icon: <img src={`${import.meta.env.BASE_URL}runway.png`} className="w-[1.4vw] h-[1.4vw] object-contain invert" alt="Runway" /> },
];

export function Scene2Competitors() {
  const [total, setTotal] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [cursorColor, setCursorColor] = useState('#ffffff');

  useEffect(() => {
    let isActive = true;
    let current = 0;
    const counterInterval = setInterval(() => {
      if (current < 134) {
        current += 5;
        setTotal(Math.min(current, 134));
      } else {
        clearInterval(counterInterval);
      }
    }, 15);
    
    const runTypingAnimation = async () => {
      const text1 = "Your current stack";
      
      await sleep(200);
      
      for (let i = 1; i <= text1.length; i++) {
        if (!isActive) return;
        setDisplayText(text1.slice(0, i));
        await sleep(35);
      }
      
      await sleep(800);
      
      for (let i = text1.length - 1; i >= 0; i--) {
        if (!isActive) return;
        setDisplayText(text1.slice(0, i));
        await sleep(15);
      }
      
      if (!isActive) return;
      setCursorColor('#ef4444');
      await sleep(200);
      
      const words = ["Messy.", "Fragmented.", "Expensive."];
      for (let w = 0; w < words.length; w++) {
        const word = words[w];
        
        for (let i = 1; i <= word.length; i++) {
          if (!isActive) return;
          setDisplayText(word.slice(0, i));
          await sleep(40);
        }
        
        await sleep(700);
        
        for (let i = word.length - 1; i >= 0; i--) {
          if (!isActive) return;
          setDisplayText(word.slice(0, i));
          await sleep(15);
        }
        
        await sleep(200);
      }
    };
    
    runTypingAnimation();
    
    return () => {
      isActive = false;
      clearInterval(counterInterval);
    };
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center z-20 px-[8vw]"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ x: '-100vw', opacity: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } } as any}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Slow camera dolly/pan wrapper */}
      <motion.div 
        className="w-full h-full flex flex-col justify-center items-center gap-[4vh] pt-[6vh]"
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 6, ease: "easeOut" }}
      >
        {/* MASSIVE HEADER */}
        <h2 className="text-[6.5vw] font-display font-bold text-white text-center leading-[1.1] h-[8vw] flex items-center justify-center">
          {displayText}
          <motion.span 
            className="inline-block w-[0.6vw] h-[6.5vw] ml-[1vw] translate-y-[0.5vh]"
            style={{ backgroundColor: cursorColor }}
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
          />
        </h2>

        <div className="flex w-full max-w-[85vw] justify-between items-center gap-[8vw] mt-[2vh]">

          {/* Left — competitor chips */}
          <div className="flex flex-col gap-[1.2vh] w-[45%]">
            {competitors.map((comp, i) => (
              <motion.div
                key={comp.name}
                className="glass-panel py-[1.2vh] px-[1.5vw] flex justify-between items-center shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] border border-white/5"
                initial={{ x: -80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 380, damping: 28, delay: 0.5 + (i * 0.05) }}
              >
                <div className="flex items-center gap-[0.8vw]">
                  {comp.icon}
                  <span className="text-white font-body font-medium text-[1.4vw]">{comp.name}</span>
                </div>
                <span className="text-[#ef4444] font-mono text-[1.2vw]">${comp.price}/mo</span>
              </motion.div>
            ))}
          </div>

          {/* Right — counter */}
          <div className="w-[45%] flex flex-col items-center justify-center relative">
            <motion.p
              className="text-white/50 font-body text-[1.4vw] mb-[1vh] text-center"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.4 }}
            >
              Total monthly cost
            </motion.p>
            <motion.div
              className="font-display font-bold tracking-[-0.04em] leading-none text-[#ef4444]"
              style={{
                fontSize: '11vw',
              }}
              animate={total === 134 ? {
                textShadow: ['0 0 0px rgba(239,68,68,0)', '0 0 60px rgba(239,68,68,0.6)', '0 0 30px rgba(239,68,68,0.3)'],
                scale: [1, 1.05, 1],
                transition: { duration: 0.4 }
              } : {} as any}
              transition={{ duration: 0.5 }}
            >
              ${total}<span className="text-[6vw] leading-none mb-auto align-top font-bold text-[#ef4444]">+</span>
            </motion.div>
            <motion.p
              className="text-[#ef4444]/60 font-mono text-[1.1vw] mt-[1vh]"
              initial={{ opacity: 0 }}
              animate={{ opacity: total === 134 ? 1 : 0 }}
            >
              /Month
            </motion.p>
            
            {/* Added dramatic warning background flare */}
            <motion.div
              className="absolute inset-0 bg-red-500 rounded-full blur-[100px] -z-10 mix-blend-screen"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: total === 134 ? 0.15 : 0, scale: total === 134 ? 1.2 : 0 }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
