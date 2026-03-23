import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

export function Scene1Hook() {
  const [displayText, setDisplayText] = useState('');
  const [cursorColor, setCursorColor] = useState('#ffffff');
  const [textColor, setTextColor] = useState('#ffffff');

  useEffect(() => {
    let isActive = true;
    const runAnimation = async () => {
      const text1 = "Stop using 6 different tools.";
      const text2 = "Use one instead.";
      
      await sleep(100);

      // Type first line
      for (let i = 1; i <= text1.length; i++) {
        if (!isActive) return;
        setDisplayText(text1.slice(0, i));
        await sleep(30);
      }
      
      await sleep(400);
      
      // Backspace
      for (let i = text1.length - 1; i >= 0; i--) {
        if (!isActive) return;
        setDisplayText(text1.slice(0, i));
        await sleep(10);
      }
      
      if (!isActive) return;
      setCursorColor('#22c55e');
      setTextColor('#22c55e');
      await sleep(100);
      
      // Type second line
      for (let i = 1; i <= text2.length; i++) {
        if (!isActive) return;
        setDisplayText(text2.slice(0, i));
        await sleep(30);
      }
      
      await sleep(800);
      
      // Backspace second line
      for (let i = text2.length - 1; i >= 0; i--) {
        if (!isActive) return;
        setDisplayText(text2.slice(0, i));
        await sleep(10);
      }
    };
    
    runAnimation();
    return () => { isActive = false; };
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-[#050508]"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ scale: 1.5, opacity: 0, filter: 'blur(30px)', transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } } as any}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div 
        className="flex flex-col items-center justify-center gap-[2vh] w-full h-full"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 4, ease: "linear" }}
      >
        <div className="text-center px-[8vw] flex justify-center items-center h-[20vh]">
          <h1 
            className="text-[6vw] font-bold font-display leading-[1.05] tracking-[-0.03em] flex items-center"
            style={{ color: textColor }}
          >
            {displayText}
            <motion.span 
              className="inline-block w-[0.8vw] h-[6vw] ml-[0.5vw] translate-y-[0.5vh]"
              style={{ backgroundColor: cursorColor }}
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            />
          </h1>
        </div>
      </motion.div>
    </motion.div>
  );
}
