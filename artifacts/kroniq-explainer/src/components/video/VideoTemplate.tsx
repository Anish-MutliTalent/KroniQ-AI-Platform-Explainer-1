import { AnimatePresence, motion } from 'framer-motion';
import { useVideoPlayer } from '@/lib/video';
import { Scene1Hook } from './scenes/Scene1Hook';
import { Scene2Competitors } from './scenes/Scene2Competitors';
import { Scene3Logo } from './scenes/Scene3Logo';
import { Scene4Features } from './scenes/Scene4Features';
import { Scene5Counters } from './scenes/Scene5Counters';
import { Scene6CTA } from './scenes/Scene6CTA';

const SCENE_DURATIONS = {
  hook: 3000,
  competitors: 5000,
  logo: 3000,
  features: 8000,
  counters: 4000,
  cta: 3000,
};

function PersistentBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <motion.div 
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(34, 197, 94, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 70%, rgba(34, 197, 94, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 30%, rgba(34, 197, 94, 0.15) 0%, transparent 50%)'
          ]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      {/* Drifting geometric shapes */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 100 + 20,
            height: Math.random() * 100 + 20,
            background: 'rgba(34, 197, 94, 0.03)',
            left: `${Math.random() * 100}vw`,
            top: `${Math.random() * 100}vh`,
          }}
          animate={{
            y: [0, -200, 0],
            x: [0, Math.random() * 100 - 50, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

export default function VideoTemplate() {
  const { currentScene } = useVideoPlayer({
    durations: SCENE_DURATIONS,
  });

  return (
    <div
      className="w-full h-screen overflow-hidden relative"
      style={{ backgroundColor: '#0a0a0a' }}
    >
      <PersistentBackground />
      
      <AnimatePresence mode="wait">
        {currentScene === 0 && <Scene1Hook key="scene1" />}
        {currentScene === 1 && <Scene2Competitors key="scene2" />}
        {currentScene === 2 && <Scene3Logo key="scene3" />}
        {currentScene === 3 && <Scene4Features key="scene4" />}
        {currentScene === 4 && <Scene5Counters key="scene5" />}
        {currentScene === 5 && <Scene6CTA key="scene6" />}
      </AnimatePresence>
    </div>
  );
}
