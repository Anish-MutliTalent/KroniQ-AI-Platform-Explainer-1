import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const codeLines = [
  { text: "import", color: "#c678dd", type: "keyword" },
  { text: " { KroniQ } ", color: "#ffffff", type: "text" },
  { text: "from", color: "#c678dd", type: "keyword" },
  { text: " '@kroniq/sdk';", color: "#22c55e", type: "string" },
  { text: "\n\n", color: "", type: "newline" },
  { text: "const", color: "#c678dd", type: "keyword" },
  { text: " client = ", color: "#ffffff", type: "text" },
  { text: "new", color: "#c678dd", type: "keyword" },
  { text: " KroniQ({\n", color: "#e5c07b", type: "class" },
  { text: "  apiKey: process.env.KRONIQ_KEY\n", color: "#ffffff", type: "text" },
  { text: "});\n\n", color: "#ffffff", type: "text" },
  { text: "const", color: "#c678dd", type: "keyword" },
  { text: " response = ", color: "#ffffff", type: "text" },
  { text: "await", color: "#c678dd", type: "keyword" },
  { text: " client.chat.", color: "#ffffff", type: "text" },
  { text: "create", color: "#61afef", type: "function" },
  { text: "({\n", color: "#ffffff", type: "text" },
  { text: "  model: ", color: "#ffffff", type: "text" },
  { text: "'claude-opus-4-6'", color: "#22c55e", type: "string" },
  { text: ",\n  messages: [{ role: ", color: "#ffffff", type: "text" },
  { text: "'user'", color: "#22c55e", type: "string" },
  { text: ", content: ", color: "#ffffff", type: "text" },
  { text: "'Optimize this function'" , color: "#22c55e", type: "string" },
  { text: " }]\n});", color: "#ffffff", type: "text" }
];

export function Scene8Code() {
  const [visibleTokens, setVisibleTokens] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      if (current < codeLines.length) {
        current++;
        setVisibleTokens(current);
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center z-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ scale: 1.5, opacity: 0, filter: 'blur(30px)', transition: { duration: 0.6 } } as any}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div className="glass-panel w-[60vw] overflow-hidden">
        {/* Editor Header */}
        <div className="bg-black/40 px-[1.5vw] py-[1vh] flex items-center border-b border-white/10">
          <div className="flex gap-[0.5vw]">
            <div className="w-[0.8vw] h-[0.8vw] rounded-full bg-red-500" />
            <div className="w-[0.8vw] h-[0.8vw] rounded-full bg-yellow-500" />
            <div className="w-[0.8vw] h-[0.8vw] rounded-full bg-green-500" />
          </div>
          <div className="mx-auto text-white/50 font-mono text-[0.9vw]">assistant.ts</div>
        </div>

        {/* Editor Body */}
        <div className="p-[2vw] font-mono text-[1.4vw] whitespace-pre-wrap leading-relaxed min-h-[35vh]">
          {codeLines.slice(0, visibleTokens).map((token, i) => (
            <span key={i} style={{ color: token.color }}>
              {token.text}
            </span>
          ))}
          <motion.span
            className="inline-block w-[0.8vw] h-[1.5vw] bg-white align-middle ml-1"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        </div>
      </motion.div>

      <motion.div 
        className="mt-[4vh] text-[2.5vw] text-white font-body font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        Code with 20+ developer models.
      </motion.div>
    </motion.div>
  );
}
