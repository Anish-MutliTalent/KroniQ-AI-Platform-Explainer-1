import { motion } from 'framer-motion';

export function Scene10CTA() {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center z-10"
      style={{ background: '#050508' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.35, ease: 'easeInOut' } }}
      transition={{ duration: 0.4 }}
    >
      {/* Radial glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 65%)' }}
        animate={{
          scale: [1, 1.18, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Secondary glow ring */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 60%)' }}
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Logo */}
      <motion.img
        src={`${import.meta.env.BASE_URL}kroniq-logo.png`}
        alt="KroniQ"
        className="w-[20vw] relative z-10"
        initial={{ scale: 0.5, opacity: 0, y: -30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      />

      {/* Tagline */}
      <motion.div
        className="mt-[4vh] text-center z-10 flex flex-col items-center gap-[1.5vh]"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, type: 'spring', stiffness: 280, damping: 25 }}
      >
        <p className="text-white/50 font-body text-[1.8vw] tracking-[0.08em] uppercase">
          Your one-stop AI platform
        </p>
        <h2 className="text-white font-display font-bold text-[3vw] tracking-tight">
          70+ models. One tab. Zero switching.
        </h2>
      </motion.div>

      {/* CTA glass card */}
      <motion.div
        className="glass-panel mt-[6vh] px-[5vw] py-[4vh] flex flex-col items-center gap-[0.8vh] z-10"
        initial={{ opacity: 0, y: 35, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.6, type: 'spring', stiffness: 260, damping: 24 }}
      >
        <span className="text-white/60 font-body text-[2.4vw]">Try free at</span>
        <motion.span
          className="font-display font-bold text-[6.5vw] text-[#22c55e] tracking-[-0.03em] leading-none"
          animate={{
            textShadow: [
              '0 0 40px rgba(34,197,94,0.3)',
              '0 0 70px rgba(34,197,94,0.55)',
              '0 0 40px rgba(34,197,94,0.3)'
            ]
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          kroniqai.com
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
