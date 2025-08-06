import React, { useState } from 'react';
import { Clapperboard, PlayCircle } from 'lucide-react';
import { clipsData } from '../data';

export const Clips = () => {
  const [activeClipIndex, setActiveClipIndex] = useState(0);
  const [loadVideo, setLoadVideo] = useState(false);

  const handleDotClick = (index: number) => {
    setActiveClipIndex(index);
    setLoadVideo(false);
  };

  const handlePlayClick = () => {
    setLoadVideo(true);
  };

  return (
    <section id="clips" className="scroll-section">
      <div className="max-w-4xl w-full flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-6 text-text-primary flex items-center self-start">
          <Clapperboard className="mr-3" size={24} />
          Clipes em Destaque
        </h2>
        <div className="relative w-full md:w-4/5 lg:w-3/5 aspect-video rounded-2xl overflow-hidden border border-dark-purple/30 bg-black">
          {loadVideo ? (
            <iframe
              key={clipsData[activeClipIndex].videoId}
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${clipsData[activeClipIndex].videoId}?autoplay=1&mute=1&loop=1&playlist=${clipsData[activeClipIndex].videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="w-full h-full flex items-center justify-center cursor-pointer" onClick={handlePlayClick}>
              <img
                src={`https://img.youtube.com/vi/${clipsData[activeClipIndex].videoId}/hqdefault.jpg`}
                alt="Video thumbnail"
                className="w-full h-full object-cover"
              />
              <div className="absolute">
                <PlayCircle className="text-white text-opacity-80 hover:text-opacity-100 transition-opacity" size={64} />
              </div>
            </div>
          )}
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