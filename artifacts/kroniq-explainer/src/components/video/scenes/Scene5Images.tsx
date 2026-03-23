import { motion } from 'framer-motion';

const models = [
  { name: "Imagen 4", image: "imagen.png" },
  { name: "Flux", image: "flux.png" },
  { name: "Nano Banana Pro", image: "nanobanana.png" },
  { name: "Midjourney", image: "midjourney.png" },
];

export function Scene5Images() {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center z-10"
      initial={{ opacity: 0, clipPath: 'circle(0% at 50% 50%)' }}
      animate={{ opacity: 1, clipPath: 'circle(150% at 50% 50%)' }}
      exit={{ scale: 1.15, opacity: 0, filter: 'blur(20px)', zIndex: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } } as any}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div 
        className="w-full h-full flex flex-col items-center justify-center p-[2vw]"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: "linear" }}
      >
        <motion.div
          className="glass-panel w-[72vw] p-[3vw] flex flex-col"
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1, scale: [1, 1.025] }}
          transition={{
            x: { type: 'spring', stiffness: 380, damping: 28 },
            opacity: { duration: 0.35 },
            scale: { duration: 2.5, delay: 0.3, ease: 'linear' }
          }}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-[3.5vh]">
            <h2 className="text-[3vw] font-display font-bold text-white tracking-tight">Image Generation</h2>
            <div className="glass-accent rounded-full px-[1vw] py-[0.6vh] text-[#22c55e] text-[1.1vw] font-body font-medium shadow-[0_0_15px_rgba(34,197,94,0.3)]">
              12 models available
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 gap-[2vw]">
            {models.map((model, i) => (
              <motion.div
                key={model.name}
                className="glass-input p-[1.2vw] flex flex-col gap-[1.2vh]"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, type: 'spring', stiffness: 400, damping: 28 }}
              >
                <div className="w-full h-[16vh] rounded-[0.8vw] bg-black relative overflow-hidden flex items-center justify-center border border-white/10">
                  <img src={`${import.meta.env.BASE_URL}${model.image}`} alt={model.name} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <span className="text-white/80 font-body text-[1.2vw] text-center font-medium">{model.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-[3.5vh] text-[2.2vw] text-white/65 font-body tracking-wide"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          12 image models. <span className="text-white/90 font-medium">One interface.</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
