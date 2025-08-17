import { User } from 'lucide-react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faYoutube,
  faTwitch,
  faKickstarterK,
} from '@fortawesome/free-brands-svg-icons';
import { useCursor } from '../context/CursorContext';

interface AboutProps {
  onMouseMove: (e: React.MouseEvent<HTMLElement>) => void;
}

export const About = ({ onMouseMove }: AboutProps) => {
  const { setCursorVariant } = useCursor();

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

  const handleMouseEnter = () => setCursorVariant('link');
  const handleMouseLeave = () => setCursorVariant('default');

  return (
    <motion.section
      id="about"
      className="scroll-section"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.div
        className="card-glow glass-effect rounded-2xl p-8 max-w-4xl w-full transition-transform duration-300 hover:-translate-y-2 grid grid-cols-1 md:grid-cols-5 gap-8 items-center"
        onMouseMove={onMouseMove}
        variants={cardVariants}
      >
        <div className="md:col-span-3">
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

        <div className="md:col-span-2 flex justify-center items-center">
          <motion.img
            src="https://pbs.twimg.com/profile_images/1952028965897445376/liE_oQAO_400x400.jpg"
            alt="Foto de Gabriela Carrilho"
            className="w-64 h-64 rounded-lg object-cover border-4 border-dark-purple/30 shadow-2xl transition-transform duration-300 md:translate-x-16"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          />
        </div>
      </motion.div>
    </motion.section>
  );
};