import { motion } from 'framer-motion';

const cards = [
  {
    title: "LinkedIn & long-form",
    desc: "Draft thought leadership, launch posts, and thread-style narratives with top chat models — then refine tone for your brand voice.",
    delay: 0.4
  },
  {
    title: "X & feed visuals",
    desc: "Turn prompts into campaign-ready images and carousels for feeds and announcements — no separate design tool required.",
    delay: 0.55
  },
  {
    title: "Reels & launch clips",
    desc: "Produce short-form video for product launches, teasers, and social — describe the scene, get a clip you can iterate on fast.",
    delay: 0.7
  }
];

export function Scene2cPillars() {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center z-20 px-[5vw]"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ scale: 1.15, opacity: 0, filter: 'blur(20px)', transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } } as any}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div 
        className="w-full flex justify-center items-center flex-col mt-[-5vh]"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 4, ease: "linear" }}
      >
        {/* Top Chip */}
        <motion.div
          className="glass-input px-[1.2vw] py-[0.6vh] rounded-full border border-[#22c55e]/30 flex items-center gap-[0.6vw] mb-[3.5vh]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <div className="w-[0.5vw] h-[0.5vw] rounded-full bg-[#22c55e] shadow-[0_0_8px_#22c55e]" />
          <span className="text-white font-mono text-[0.85vw]">3 content pillars</span>
        </motion.div>

        {/* Headings */}
        <motion.h2
          className="text-[4.5vw] font-display font-bold text-white tracking-tight mb-[2vh]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          From brief to <span className="text-[#22c55e]">publish-ready.</span>
        </motion.h2>

        <motion.p
          className="text-[1.3vw] font-body text-white/50 max-w-[55vw] text-center leading-relaxed mb-[6vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Long-form copy, social creatives, and motion — orchestrated with <br /> the same AI workspace your team logs into every day.
        </motion.p>

        {/* Cards Grid */}
        <div className="flex gap-[2vw] w-full max-w-[85vw]">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="flex-1 glass-panel p-[2vw] flex flex-col justify-end min-h-[45vh] relative overflow-hidden group"
              style={{
                boxShadow: '0 10px 40px -10px rgba(0,0,0,0.5)',
                border: '1px solid rgba(255,255,255,0.05)',
                transition: 'border-color 0.3s ease',
              }}
              whileHover={{ borderColor: 'rgba(34,197,94,0.4)' }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: card.delay, type: 'spring', stiffness: 350, damping: 28 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#052010] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 mt-auto">
                <h3 className="text-[1.8vw] font-display font-bold text-white mb-[1.5vh] tracking-tight">{card.title}</h3>
                <p className="text-[1vw] font-body text-white/50 leading-relaxed">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
