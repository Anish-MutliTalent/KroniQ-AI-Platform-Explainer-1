import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const panels = [
  {
    model: "Flux Pro",
    type: "Image Gen",
    user: "Generate a product hero image for a dark-mode app",
    glow: "rgba(34,197,94,0.15)",
    content: (
      <div className="flex flex-col gap-4 w-full h-full">
        <div className="glass-input bg-white/10 px-[1.5vw] py-[1.5vh] rounded-[1vw] max-w-[80%] self-end">
          <p className="text-white text-[1.2vw] font-body">Generate a product hero image</p>
        </div>
        <div className="glass-panel relative h-[25vh] w-[90%] flex items-center justify-center overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-[200%]"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          <span className="text-white/50 font-body text-[1vw]">[Image generating...]</span>
        </div>
      </div>
    )
  },
  {
    model: "Suno v3",
    type: "Music Gen",
    user: "Compose a 30s ambient electronic track",
    glow: "rgba(13,31,45,0.3)",
    content: (
      <div className="flex flex-col gap-4 w-full h-full">
        <div className="glass-input bg-white/10 px-[1.5vw] py-[1.5vh] rounded-[1vw] max-w-[80%] self-end">
          <p className="text-white text-[1.2vw] font-body">Compose a 30s ambient track</p>
        </div>
        <div className="bg-white/5 rounded-[1vw] p-4 flex flex-col gap-4 w-[90%]">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#22c55e] flex items-center justify-center">
              <div className="w-3 h-3 bg-black ml-1 rounded-sm clip-play" style={{ clipPath: 'polygon(0 0, 0 100%, 100% 50%)' }} />
            </div>
            <div>
              <p className="text-white text-[1vw] font-body">Ambient Flow.mp3</p>
              <p className="text-white/50 text-[0.8vw] font-mono">0:12 / 0:30</p>
            </div>
          </div>
          <div className="flex items-center gap-1 h-8">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 bg-[#22c55e]/80 rounded-full"
                animate={{ height: ['20%', '100%', '20%'] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.05,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    model: "Sora",
    type: "Video Gen",
    user: "Create a promo clip for our launch",
    glow: "rgba(10,10,20,0.4)",
    content: (
      <div className="flex flex-col gap-4 w-full h-full">
        <div className="glass-input bg-white/10 px-[1.5vw] py-[1.5vh] rounded-[1vw] max-w-[80%] self-end">
          <p className="text-white text-[1.2vw] font-body">Create a promo clip for our launch</p>
        </div>
        <div className="glass-panel w-[90%] p-[1.5vw] flex flex-col gap-[2vh]">
          <div className="flex justify-between text-white/70 text-[1vw] font-body">
            <span>Rendering video...</span>
            <span>68%</span>
          </div>
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-[#22c55e]"
              initial={{ width: "0%" }}
              animate={{ width: "68%" }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    )
  },
  {
    model: "Perplexity",
    type: "Research",
    user: "Deep research on AI market trends",
    glow: "rgba(34,197,94,0.1)",
    content: (
      <div className="flex flex-col gap-4 w-full h-full">
        <div className="glass-input bg-white/10 px-[1.5vw] py-[1.5vh] rounded-[1vw] max-w-[80%] self-end">
          <p className="text-white text-[1.2vw] font-body">Deep research on AI market trends</p>
        </div>
        <div className="px-[1.5vw] max-w-[90%] text-white/80 text-[1vw] font-body flex flex-col gap-3">
          <h4 className="font-bold text-white text-[1.2vw]">AI Market Analysis 2025</h4>
          <p className="opacity-80">1. Consolidation of tools into unified platforms.</p>
          <p className="opacity-80">2. Rise of multimodal models handling text, image, and audio natively.</p>
          <p className="opacity-80">3. Increased demand for specialized coding assistants.</p>
          <div className="flex gap-2 mt-2">
            <span className="text-[0.8vw] bg-white/10 px-2 py-1 rounded">Source 1</span>
            <span className="text-[0.8vw] bg-white/10 px-2 py-1 rounded">Source 2</span>
          </div>
        </div>
      </div>
    )
  }
];

export function Scene5ChatPan2() {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center z-10"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ scale: 1.2, opacity: 0, filter: 'blur(20px)', transition: { duration: 0.6 } }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div 
        className="glass-panel px-6 py-2 mt-[5vh] z-20"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
      >
        <span className="text-white font-display text-[1.5vw]">One prompt. Any modality.</span>
      </motion.div>

      <motion.div
        className="absolute top-[10vh] flex gap-[10vw] items-start"
        style={{ width: '300vw' }}
        animate={{ x: ['-130vw', '10vw'], y: ['0vh', '10vh'] }}
        transition={{ duration: 7, ease: "linear" }}
      >
        {panels.map((panel, idx) => (
          <div 
            key={idx} 
            className="relative"
            style={{ transform: `rotate(${idx % 2 === 0 ? 1 : -2}deg)` }}
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

              {/* Content */}
              <div className="flex-1 p-[2vw] overflow-hidden">
                {panel.content}
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
