import { User } from 'lucide-react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faYoutube,
  faTwitch,
  faKickstarterK,
} from '@fortawesome/free-brands-svg-icons';

interface AboutProps {
  onMouseMove: (e: React.MouseEvent<HTMLElement>) => void;
}

export const About = ({ onMouseMove }: AboutProps) => {
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.section
      id="about"
      className="scroll-section"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div
        className="card-glow glass-effect rounded-2xl p-8 max-w-4xl w-full transition-transform duration-300 hover:-translate-y-2 flex flex-col"
        onMouseMove={onMouseMove}
        variants={cardVariants}
      >
        <div className="flex-grow">
          <h2 className="text-2xl font-semibold mb-6 text-text-primary flex items-center font-heading">
            <User className="mr-3" size={24} />
            Sobre mim
          </h2>
          <p className="text-lg leading-relaxed text-text-primary text-justify">
            Oi! Eu sou a Gabriela, sou criadora de conteúdo, faço lives na Twitch, Kick e YouTube.
            Meu foco é gameplay de jogos variados, interação com o chat, humor com memes, dicas de
            looks e alimentação saudável - sempre de forma leve e sem neura! Meu objetivo é criar um
            espaço acolhedor e animado, onde as pessoas possam rir, se sentir bem e trocar ideias
            sobre o que amam.
          </p>
        </div>
        <div className="flex justify-end items-center mt-6 space-x-4 text-2xl">
            <a href="https://www.twitch.tv/yungyro" target="_blank" rel="noopener noreferrer" aria-label="Twitch" className="text-accent-primary hover:text-[#9146FF] transition-colors duration-300">
                <FontAwesomeIcon icon={faTwitch} className="transform hover:scale-110 transition-transform"/>
            </a>
            <a href="https://kick.com/yungyro" target="_blank" rel="noopener noreferrer" aria-label="Kick" className="text-accent-primary hover:text-[#53FC18] transition-colors duration-300">
                <FontAwesomeIcon icon={faKickstarterK} className="transform hover:scale-110 transition-transform"/>
            </a>
            <a href="https://www.instagram.com/yungyro" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-accent-primary hover:text-[#E4405F] transition-colors duration-300">
                <FontAwesomeIcon icon={faInstagram} className="transform hover:scale-110 transition-transform"/>
            </a>
            <a href="https://www.youtube.com/@yungyro" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-accent-primary hover:text-[#FF0000] transition-colors duration-300">
                <FontAwesomeIcon icon={faYoutube} className="transform hover:scale-110 transition-transform"/>
            </a>
        </div>
      </motion.div>
    </motion.section>
  );
};