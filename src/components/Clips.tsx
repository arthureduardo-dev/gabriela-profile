import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clapperboard, PlayCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { clipsData } from '../data';

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const Clips = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [loadVideo, setLoadVideo] = useState(false);

  const activeClipIndex = page % clipsData.length;
  const videoId = clipsData[activeClipIndex].videoId;

  const paginate = (newDirection: number) => {
    setPage([(page + newDirection + clipsData.length) % clipsData.length, newDirection]);
    setLoadVideo(false);
  };

  const handleDotClick = (index: number) => {
    const newDirection = index > activeClipIndex ? 1 : -1;
    setPage([index, newDirection]);
    setLoadVideo(false);
  };

  const handlePlayClick = () => {
    setLoadVideo(true);
  };

  return (
    <section id="clips" className="scroll-section">
      <div className="w-full max-w-4xl flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-2 text-text-primary flex items-center font-heading">
          <Clapperboard className="mr-3" size={24} />
          Clipes em Destaque
        </h2>
        <p className="text-text-secondary mb-8 text-center">
          Alguns dos melhores (e mais engraçados) momentos que rolaram nas lives.
        </p>

        <div className="relative w-full aspect-video flex items-center justify-center overflow-hidden rounded-2xl bg-black border border-dark-purple/30 shadow-2xl shadow-purple-500/20">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              className="absolute w-full h-full"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
            >
              {loadVideo ? (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center cursor-pointer bg-cover bg-center"
                  style={{ backgroundImage: `url(https://i.ytimg.com/vi/${videoId}/hqdefault.jpg)` }}
                  onClick={handlePlayClick}
                >
                  <PlayCircle className="text-white text-opacity-80 hover:text-opacity-100 transition-opacity duration-300" size={64} />
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 z-10 pointer-events-none">
            <button onClick={() => paginate(-1)} className="pointer-events-auto bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors">
              <ChevronLeft size={24} />
            </button>
            <button onClick={() => paginate(1)} className="pointer-events-auto bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-4 space-x-2">
          {clipsData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeClipIndex === index ? 'bg-text-primary scale-125' : 'bg-dark-purple'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};