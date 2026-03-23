import { motion } from 'framer-motion';

const row1 = [
  { name: "GPT-5.4", cat: "Text" },
  { name: "Claude Opus 4.6", cat: "Text" },
  { name: "Gemini 3.1 High", cat: "Text" },
  { name: "Llama 4 Maverick", cat: "Text" },
  { name: "Grok 4.1 Fast", cat: "Text" },
  { name: "DeepSeek V3.2", cat: "Text" },
  { name: "Seedream 5", cat: "Image" },
  { name: "Imagen 4 Ultra", cat: "Image" },
  { name: "Flux Kontext Max", cat: "Image" },
];

const row2 = [
  { name: "GPT Image 1.5", cat: "Image" },
  { name: "NanoBanana Pro", cat: "Image" },
  { name: "Midjourney V7", cat: "Image" },
  { name: "Sora 2", cat: "Video" },
  { name: "Veo 3.1 Quality", cat: "Video" },
  { name: "Wan 2.6", cat: "Video" },
  { name: "Kling 3.0", cat: "Video" },
  { name: "Runway Gen-4", cat: "Video" },
  { name: "Pika 2.2", cat: "Video" },
];

const catColors: Record<string, string> = {
  Text: '#22c55e', Code: '#61afef', Image: '#c678dd',
  Audio: '#e5c07b', Voice: '#e06c75', Video: '#56b6c2', STT: '#98c379',
};

function ModelCard({ model, delay }: { model: { name: string; cat: string }; delay: number }) {
  return (
    <motion.div
      className="glass-panel flex-shrink-0 w-[18vw] h-[13vh] flex flex-col justify-center px-[1.8vw] relative overflow-hidden shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: 'spring', stiffness: 350, damping: 25 }}
    >
      {/* Active dot */}
      <motion.div
        className="absolute top-[1.2vh] right-[1vw] w-[0.55vw] h-[0.55vw] rounded-full"
        style={{ background: catColors[model.cat] || '#22c55e', boxShadow: `0 0 6px ${catColors[model.cat] || '#22c55e'}` }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, delay: delay * 0.5 }}
      />
      <span className="text-white font-display font-bold text-[1.4vw] truncate tracking-tight">{model.name}</span>
      <span className="font-body text-[0.9vw] mt-[0.4vh] font-medium" style={{ color: catColors[model.cat] || '#22c55e' }}>{model.cat}</span>
    </motion.div>
  );
}

export function Scene8Models() {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col justify-center z-10 overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ scale: 1.15, opacity: 0, filter: 'blur(20px)', zIndex: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } } as any}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div 
        className="w-full h-full flex flex-col justify-center"
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 2.5, ease: "linear" }}
      >
        <motion.div
          className="text-center mb-[5vh] z-20"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-[4.5vw] font-display font-bold text-white tracking-tight leading-none">
            70+ models. <span className="text-[#22c55e]">All in one place.</span>
          </h2>
        </motion.div>

        {/* Row 1 — pans right */}
        <div className="w-full overflow-hidden mb-[2vh]">
          <motion.div
            className="flex gap-[1.8vw] w-fit px-[2vw]"
            animate={{ x: [0, '-50%'] }}
            transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
          >
            {[...row1, ...row1].map((m, i) => (
              <ModelCard key={`r1-${i}`} model={m} delay={i * 0.04} />
            ))}
          </motion.div>
        </div>

        {/* Row 2 — pans left */}
        <div className="w-full overflow-hidden">
          <motion.div
            className="flex gap-[1.8vw] w-fit px-[2vw]"
            animate={{ x: ['-50%', 0] }}
            transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
          >
            {[...row2, ...row2].map((m, i) => (
              <ModelCard key={`r2-${i}`} model={m} delay={0.3 + i * 0.04} />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
