import { motion } from 'framer-motion';

export function Scene2aCinematic() {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center z-30 overflow-hidden bg-[#050508]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ scale: 1.2, opacity: 0, filter: 'blur(30px)', zIndex: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } } as any}
      transition={{ duration: 0.8 }}
    >
      {/* Light sweep background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#22c55e]/10 to-transparent"
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: '100%', opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      
      {/* Main cinematic text */}
      <motion.div
        className="relative flex items-center justify-center"
        initial={{ scale: 0.9, filter: 'blur(10px)' }}
        animate={{ scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <motion.h1
          className="text-[8vw] font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#22c55e]"
          style={{ letterSpacing: '-0.02em' }}
        >
          Introducing
        </motion.h1>
      </motion.div>
      <motion.div
        className="relative"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8, type: 'spring', stiffness: 200, damping: 20 }}
      >
        <h2 className="text-[6vw] font-display font-bold text-white tracking-tight mt-[-2vh]">
          KroniQ <span className="text-[#22c55e]">AI</span>
        </h2>
        {/* Glowing underline */}
        <motion.div
          className="h-[0.5vh] mt-[1vh] bg-gradient-to-r from-transparent via-[#22c55e] to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        />
      </motion.div>
    </motion.div>
  );
}
