import { AnimatePresence } from 'framer-motion';
import { useVideoPlayer } from '@/lib/video';
import { PersistentBackground } from './PersistentBackground';
import { Scene1Hook } from './scenes/Scene1Hook';
import { Scene2Competitors } from './scenes/Scene2Competitors';
import { Scene2aCinematic } from './scenes/Scene2aCinematic';
import { Scene2bIntro } from './scenes/Scene2bIntro';
import { Scene2cOrchestration } from './scenes/Scene2cOrchestration';
import { Scene2dSocial } from './scenes/Scene2dSocial';
import { Scene3ChatPan1 } from './scenes/Scene3ChatPan1';
import { Scene4ChatPan2 } from './scenes/Scene4ChatPan2';
import { Scene5Images } from './scenes/Scene5Images';
import { Scene5bVideo } from './scenes/Scene5bVideo';
import { Scene6Music } from './scenes/Scene6Music';
import { Scene7Code } from './scenes/Scene7Code';
import { Scene8Models } from './scenes/Scene8Models';
import { Scene9Counters } from './scenes/Scene9Counters';
import { Scene10CTA } from './scenes/Scene10CTA';

const SCENE_DURATIONS = {
  hook: 3500,
  competitors: 6500,
  cinematic: 1800,
  intro: 3500,
  orchestration: 4000,
  social: 4500,
  chat_pan_1: 3000,
  chat_pan_2: 2800,
  features_images: 2800,
  features_video: 1800,
  features_music: 2800,
  features_code: 1600,
  models_showcase: 4500,
  counters: 2500,
  cta: 4000,
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

      {/* Remove mode="wait" to allow overlap and seamless transition */}
      <AnimatePresence>
        {currentScene === 0 && <Scene1Hook key="s1" />}
        {currentScene === 1 && <Scene2Competitors key="s2" />}
        {currentScene === 2 && <Scene2aCinematic key="s2a" />}
        {currentScene === 3 && <Scene2bIntro key="s2b" />}
        {currentScene === 4 && <Scene2cOrchestration key="s2c" />}
        {currentScene === 5 && <Scene2dSocial key="s2d" />}
        {currentScene === 6 && <Scene3ChatPan1 key="s3" />}
        {currentScene === 7 && <Scene4ChatPan2 key="s4" />}
        {currentScene === 8 && <Scene5Images key="s5" />}
        {currentScene === 9 && <Scene5bVideo key="s5b" />}
        {currentScene === 10 && <Scene6Music key="s6" />}
        {currentScene === 11 && <Scene7Code key="s7" />}
        {currentScene === 12 && <Scene8Models key="s8" />}
        {currentScene === 13 && <Scene9Counters key="s9" />}
        {currentScene === 14 && <Scene10CTA key="s10" />}
      </AnimatePresence>
    </div>
  );
}
