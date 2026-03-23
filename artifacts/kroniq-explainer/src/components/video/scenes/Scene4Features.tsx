import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sceneTransitions } from '@/lib/video';

const features = [
  { icon: '💬', chip: 'Chat', label: 'Any model. Any conversation.' },
  { icon: '🖼️', chip: 'Images', label: 'Generate in seconds.' },
  { icon: '🎵', chip: 'Music', label: 'AI-composed tracks.' },
  { icon: '🎬', chip: 'Video', label: 'Clips on demand.' },
  { icon: '💻', chip: 'Code', label: 'Build anything.' }
];

export function Scene4Features() {
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev < features.length - 1 ? prev + 1 : prev));
    }, 1600); // 8s total / 5 features = 1.6s each

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center bg-transparent z-10"
      variants={sceneTransitions.wipe}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="w-full h-full relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFeature}
            className="absolute inset-0 flex flex-col items-center justify-center"
            initial={{ clipPath: 'circle(0% at 50% 50%)', opacity: 0 }}
            animate={{ clipPath: 'circle(150% at 50% 50%)', opacity: 1 }}
            exit={{ clipPath: 'circle(0% at 50% 50%)', opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div 
              className="text-[12vw] mb-8"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {features[activeFeature].icon}
            </motion.div>
            
            <motion.div
              className="bg-green-500 text-black px-[3vw] py-[1vh] rounded-full text-[4vw] font-display font-bold mb-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 400, damping: 25 }}
            >
              {features[activeFeature].chip}
            </motion.div>
            
            <motion.div
              className="text-[4vw] font-body text-white font-medium text-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              {features[activeFeature].label}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
