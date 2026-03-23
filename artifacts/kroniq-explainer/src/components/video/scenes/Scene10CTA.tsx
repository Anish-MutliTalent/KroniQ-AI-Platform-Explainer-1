import { motion } from 'framer-motion';

export function Scene10CTA() {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center z-10 overflow-hidden"
      style={{ background: '#050508' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.35, ease: 'easeInOut' } } as any}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div 
        className="w-full h-[150%] flex flex-col items-center justify-center relative"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5, ease: "easeOut" }}
      >
        {/* Radial glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 65%)' }}
          animate={{
            scale: [1, 1.18, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Secondary glow ring */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 60%)' }}
          animate={{ scale: [1.1, 1, 1.1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Logo */}
        <motion.img
          src={`${import.meta.env.BASE_URL}kroniq-logo.png`}
          alt="KroniQ"
          className="w-[20vw] relative z-10 drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]"
          initial={{ scale: 0.5, opacity: 0, y: -40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 22, delay: 0.2 }}
        />

        {/* Tagline */}
        <motion.div
          className="mt-[4vh] text-center z-10 flex flex-col items-center gap-[1.5vh]"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, type: 'spring', stiffness: 280, damping: 25 }}
        >
          <h2 className="text-white font-display font-bold text-[6vw] tracking-tight text-shadow-glow mb-[1vh]">
            Your one-stop AI platform
          </h2>
          <p className="text-white/50 font-body text-[2vw] tracking-[0.05em] uppercase">
            70+ models. One tab. Zero switching.
          </p>
        </motion.div>

        {/* CTA glass card */}
        <motion.div
          className="glass-panel mt-[6vh] px-[6vw] py-[5vh] flex flex-col items-center gap-[1vh] z-10 shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_0_0_1px_rgba(255,255,255,0.1)]"
          initial={{ opacity: 0, y: 35, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.8, type: 'spring', stiffness: 260, damping: 24 }}
        >
          <span className="text-white/60 font-body text-[1.5vw]">Try free at</span>
          <motion.span
            className="font-display font-bold text-[3.5vw] text-[#22c55e] tracking-[-0.02em] leading-none"
            animate={{
              textShadow: [
                '0 0 20px rgba(34,197,94,0.3)',
                '0 0 40px rgba(34,197,94,0.6)',
                '0 0 20px rgba(34,197,94,0.3)'
              ]
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            kroniqai.com
          </motion.span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
