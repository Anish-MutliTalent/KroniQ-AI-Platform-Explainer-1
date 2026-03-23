import { motion } from 'framer-motion';

const panels = [
  {
    model: "Flux Pro",
    label: "Image Gen",
    user: "Generate a product hero image for a dark-mode SaaS app",
    glow: "rgba(34,197,94,0.15)",
    content: () => (
      <div className="flex flex-col gap-[2vh] w-full">
        <div className="glass-input px-[1.5vw] py-[1.4vh] self-end max-w-[80%]" style={{ background: 'rgba(255,255,255,0.05)' }}>
          <p className="text-white text-[1.15vw] font-body">Generate a product hero image for a dark-mode SaaS app</p>
        </div>
        <div className="glass-panel relative h-[28vh] w-full flex items-center justify-center overflow-hidden">
          <motion.div
            className="absolute inset-0"
            animate={{ background: ['linear-gradient(135deg, #0d1f2d, #052010, #070d1a)', 'linear-gradient(135deg, #070d1a, #0d1f2d, #052010)', 'linear-gradient(135deg, #052010, #070d1a, #0d1f2d)'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/12 to-transparent"
            style={{ width: '250%', left: '-75%' }}
            animate={{ x: ['-60%', '60%'] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span className="text-white/50 font-body text-[1vw] z-10 relative font-medium tracking-wide">Generating image...</span>
        </div>
        <div className="flex items-center gap-[1vw]">
          <div className="flex gap-[0.4vw]">
            {[0, 1, 2].map(i => (
              <motion.div key={i} className="w-[0.5vw] h-[0.5vw] rounded-full bg-[#22c55e]"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </div>
          <span className="text-white/40 font-body text-[0.9vw]">Processing with Flux Pro...</span>
        </div>
      </div>
    )
  },
  {
    model: "Suno v4",
    label: "Music Gen",
    user: "Compose a 30s upbeat ambient track for a product demo",
    glow: "rgba(13,31,45,0.35)",
    content: () => (
      <div className="flex flex-col gap-[2vh] w-full">
        <div className="glass-input px-[1.5vw] py-[1.4vh] self-end max-w-[80%]" style={{ background: 'rgba(255,255,255,0.05)' }}>
          <p className="text-white text-[1.15vw] font-body">Compose a 30s upbeat ambient track</p>
        </div>
        <div className="glass-panel p-[1.5vw] w-full flex flex-col gap-[1.5vh]">
          <div className="flex justify-between items-center">
            <span className="text-white font-body text-[1vw] font-medium">Product Launch Theme.mp3</span>
            <span className="text-[#22c55e] font-mono text-[0.9vw]">0:16 / 0:30</span>
          </div>
          <div className="flex items-end justify-center gap-[0.35vw] h-[8vh] w-full">
            {[...Array(32)].map((_, i) => (
              <motion.div
                key={i}
                className="flex-1 bg-[#22c55e] rounded-t-sm"
                animate={{ height: [`${15 + Math.sin(i * 0.5) * 15}%`, `${50 + Math.sin(i * 0.5 + 1.5) * 40}%`, `${15 + Math.sin(i * 0.5) * 15}%`] }}
                transition={{ duration: 0.6 + (i % 4) * 0.15, repeat: Infinity, ease: 'easeInOut', delay: i * 0.04 }}
                style={{ minHeight: '10%', opacity: 0.7 + (i % 3) * 0.1 }}
              />
            ))}
          </div>
          <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden">
            <motion.div className="h-full bg-[#22c55e] rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '53%' }}
              transition={{ duration: 2, ease: 'easeOut' }}
            />
          </div>
        </div>
      </div>
    )
  },
  {
    model: "Sora",
    label: "Video Gen",
    user: "Create a 15s promo clip for our SaaS launch",
    glow: "rgba(10,10,20,0.5)",
    content: () => (
      <div className="flex flex-col gap-[2vh] w-full">
        <div className="glass-input px-[1.5vw] py-[1.4vh] self-end max-w-[80%]" style={{ background: 'rgba(255,255,255,0.05)' }}>
          <p className="text-white text-[1.15vw] font-body">Create a 15s promo clip for our launch</p>
        </div>
        <div className="glass-panel p-[1.5vw] w-full flex flex-col gap-[2vh]">
          <div className="flex justify-between items-center">
            <span className="text-white font-body text-[1vw]">Rendering: launch_promo_v1.mp4</span>
            <span className="text-[#22c55e] font-mono text-[1vw]">74%</span>
          </div>
          <div className="w-full h-[4px] bg-white/10 rounded-full overflow-hidden">
            <motion.div className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, #166534, #22c55e)' }}
              initial={{ width: '0%' }}
              animate={{ width: '74%' }}
              transition={{ duration: 2.5, ease: 'easeOut' }}
            />
          </div>
          <div className="grid grid-cols-3 gap-[1vw]">
            {['Scene 1', 'Scene 2', 'Scene 3'].map((s, i) => (
              <motion.div key={s} className="glass-input py-[1vh] flex items-center justify-center gap-[0.5vw]"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ delay: i * 0.3, duration: 0.4 }}>
                <div className="w-[0.4vw] h-[0.4vw] rounded-full bg-[#22c55e]" />
                <span className="text-white/60 font-body text-[0.85vw]">{s}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    model: "Perplexity",
    label: "Research",
    user: "Analyze the competitive AI platform landscape for 2025",
    glow: "rgba(34,197,94,0.12)",
    content: () => (
      <div className="flex flex-col gap-[2vh] w-full">
        <div className="glass-input px-[1.5vw] py-[1.4vh] self-end max-w-[80%]" style={{ background: 'rgba(255,255,255,0.05)' }}>
          <p className="text-white text-[1.15vw] font-body">Analyze the competitive AI platform landscape for 2025</p>
        </div>
        <div className="flex flex-col gap-[1.2vh]">
          <h4 className="text-white font-display font-bold text-[1.2vw]">AI Platform Landscape 2025</h4>
          {['Platform consolidation accelerating — 3 dominant players emerging', 'Multimodal capability now table stakes, not differentiator', 'Developer APIs becoming primary distribution channel', 'Enterprise security posture dictating vendor selection'].map((point, i) => (
            <motion.div key={i} className="flex gap-[0.8vw] items-start"
              initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.12, duration: 0.35 }}>
              <div className="w-[0.4vw] h-[0.4vw] rounded-full bg-[#22c55e] mt-[0.6vw] flex-shrink-0" />
              <p className="text-white/75 font-body text-[0.95vw] leading-snug">{point}</p>
            </motion.div>
          ))}
          <div className="flex gap-[0.6vw] mt-[0.5vh]">
            {['Gartner 2025', 'CB Insights', 'Bloomberg'].map(s => (
              <span key={s} className="text-[0.75vw] bg-white/8 border border-white/12 px-[0.6vw] py-[0.3vh] rounded-full text-white/50 font-body">{s}</span>
            ))}
          </div>
        </div>
      </div>
    )
  }
];

export function Scene4ChatPan2() {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col z-20 overflow-hidden"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ scale: 1.15, opacity: 0, filter: 'blur(20px)', zIndex: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } } as any}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div 
        className="w-full h-full flex flex-col"
        initial={{ scale: 0.95, y: -10 }}
        animate={{ scale: 1, y: 10 }}
        transition={{ duration: 3, ease: "linear" }}
      >
        <motion.div
          className="glass-panel self-center mt-[4vh] px-[2vw] py-[1.2vh] z-20 flex items-center gap-[0.8vw]"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.08, type: 'spring', stiffness: 500, damping: 35 }}
        >
          <div className="w-[0.6vw] h-[0.6vw] rounded-full bg-[#22c55e]" style={{ boxShadow: '0 0 8px #22c55e' }} />
          <span className="text-white font-display font-medium text-[1.4vw]">One prompt. Any modality.</span>
        </motion.div>

        <motion.div
          className="absolute top-[14vh] flex gap-[4vw] items-start px-[5vw]"
          style={{ width: '290vw' }}
          initial={{ x: '-165vw' }}
          animate={{ x: '15vw' }}
          transition={{ duration: 3, ease: [0.25, 0.1, 0.25, 1] }} // Sped up further
        >
          {panels.map((panel, idx) => {
            const Content = panel.content;
            return (
              <div
                key={idx}
                className="relative flex-shrink-0"
                style={{ transform: `rotate(${idx % 2 === 0 ? 1 : -1.5}deg)` }}
              >
                <div className="absolute inset-[-4vh] blur-[90px] rounded-full" style={{ background: panel.glow }} />
                <div className="glass-panel w-[44vw] h-[72vh] flex flex-col relative z-10 shadow-[0_20px_50px_-5px_rgba(0,0,0,0.5)]">
                  <div className="flex justify-between items-center px-[2vw] py-[2vh] border-b border-white/8">
                    <span className="font-display font-bold text-white text-[1.4vw] tracking-tight">KroniQ</span>
                    <div className="flex items-center gap-[0.8vw]">
                      <div className="w-[0.6vw] h-[0.6vw] rounded-full bg-[#22c55e]" style={{ boxShadow: '0 0 6px #22c55e' }} />
                      <span className="text-white/60 text-[0.95vw] font-body bg-white/6 px-[0.8vw] py-[0.4vh] rounded-full border border-white/10">{panel.model}</span>
                      <span className="text-[#22c55e]/70 text-[0.85vw] font-body bg-[#22c55e]/10 px-[0.6vw] py-[0.3vh] rounded-full border border-[#22c55e]/20">{panel.label}</span>
                    </div>
                  </div>
                  <div className="flex-1 px-[2vw] py-[2vh] overflow-hidden">
                    <Content />
                  </div>
                  <div className="px-[2vw] py-[2vh]">
                    <div className="glass-input w-full px-[1.4vw] py-[1.2vh] flex items-center gap-[0.6vw]">
                      <span className="text-white/35 text-[1vw] font-body flex-1">Ask anything...</span>
                      <motion.div className="w-[1.5px] h-[1.3vw] bg-[#22c55e]"
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.7, repeat: Infinity }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
