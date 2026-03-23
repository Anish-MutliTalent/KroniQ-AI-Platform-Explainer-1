import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Counter({
  endValue, suffix = '', label, labelColor = 'rgba(255,255,255,0.6)', delay = 0, accent = false
}: {
  endValue: number; suffix?: string; label: string; labelColor?: string; delay?: number; accent?: boolean;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frame: number;
    let start: number | null = null;
    const duration = 800; // Extremely fast counting

    const tick = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setValue(Math.round(eased * endValue));
      if (p < 1) frame = (globalThis as any).requestAnimationFrame(tick);
    };

    const t = setTimeout(() => { frame = (globalThis as any).requestAnimationFrame(tick); }, delay);
    return () => { clearTimeout(t); (globalThis as any).cancelAnimationFrame(frame); };
  }, [endValue, delay]);

  return (
    <motion.div
      className="glass-panel w-[26vw] h-[32vh] flex flex-col items-center justify-center relative overflow-hidden shadow-[0_20px_50px_-10px_rgba(0,0,0,0.6)]"
      initial={{ opacity: 0, y: 45, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: delay / 1000, type: 'spring', stiffness: 280, damping: 24 }}
    >
      {accent && (
        <motion.div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(34,197,94,0.12), rgba(34,197,94,0.04))' }}
        />
      )}
      <motion.div
        className="text-[9.5vw] font-display font-bold leading-none tracking-[-0.04em]"
        style={{ color: accent ? '#22c55e' : '#ffffff' }}
      >
        {value}{suffix}
      </motion.div>
      <div className="text-[1.4vw] font-body uppercase tracking-[0.15em] mt-[1.5vh]" style={{ color: labelColor }}>
        {label}
      </div>
    </motion.div>
  );
}

export function Scene9Counters() {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center z-10"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ scale: 1.15, opacity: 0, filter: 'blur(20px)', zIndex: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } } as any}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div 
        className="w-full h-full flex flex-col items-center justify-center"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        {/* Nebula behind counters */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="flex gap-[2.5vw] mb-[7vh] z-10">
          <Counter endValue={70} suffix="+" label="Models" accent={true} delay={0} />
          <Counter endValue={1} label="Tab Open" labelColor="rgba(255,255,255,0.5)" delay={100} />
          <Counter endValue={0} label="Switching" labelColor="rgba(255,255,255,0.5)" delay={200} />
        </div>

        <motion.div
          className="flex items-center gap-[1.2vw] text-[2.4vw] font-body z-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 1.5 } as any }
          }}
        >
          {[
            { text: '70+ models', green: false },
            { text: '/', green: true },
            { text: 'One tab', green: false },
            { text: '/', green: true },
            { text: 'Zero switching.', green: false },
          ].map(({ text, green }, i) => (
            <motion.span
              key={i}
              className={green ? 'text-[#22c55e] font-bold' : 'text-white/75 font-medium'}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 350, damping: 25 } as any }
              }}
            >
              {text}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
