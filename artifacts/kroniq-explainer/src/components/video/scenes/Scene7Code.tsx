import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const lines: Array<{ tokens: Array<{ text: string; color: string }> }> = [
  { tokens: [{ text: 'import', color: '#c678dd' }, { text: ' { KroniQ } ', color: '#e5c07b' }, { text: 'from', color: '#c678dd' }, { text: " '@kroniq/sdk'", color: '#22c55e' }, { text: ';', color: '#abb2bf' }] },
  { tokens: [] },
  { tokens: [{ text: 'const', color: '#c678dd' }, { text: ' client = ', color: '#abb2bf' }, { text: 'new', color: '#c678dd' }, { text: ' KroniQ', color: '#e5c07b' }, { text: '({', color: '#abb2bf' }] },
  { tokens: [{ text: '  apiKey', color: '#e06c75' }, { text: ': ', color: '#abb2bf' }, { text: 'process.env', color: '#61afef' }, { text: '.KRONIQ_API_KEY', color: '#abb2bf' }] },
  { tokens: [{ text: '});', color: '#abb2bf' }] },
  { tokens: [] },
  { tokens: [{ text: 'const', color: '#c678dd' }, { text: ' response = ', color: '#abb2bf' }, { text: 'await', color: '#c678dd' }, { text: ' client.chat.', color: '#abb2bf' }, { text: 'create', color: '#61afef' }, { text: '({', color: '#abb2bf' }] },
  { tokens: [{ text: '  model', color: '#e06c75' }, { text: ': ', color: '#abb2bf' }, { text: "'claude-opus-4-6'", color: '#22c55e' }, { text: ',', color: '#abb2bf' }] },
  { tokens: [{ text: '  messages', color: '#e06c75' }, { text: ': [{', color: '#abb2bf' }] },
  { tokens: [{ text: '    role', color: '#e06c75' }, { text: ': ', color: '#abb2bf' }, { text: "'user'", color: '#22c55e' }, { text: ',', color: '#abb2bf' }] },
  { tokens: [{ text: '    content', color: '#e06c75' }, { text: ': ', color: '#abb2bf' }, { text: "'Refactor this function for performance'", color: '#22c55e' }] },
  { tokens: [{ text: '  }]', color: '#abb2bf' }] },
  { tokens: [{ text: '});', color: '#abb2bf' }] },
  { tokens: [] },
  { tokens: [{ text: '// Switch to any model — zero config changes', color: '#5c6370', }, ] },
];

export function Scene7Code() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      if (current < lines.length) {
        current++;
        setVisibleLines(current);
      } else {
        clearInterval(interval);
      }
    }, 45); // Extremely sped up typing
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center z-10"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ scale: 1.15, opacity: 0, filter: 'blur(20px)', zIndex: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } } as any}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Smooth camera wrapper */}
      <motion.div 
        className="w-full h-full flex flex-col items-center justify-center"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 4, ease: "easeOut" }}
      >
        <motion.div className="glass-panel w-[62vw] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)]">
          {/* Editor titlebar */}
          <div className="flex items-center px-[1.8vw] py-[1.4vh] border-b border-white/8"
            style={{ background: 'rgba(0,0,0,0.35)' }}>
            <div className="flex gap-[0.5vw] mr-[1.5vw]">
              <div className="w-[0.85vw] h-[0.85vw] rounded-full bg-[#ff5f57]" />
              <div className="w-[0.85vw] h-[0.85vw] rounded-full bg-[#febc2e]" />
              <div className="w-[0.85vw] h-[0.85vw] rounded-full bg-[#28c840]" />
            </div>
            <span className="text-white/40 font-mono text-[0.9vw] mx-auto">assistant.ts — KroniQ SDK</span>
          </div>

          {/* Line numbers + code */}
          <div className="p-[2vw] font-mono text-[1.35vw] leading-[1.8] min-h-[38vh]"
            style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.05))' }}>
            {lines.slice(0, visibleLines).map((line, li) => (
              <div key={li} className="flex">
                <span className="text-white/15 select-none mr-[1.5vw] text-right min-w-[2vw]">{line.tokens.length ? li + 1 : ''}</span>
                <span>
                  {line.tokens.map((tok, ti) => (
                    <span key={ti} style={{ color: tok.color }}>{tok.text}</span>
                  ))}
                </span>
              </div>
            ))}
            {/* Blinking cursor */}
            <div className="flex">
              <span className="text-white/15 mr-[1.5vw] min-w-[2vw]" />
              <motion.span
                className="inline-block w-[0.85vw] h-[1.6vw] bg-[#22c55e] align-middle shadow-[0_0_10px_#22c55e]"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.7, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-[4vh] text-[2.4vw] text-white font-body font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          Code with <span className="text-[#22c55e]">20+ developer models.</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
