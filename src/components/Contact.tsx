import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faYoutube,
  faTwitch,
  faKickstarterK,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { useCursor } from '../context/CursorContext';


interface ContactProps {
  onMouseMove: (e: React.MouseEvent<HTMLElement>) => void;
}

export const Contact = ({ onMouseMove }: ContactProps) => {
  const { setCursorVariant } = useCursor();

  const handleMouseEnter = () => setCursorVariant('link');
  const handleMouseLeave = () => setCursorVariant('default');

  return (
    <section id="contact" className="scroll-section">
      <div
        className="card-glow glass-effect rounded-2xl p-8 max-w-4xl w-full transition-transform duration-300 hover:-translate-y-2"
        onMouseMove={onMouseMove}
      >
        <div className="flex flex-col text-center">
          <h2 className="text-2xl font-semibold mb-6 text-text-primary font-heading">
            Contato
          </h2>
          <div className="flex flex-col space-y-4 mb-10 items-center">
            <a
              href="mailto:contatoyungyro@gmail.com"
              className="flex items-center justify-center text-text-primary hover:text-text-secondary transition-colors duration-300 group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Mail className="mr-2 group-hover:scale-110 transition-transform duration-300" size={20} />
              <span>contatoyungyro@gmail.com</span>
            </a>

            <a
              href="https://www.instagram.com/yungyro"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-text-primary hover:text-text-secondary transition-colors duration-300 group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
               <FontAwesomeIcon icon={faInstagram} className="mr-2 group-hover:scale-110 transition-transform duration-300" style={{width: '20px'}} />
              <span>@yungyro</span>
            </a>
          </div>

          <h3 className="text-lg font-medium mb-6 text-text-secondary font-heading">
            Siga nas Redes Sociais
          </h3>
          <div className="flex justify-center flex-wrap gap-x-6 gap-y-4">
            <motion.a
              href="https://www.twitch.tv/yungyro"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-text-primary hover:text-[#9146FF] transition-all duration-300 group"
              whileHover={{ y: -4, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="w-12 h-12 bg-card-background rounded-full flex items-center justify-center mb-2 group-hover:bg-[#9146FF]/10 transition-all duration-300 transform group-hover:scale-110">
                <FontAwesomeIcon icon={faTwitch} size="xl" />
              </div>
              <span className="text-sm font-medium">Twitch</span>
            </motion.a>

            <motion.a
              href="https://kick.com/yungyro"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-text-primary hover:text-[#53FC18] transition-all duration-300 group"
              whileHover={{ y: -4, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="w-12 h-12 bg-card-background rounded-full flex items-center justify-center mb-2 group-hover:bg-[#53FC18]/10 transition-all duration-300 transform group-hover:scale-110">
                <FontAwesomeIcon icon={faKickstarterK} size="xl" />
              </div>
              <span className="text-sm font-medium">Kick</span>
            </motion.a>

            <motion.a
              href="https://www.instagram.com/yungyro"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-text-primary hover:text-[#E4405F] transition-all duration-300 group"
              whileHover={{ y: -4, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="w-12 h-12 bg-card-background rounded-full flex items-center justify-center mb-2 group-hover:bg-[#E4405F]/10 transition-all duration-300 transform group-hover:scale-110">
                <FontAwesomeIcon icon={faInstagram} size="xl" />
              </div>
              <span className="text-sm font-medium">Instagram</span>
            </motion.a>

            <motion.a
              href="https://www.youtube.com/@yungyro"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-text-primary hover:text-[#FF0000] transition-all duration-300 group"
              whileHover={{ y: -4, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="w-12 h-12 bg-card-background rounded-full flex items-center justify-center mb-2 group-hover:bg-[#FF0000]/10 transition-all duration-300 transform group-hover:scale-110">
                <FontAwesomeIcon icon={faYoutube} size="xl" />
              </div>
              <span className="text-sm font-medium">YouTube</span>
            </motion.a>
            <motion.a
              href="https://x.com/yungyro"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-text-primary hover:text-white transition-all duration-300 group"
              whileHover={{ y: -4, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="w-12 h-12 bg-card-background rounded-full flex items-center justify-center mb-2 group-hover:bg-white/10 transition-all duration-300 transform group-hover:scale-110">
                <FontAwesomeIcon icon={faXTwitter} size="xl" />
              </div>
              <span className="text-sm font-medium">Twitter</span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};