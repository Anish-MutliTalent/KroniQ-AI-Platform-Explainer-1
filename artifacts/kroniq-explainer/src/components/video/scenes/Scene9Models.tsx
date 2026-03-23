import { motion } from 'framer-motion';

const allModels = [
  { name: "GPT-4o", cat: "Text" },
  { name: "Claude 3.5 Sonnet", cat: "Text" },
  { name: "Gemini 2.0 Flash", cat: "Text" },
  { name: "Llama 3.3", cat: "Text" },
  { name: "Mixtral", cat: "Text" },
  { name: "Qwen 2.5", cat: "Text" },
  { name: "DeepSeek V3", cat: "Text" },
  { name: "Phi-4", cat: "Text" },
  { name: "Grok 2", cat: "Text" },
  { name: "Command R+", cat: "Text" },
  { name: "DALL·E 3", cat: "Image" },
  { name: "Stable Diffusion", cat: "Image" },
  { name: "Suno", cat: "Audio" },
  { name: "Udio", cat: "Audio" },
  { name: "ElevenLabs", cat: "Audio" },
  { name: "Flux", cat: "Image" }
];

export function Scene9Models() {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6 } }}
    >
      <div className="absolute top-[10vh] text-center z-20">
        <motion.h2 
          className="text-[4vw] font-display font-bold text-white mb-2"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          70+ models. All in one place.
        </motion.h2>
      </div>

      <div className="w-full overflow-hidden mt-[10vh]">
        <motion.div 
          className="flex gap-[2vw] px-[2vw]"
          style={{ width: '200vw' }}
          animate={{ x: ['0vw', '-100vw'] }}
          transition={{ duration: 6, ease: "linear" }}
        >
          {/* Row 1 */}
          <div className="flex gap-[2vw]">
            {allModels.slice(0, 8).map((model, i) => (
              <motion.div
                key={model.name}
                className="glass-panel w-[20vw] h-[12vh] flex flex-col justify-center px-[2vw] relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, type: "spring" }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                <span className="text-white font-display font-bold text-[1.5vw] truncate">{model.name}</span>
                <span className="text-white/50 font-body text-[1vw] mt-1">{model.cat}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="flex gap-[2vw] px-[2vw] mt-[2vw]"
          style={{ width: '200vw' }}
          animate={{ x: ['-100vw', '0vw'] }}
          transition={{ duration: 6, ease: "linear" }}
        >
          {/* Row 2 */}
          <div className="flex gap-[2vw]">
            {allModels.slice(8, 16).map((model, i) => (
              <motion.div
                key={model.name}
                className="glass-panel w-[20vw] h-[12vh] flex flex-col justify-center px-[2vw] relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
              >
                <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                <span className="text-white font-display font-bold text-[1.5vw] truncate">{model.name}</span>
                <span className="text-white/50 font-body text-[1vw] mt-1">{model.cat}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
