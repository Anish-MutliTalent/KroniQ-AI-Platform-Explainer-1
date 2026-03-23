import { AnimatePresence } from 'framer-motion';
import { useVideoPlayer } from '@/lib/video';
import { PersistentBackground } from './PersistentBackground';
import { Scene1Hook } from './scenes/Scene1Hook';
import { Scene2Competitors } from './scenes/Scene2Competitors';
import { Scene3ChatPan1 } from './scenes/Scene3ChatPan1';
import { Scene4ChatPan2 } from './scenes/Scene4ChatPan2';
import { Scene5Images } from './scenes/Scene5Images';
import { Scene6Music } from './scenes/Scene6Music';
import { Scene7Code } from './scenes/Scene7Code';
import { Scene8Models } from './scenes/Scene8Models';
import { Scene9Counters } from './scenes/Scene9Counters';
import { Scene10CTA } from './scenes/Scene10CTA';

const SCENE_DURATIONS = {
  hook: 4000,
  competitors: 5500,
  chat_pan_1: 8000,
  chat_pan_2: 7000,
  features_images: 5000,
  features_music: 5000,
  features_code: 6000,
  models_showcase: 6000,
  counters: 5000,
  cta: 7000,
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
        {currentScene === 0 && <Scene1Hook key="s1" />}
        {currentScene === 1 && <Scene2Competitors key="s2" />}
        {currentScene === 2 && <Scene3ChatPan1 key="s3" />}
        {currentScene === 3 && <Scene4ChatPan2 key="s4" />}
        {currentScene === 4 && <Scene5Images key="s5" />}
        {currentScene === 5 && <Scene6Music key="s6" />}
        {currentScene === 6 && <Scene7Code key="s7" />}
        {currentScene === 7 && <Scene8Models key="s8" />}
        {currentScene === 8 && <Scene9Counters key="s9" />}
        {currentScene === 9 && <Scene10CTA key="s10" />}
      </AnimatePresence>
    </div>
  );
}
