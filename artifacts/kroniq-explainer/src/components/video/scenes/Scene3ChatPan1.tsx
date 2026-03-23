import { motion } from 'framer-motion';

const panels = [
  {
    model: "GPT-4o",
    user: "Write a LinkedIn post about our product launch.",
    ai: "Big news. We just launched something that changes how teams work with AI.\n\nNot another copilot. Not another chatbot.\n\nOne platform. 70+ models. Every modality.\n\nThe era of tab-switching is over.",
    rotate: -1.5,
    glow: "rgba(34,197,94,0.12)"
  },
  {
    model: "Claude 3.5",
    user: "Summarize this 50-page market research PDF",
    ai: "Five key findings:\n\n• 73% of teams use 4+ AI tools simultaneously\n• Context switching costs ~2.4 hrs/day per knowledge worker\n• Unified platforms reduce operational AI spend by 60%\n• Multimodal capability is the #1 2025 procurement criterion\n• Security consolidation is now a board-level priority",
    rotate: 0.8,
    glow: "rgba(13,31,45,0.4)"
  },
  {
    model: "Gemini 2.0",
    user: "Best go-to-market strategy for a B2B SaaS startup?",
    ai: "Three levers that compound:\n\n01 — Product-led growth\nLet the product sell itself. Generous free tier, instant value.\n\n02 — Content-led SEO\nOwn the long-tail queries your ICP searches at 2am.\n\n03 — Community moat\nBuilders who depend on your platform become your best evangelists.",
    rotate: -1,
    glow: "rgba(10,10,20,0.5)"
  },
  {
    model: "Llama 3.3",
    user: "Fix this TypeScript error: Property 'id' does not exist on type '{}'",
    ai: "Your object lacks a type definition. Add an interface:\n\ninterface User {\n  id: string;\n  name: string;\n  email: string;\n}\n\nconst user: User = {\n  id: crypto.randomUUID(),\n  name: 'Ada',\n  email: 'ada@kroniqai.com'\n};",
    rotate: 1.5,
    glow: "rgba(34,197,94,0.18)"
  }
];

export function Scene3ChatPan1() {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col z-10 overflow-hidden"
      initial={{ clipPath: 'inset(0 0 100% 0)' }}
      animate={{ clipPath: 'inset(0 0 0% 0)' }}
      exit={{ y: '-100vh', opacity: 0, transition: { duration: 0.2, ease: [0.4, 0, 1, 1] } }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Label chip */}
      <motion.div
        className="glass-panel self-center mt-[4vh] px-[2vw] py-[1.2vh] z-20 flex items-center gap-[0.8vw]"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, type: 'spring', stiffness: 500, damping: 35 }}
      >
        <div className="w-[0.6vw] h-[0.6vw] rounded-full bg-[#22c55e]" style={{ boxShadow: '0 0 8px #22c55e' }} />
        <span className="text-white font-display font-medium text-[1.4vw]">Chat with any model</span>
      </motion.div>

      {/* Panning row */}
      <motion.div
        className="absolute top-[14vh] flex gap-[4vw] items-start px-[5vw]"
        style={{ width: '290vw' }}
        initial={{ x: '5vw' }}
        animate={{ x: '-185vw' }}
        transition={{ duration: 7.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {panels.map((panel, idx) => (
          <div
            key={idx}
            className="relative flex-shrink-0"
            style={{ transform: `rotate(${panel.rotate}deg)` }}
          >
            <div
              className="absolute inset-[-4vh] blur-[90px] rounded-full"
              style={{ background: panel.glow }}
            />
            <div className="glass-panel w-[44vw] h-[72vh] flex flex-col relative z-10">
              {/* Header */}
              <div className="flex justify-between items-center px-[2vw] py-[2vh] border-b border-white/8">
                <span className="font-display font-bold text-white text-[1.4vw] tracking-tight">KroniQ</span>
                <div className="flex items-center gap-[0.8vw]">
                  <div
                    className="w-[0.6vw] h-[0.6vw] rounded-full bg-[#22c55e]"
                    style={{ boxShadow: '0 0 6px #22c55e', animation: 'pulse 2s infinite' }}
                  />
                  <span className="text-white/60 text-[0.95vw] font-body bg-white/6 px-[0.8vw] py-[0.4vh] rounded-full border border-white/10">
                    {panel.model}
                  </span>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 px-[2vw] py-[2vh] flex flex-col gap-[2.5vh] overflow-hidden">
                {/* User bubble */}
                <div className="self-end glass-input px-[1.6vw] py-[1.4vh] max-w-[78%]" style={{ background: 'rgba(255,255,255,0.10)' }}>
                  <p className="text-white text-[1.15vw] font-body leading-snug">{panel.user}</p>
                </div>

                {/* AI response */}
                <div className="self-start max-w-[92%]">
                  <div className="flex items-center gap-[0.6vw] mb-[1vh]">
                    <div className="w-[1.4vw] h-[1.4vw] rounded-full bg-gradient-to-br from-[#22c55e] to-[#166534] flex items-center justify-center">
                      <div className="w-[0.5vw] h-[0.5vw] rounded-full bg-white" />
                    </div>
                    <span className="text-white/40 font-body text-[0.9vw]">{panel.model}</span>
                  </div>
                  <p className="text-white/85 text-[1.08vw] font-body whitespace-pre-wrap leading-[1.65]">
                    {panel.ai}
                  </p>
                </div>
              </div>

              {/* Input */}
              <div className="px-[2vw] py-[2vh]">
                <div className="glass-input w-full px-[1.4vw] py-[1.2vh] flex items-center gap-[0.6vw]">
                  <span className="text-white/35 text-[1vw] font-body flex-1">Ask anything...</span>
                  <motion.div
                    className="w-[1.5px] h-[1.3vw] bg-[#22c55e]"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.7, repeat: Infinity }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
