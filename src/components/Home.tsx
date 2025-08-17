import { motion } from 'framer-motion';
import { AnimatedTitle } from './AnimatedTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitch, faInstagram, faYoutube, faKickstarterK } from '@fortawesome/free-brands-svg-icons';
import { useCursor } from '../context/CursorContext';

export const Home = () => {
  const { setCursorVariant } = useCursor();

  const handleMouseEnter = () => setCursorVariant('link');
  const handleMouseLeave = () => setCursorVariant('default');

  return (
    <section id="home" className="scroll-section">
      <div className="text-center flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8"
        >
          <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-grad-purple-from to-grad-purple-to p-1.5 shadow-2xl transition-all duration-500 hover:shadow-purple-500/50 hover:scale-105">
            <img
              src="https://res.cloudinary.com/dtuacdvn6/image/upload/v1754910789/488542267_17947660721955577_4155195984179514929_n_qcgrdj.jpg"
              alt="Foto de Gabriela Carrilho"
              className="w-full h-full rounded-full object-cover border-4 border-background"
            />
          </div>
        </motion.div>

        <AnimatedTitle
          text="GABRIELA CARRILHO"
          className="text-5xl !font-bold tracking-wide !mb-2 justify-center font-heading"
        />

        <motion.p
          className="text-xl text-text-secondary tracking-wider uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          Criadora de Conteúdo Digital
        </motion.p>
        <motion.div
          className="flex justify-center items-center mt-6 space-x-6 text-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          <motion.a
            href="https://www.twitch.tv/yungyro"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitch"
            className="text-accent-primary hover:text-[#9146FF] transition-colors duration-300"
            whileHover={{ y: -2, scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
              <FontAwesomeIcon icon={faTwitch}/>
          </motion.a>
          <motion.a
            href="https://kick.com/yungyro"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kick"
            className="text-accent-primary hover:text-[#53FC18] transition-colors duration-300"
            whileHover={{ y: -2, scale: 1.1, rotate: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
              <FontAwesomeIcon icon={faKickstarterK}/>
          </motion.a>
          <motion.a
            href="https://www.instagram.com/yungyro"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-accent-primary hover:text-[#E4405F] transition-colors duration-300"
            whileHover={{ y: -2, scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
              <FontAwesomeIcon icon={faInstagram}/>
          </motion.a>
          <motion.a
            href="https://www.youtube.com/@yungyro"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="text-accent-primary hover:text-[#FF0000] transition-colors duration-300"
            whileHover={{ y: -2, scale: 1.1, rotate: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
              <FontAwesomeIcon icon={faYoutube}/>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};