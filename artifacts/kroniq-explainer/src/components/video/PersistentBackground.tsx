import { motion } from 'framer-motion';

export function PersistentBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#050508]">
      {/* Animated gradient mesh */}
      <motion.div
        className="absolute w-[150vw] h-[150vh] -top-[25vh] -left-[25vw] opacity-40 mix-blend-screen"
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, #0d1f2d 0%, transparent 50%), radial-gradient(circle at 80% 70%, #052010 0%, transparent 50%)',
            'radial-gradient(circle at 70% 80%, #052010 0%, transparent 50%), radial-gradient(circle at 30% 20%, #0a0a14 0%, transparent 50%)',
            'radial-gradient(circle at 40% 60%, #070d1a 0%, transparent 50%), radial-gradient(circle at 60% 40%, #0d1f2d 0%, transparent 50%)',
            'radial-gradient(circle at 20% 30%, #0d1f2d 0%, transparent 50%), radial-gradient(circle at 80% 70%, #052010 0%, transparent 50%)'
          ]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[150vw] h-[150vh] -top-[25vh] -left-[25vw] opacity-30 mix-blend-screen"
        animate={{
          background: [
            'radial-gradient(circle at 80% 20%, #0a0a14 0%, transparent 50%), radial-gradient(circle at 20% 80%, #070d1a 0%, transparent 50%)',
            'radial-gradient(circle at 20% 80%, #070d1a 0%, transparent 50%), radial-gradient(circle at 80% 20%, #0d1f2d 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, #052010 0%, transparent 50%), radial-gradient(circle at 10% 90%, #0a0a14 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, #0a0a14 0%, transparent 50%), radial-gradient(circle at 20% 80%, #070d1a 0%, transparent 50%)'
          ]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: -5 }}
      />

      {/* Floating glass orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 200 + 100,
            height: Math.random() * 200 + 100,
            background: 'rgba(34, 197, 94, 0.02)',
            filter: 'blur(60px)',
            left: `${Math.random() * 100}vw`,
            top: `${Math.random() * 100}vh`,
          }}
          animate={{
            y: [0, -150, 0],
            x: [0, Math.random() * 100 - 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
      
      {/* Subtle noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
