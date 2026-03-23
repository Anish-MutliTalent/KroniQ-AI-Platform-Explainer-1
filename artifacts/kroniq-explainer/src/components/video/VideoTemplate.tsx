import { AnimatePresence } from 'framer-motion';
import { useVideoPlayer } from '@/lib/video';
import { PersistentBackground } from './PersistentBackground';
import { Scene1Hook } from './scenes/Scene1Hook';
import { Scene2Competitors } from './scenes/Scene2Competitors';
import { Scene3KroniQ } from './scenes/Scene3KroniQ';
import { Scene4ChatPan1 } from './scenes/Scene4ChatPan1';
import { Scene5ChatPan2 } from './scenes/Scene5ChatPan2';
import { Scene6Images } from './scenes/Scene6Images';
import { Scene7Music } from './scenes/Scene7Music';
import { Scene8Code } from './scenes/Scene8Code';
import { Scene9Models } from './scenes/Scene9Models';
import { Scene10Counters } from './scenes/Scene10Counters';
import { Scene11CTA } from './scenes/Scene11CTA';

const SCENE_DURATIONS = {
  hook: 4000,
  competitors: 6000,
  kroniq_intro: 4000,
  chat_pan_1: 8000,
  chat_pan_2: 7000,
  features_images: 5000,
  features_music: 5000,
  features_code: 6000,
  models_showcase: 6000,
  counters: 5000,
  cta: 6000,
};

export default function VideoTemplate() {
  const { currentScene } = useVideoPlayer({
    durations: SCENE_DURATIONS,
  });

  return (
    <div
      className="w-full h-screen overflow-hidden relative"
      style={{ backgroundColor: '#050508' }}
    >
      <PersistentBackground />
      
      <AnimatePresence mode="wait">
        {currentScene === 0 && <Scene1Hook key="scene1" />}
        {currentScene === 1 && <Scene2Competitors key="scene2" />}
        {currentScene === 2 && <Scene3KroniQ key="scene3" />}
        {currentScene === 3 && <Scene4ChatPan1 key="scene4" />}
        {currentScene === 4 && <Scene5ChatPan2 key="scene5" />}
        {currentScene === 5 && <Scene6Images key="scene6" />}
        {currentScene === 6 && <Scene7Music key="scene7" />}
        {currentScene === 7 && <Scene8Code key="scene8" />}
        {currentScene === 8 && <Scene9Models key="scene9" />}
        {currentScene === 9 && <Scene10Counters key="scene10" />}
        {currentScene === 10 && <Scene11CTA key="scene11" />}
      </AnimatePresence>
    </div>
  );
}
