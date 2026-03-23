import { motion } from 'framer-motion';

const panels = [
  {
    model: "GPT-5.4",
    user: "Write a LinkedIn post about our product launch.",
    ai: "🚀 Exciting news! We're thrilled to announce the launch of our new product...\n\nHere are 3 reasons why this will change your workflow:\n1. Seamless integration\n2. Real-time collaboration\n3. Powerful analytics",
    rotate: -2,
    glow: "rgba(34,197,94,0.1)"
  },
  {
    model: "Claude Opus 4.6",
    user: "Summarize this 50-page PDF",
    ai: "Here are the 5 key insights from the document:\n\n• The market is shifting towards unified platforms.\n• Cost consolidation is a top priority for CIOs.\n• Multimodal capabilities drive higher engagement.\n• Security and compliance remain critical.\n• Speed of execution defines market leaders.",
    rotate: 1,
    glow: "rgba(13,31,45,0.3)"
  },
  {
    model: "Gemini 3.1 High",
    user: "What's the best marketing strategy for a SaaS startup?",
    ai: "A comprehensive SaaS marketing strategy requires a multi-channel approach:\n\n**1. Content-Led SEO**\nBuild authority through high-quality technical content.\n\n**2. Community Building**\nFoster a developer or power-user community.\n\n**3. Product-Led Growth**\nOffer a robust freemium tier with clear upgrade paths.",
    rotate: -1,
    glow: "rgba(10,10,20,0.4)"
  },
  {
    model: "Llama 4 Maverick",
    user: "Fix this TypeScript error: Property 'x' does not exist",
    ai: "The error occurs because TypeScript doesn't know the shape of your object. You need to define an interface or type for it.\n\n```typescript\ninterface Config {\n  x: number;\n  y: number;\n}\n\nconst obj: Config = { x: 10, y: 20 };\n```",
    rotate: 2,
    glow: "rgba(34,197,94,0.15)"
  }
];

export function Scene4ChatPan1() {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center z-10"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ scale: 1.2, opacity: 0, filter: 'blur(20px)', transition: { duration: 0.6 } } as any}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div 
        className="glass-panel px-6 py-2 mt-[5vh] z-20"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
      >
        <span className="text-white font-display text-[1.5vw]">Chat with any model</span>
      </motion.div>

      <motion.div
        className="absolute top-[15vh] flex gap-[10vw] items-start"
        style={{ width: '300vw' }}
        animate={{ x: ['10vw', '-130vw'] }}
        transition={{ duration: 8, ease: "linear" }}
      >
        {panels.map((panel, idx) => (
          <div 
            key={idx} 
            className="relative"
            style={{ transform: `rotate(${panel.rotate}deg)` }}
          >
            {/* Glow */}
            <div 
              className="absolute inset-0 blur-[80px] rounded-full z-0" 
              style={{ background: panel.glow }}
            />
            
            {/* Panel */}
            <div className="glass-panel w-[42vw] h-[70vh] flex flex-col relative z-10 overflow-hidden">
              {/* Header */}
              <div className="flex justify-between items-center p-[2vw] border-b border-white/10">
                <span className="font-display font-bold text-white text-[1.5vw]">KroniQ</span>
                <div className="flex items-center gap-[0.5vw]">
                  <div className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                  <span className="text-white/70 text-[1vw] bg-white/5 px-3 py-1 rounded-full">{panel.model}</span>
                </div>
              </div>

              {/* Chat Content */}
              <div className="flex-1 p-[2vw] flex flex-col gap-[2vh] overflow-hidden">
                <div className="self-end glass-input bg-white/10 px-[1.5vw] py-[1.5vh] rounded-[1vw] max-w-[80%] border-white/20">
                  <p className="text-white text-[1.2vw] font-body">{panel.user}</p>
                </div>
                
                <div className="self-start px-[1.5vw] py-[1.5vh] max-w-[90%]">
                  <p className="text-white/80 text-[1.1vw] font-body whitespace-pre-wrap leading-relaxed">
                    {panel.ai}
                  </p>
                </div>
              </div>

              {/* Input Area */}
              <div className="p-[2vw] mt-auto">
                <div className="glass-input w-full p-[1vw] flex items-center">
                  <span className="text-white/50 text-[1vw]">Type a message...</span>
                  <motion.div 
                    className="w-[2px] h-[1.2vw] bg-[#22c55e] ml-2"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
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
