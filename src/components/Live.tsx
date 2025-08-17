import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RadioTower } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitch, faKickstarterK } from '@fortawesome/free-brands-svg-icons';

export const Live = () => {
  const [platform, setPlatform] = useState('twitch');

  const twitchStreamUrl = 'https://player.twitch.tv/?channel=yungyro&parent=localhost&muted=true';
  const twitchChatUrl = 'https://www.twitch.tv/embed/yungyro/chat?parent=localhost&darkpopout';
  const kickUrl = 'https://player.kick.com/yungyro';

  return (
    <section id="live" className="scroll-section">
      <div className="w-full max-w-6xl flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-4 text-text-primary flex items-center font-heading">
          <RadioTower className="mr-3" size={24} />
          Ao Vivo 
        </h2>
        
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => setPlatform('twitch')}
            className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 text-lg ${platform === 'twitch' ? 'bg-[#9146FF] text-white shadow-lg' : 'bg-card-background hover:bg-opacity-80'}`}
          >
            <FontAwesomeIcon icon={faTwitch} />
            Twitch
          </button>
          <button
            onClick={() => setPlatform('kick')}
            className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 text-lg ${platform === 'kick' ? 'bg-[#53FC18] text-black shadow-lg' : 'bg-card-background hover:bg-opacity-80'}`}
          >
            <FontAwesomeIcon icon={faKickstarterK} />
            Kick
          </button>
        </div>

        <div className="w-full h-[70vh] rounded-2xl overflow-hidden glass-effect p-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={platform}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full"
            >
              {platform === 'twitch' ? (
                <div className="grid grid-cols-1 lg:grid-cols-4 w-full h-full gap-2">
                  <div className="lg:col-span-3 w-full h-full">
                    <iframe
                      src={twitchStreamUrl}
                      className="w-full h-full"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="hidden lg:block w-full h-full">
                    <iframe
                      src={twitchChatUrl}
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              ) : (
                <iframe
                  src={kickUrl}
                  className="w-full h-full"
                  allowFullScreen
                ></iframe>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};