import { motion } from 'framer-motion';

const row1 = [
  { name: "GPT-4o", cat: "Text" },
  { name: "Claude 3.5", cat: "Text" },
  { name: "Gemini 2.0", cat: "Text" },
  { name: "Llama 3.3", cat: "Text" },
  { name: "Mixtral 8x22B", cat: "Text" },
  { name: "Qwen 2.5", cat: "Text" },
  { name: "DeepSeek V3", cat: "Code" },
  { name: "Phi-4", cat: "Text" },
  { name: "Grok 2", cat: "Text" },
  { name: "Command R+", cat: "Text" },
];

const row2 = [
  { name: "DALL·E 3", cat: "Image" },
  { name: "Stable Diffusion", cat: "Image" },
  { name: "Flux Pro", cat: "Image" },
  { name: "Midjourney", cat: "Image" },
  { name: "Suno v4", cat: "Audio" },
  { name: "Udio Pro", cat: "Audio" },
  { name: "ElevenLabs", cat: "Voice" },
  { name: "Sora", cat: "Video" },
  { name: "Runway Gen-3", cat: "Video" },
  { name: "Whisper v3", cat: "STT" },
];

const catColors: Record<string, string> = {
  Text: '#22c55e', Code: '#61afef', Image: '#c678dd',
  Audio: '#e5c07b', Voice: '#e06c75', Video: '#56b6c2', STT: '#98c379',
};

function ModelCard({ model, delay }: { model: { name: string; cat: string }; delay: number }) {
  return (
    <motion.div
      className="glass-panel flex-shrink-0 w-[18vw] h-[13vh] flex flex-col justify-center px-[1.8vw] relative overflow-hidden"
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, transition: { duration: 0.2, ease: [0.4, 0, 1, 1] } }}
      transition={{ duration: 0.4 }}
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
          className="flex gap-[1.8vw] px-[2vw]"
          animate={{ x: ['0vw', '-80vw'] }}
          transition={{ duration: 5.5, ease: 'linear' }}
        >
          {[...row1, ...row1].map((m, i) => (
            <ModelCard key={`r1-${i}`} model={m} delay={i * 0.04} />
          ))}
        </motion.div>
      </div>

      {/* Row 2 — pans left */}
      <div className="w-full overflow-hidden">
        <motion.div
          className="flex gap-[1.8vw] px-[2vw]"
          animate={{ x: ['-80vw', '0vw'] }}
          transition={{ duration: 5.5, ease: 'linear' }}
        >
          {[...row2, ...row2].map((m, i) => (
            <ModelCard key={`r2-${i}`} model={m} delay={0.3 + i * 0.04} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
