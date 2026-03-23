import { motion } from 'framer-motion';

export function Scene3KroniQ() {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ scale: 1.5, opacity: 0, filter: 'blur(30px)', transition: { duration: 0.6 } }}
    >
      <div className="relative flex flex-col items-center">
        {/* Glow behind logo */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-[#22c55e] rounded-full mix-blend-screen"
          initial={{ opacity: 0, scale: 0, filter: 'blur(100px)' }}
          animate={{ opacity: 0.15, scale: 1, filter: 'blur(100px)' }}
          transition={{ delay: 0.2, duration: 2, ease: "easeOut" }}
        />

        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: [0.8, 1.05, 1] }}
          transition={{ duration: 4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <motion.img
            src={`${import.meta.env.BASE_URL}kroniq-logo.png`}
            alt="KroniQ Logo"
            className="w-[25vw] relative z-10"
            initial={{ y: -500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              damping: 20,
            }}
          />

          <motion.div 
            className="mt-[5vh] text-center flex flex-col gap-[1vh] z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <h2 className="text-[5vw] font-display font-bold text-white">
              70+ models.
            </h2>
            <p className="text-[2.5vw] font-body text-[#22c55e]">
              Your one-stop AI platform
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
