import { motion } from 'framer-motion';

const socialCards = [
  {
    title: "Multi-Platform Content",
    desc: "One prompt → perfectly tailored posts for LinkedIn, X, Instagram, TikTok, and more. AI adapts tone and style for each platform.",
    image: "multiplatformcontent.png"
  },
  {
    title: "AI Visual Engine",
    desc: "Generate scroll-stopping images and short video clips for every post. AI matches your brand colors automatically.",
    image: "aivisuals.png"
  },
  {
    title: "Smart Content Library",
    desc: "Every generation saved and searchable. Browse, reuse, and iterate on past posts across folders.",
    image: "smart content.png"
  }
];

export function Scene2dSocial() {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center z-20 overflow-hidden bg-[#050508]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ scale: 1.15, opacity: 0, filter: 'blur(20px)', zIndex: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } } as any}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: '2000px' }}
    >
      {/* Background sweep */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-[#0d3318]/10 via-transparent to-transparent"
        animate={{ scale: [1, 1.2, 1], filter: ['blur(100px)', 'blur(150px)', 'blur(100px)'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />

      <motion.div 
        className="w-full h-full flex flex-col items-center pt-[10vh]"
        initial={{ rotateX: 25, y: -20, scale: 0.95 }}
        animate={{ rotateX: 0, y: 0, scale: 1 }}
        transition={{ duration: 4, ease: "easeOut" }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Header content */}
        <motion.div
          className="flex flex-col items-center max-w-[65vw] text-center z-30 mb-[8vh]"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 350, damping: 25 }}
        >
          <div className="glass-input px-[1.2vw] py-[0.6vh] rounded-full border border-[#22c55e]/30 flex items-center gap-[0.6vw] mb-[2vh]">
            <div className="w-[0.5vw] h-[0.5vw] rounded-full bg-[#22c55e] shadow-[0_0_8px_#22c55e]" />
            <span className="text-white font-mono text-[0.85vw]">Introducing Social KroniQ</span>
          </div>

          <h2 className="text-[4.5vw] font-display font-bold text-white tracking-tight mb-[2vh] leading-[1.1]">
            AI-Powered Social Content. <br />
            <span className="text-[#22c55e]">Done for you.</span>
          </h2>

          <p className="text-[1.4vw] font-body text-white/50 leading-relaxed px-[4vw]">
            Generate platform-ready posts, images, and videos for 8+ social platforms — including LinkedIn, X, Instagram, TikTok, and YouTube.
          </p>
        </motion.div>

        {/* 3D Angled Cards Layout */}
        <div className="flex justify-center items-center w-full gap-[3vw] relative mt-[2vh]" style={{ transformStyle: 'preserve-3d' }}>
          {socialCards.map((card, i) => {
            const isCenter = i === 1;
            const rotY = i === 0 ? 15 : i === 2 ? -15 : 0;
            const zOff = isCenter ? 100 : 0;
            return (
              <motion.div
                key={i}
                className="glass-panel w-[26vw] h-[35vh] flex flex-col justify-end p-[2vw] relative overflow-hidden group border border-white/5"
                initial={{ opacity: 0, rotateY: rotY + (i === 0 ? 30 : -30), z: zOff - 300, y: 100 }}
                animate={{ opacity: 1, rotateY: rotY, z: zOff, y: 0 }}
                transition={{
                  delay: 0.4 + i * 0.15,
                  type: 'spring',
                  stiffness: 200,
                  damping: 25
                }}
                style={{ 
                  boxShadow: isCenter ? '0 30px 60px -15px rgba(0,0,0,0.8)' : '0 20px 40px -10px rgba(0,0,0,0.6)',
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Edge glow */}
                <div className="absolute inset-0 border border-[#22c55e]/0 group-hover:border-[#22c55e]/30 transition-colors duration-500 rounded-inherit" />
                
                {/* Simulated UI Content Layer inside card */}
                <div className="absolute top-[2vw] left-[2vw] right-[2vw] h-[16vh] rounded-[0.5vw] overflow-hidden bg-black/40 border border-white/10 flex items-center justify-center">
                  <img src={`${import.meta.env.BASE_URL}${card.image}`} alt={card.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="relative z-10 mt-[1vh]">
                  <h3 className="text-white font-display font-bold text-[1.6vw] mb-[1vh]">{card.title}</h3>
                  <p className="text-white/50 font-body text-[0.9vw] leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </motion.div>
    </motion.div>
  );
}
