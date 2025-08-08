import { Mail, Instagram, Youtube } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faYoutube,
  faTwitch,
  faKickstarterK,
} from '@fortawesome/free-brands-svg-icons';

interface ContactProps {
  onMouseMove: (e: React.MouseEvent<HTMLElement>) => void;
}

export const Contact = ({ onMouseMove }: ContactProps) => {
  return (
    <section id="contact" className="scroll-section">
      <div
        className="card-glow glass-effect text-center rounded-2xl p-8 max-w-4xl w-full transition-transform duration-300 hover:-translate-y-2"
        onMouseMove={onMouseMove}
      >
        <h2 className="text-2xl font-semibold mb-6 text-text-primary">
          Contato
        </h2>
        <div className="flex justify-center space-x-8">
          <a
            href="mailto:contatoyungyro@gmail.com"
            className="flex items-center text-text-primary hover:text-text-secondary transition-colors duration-300 group"
          >
            <Mail className="mr-2 group-hover:scale-110 transition-transform duration-300" size={20} />
            <span>contatoyungyro@gmail.com</span>
          </a>

          <a
            href="https://x.com/yungyro"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-text-primary hover:text-text-secondary transition-colors duration-300 group"
          >
            <div className="mr-2 group-hover:scale-110 transition-transform duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </div>
            <span>@yungyro</span>
          </a>
        </div>

        <footer className="mt-12 pt-8 border-t border-dark-purple/20">
          <div className="text-center">
            <h3 className="text-lg font-medium mb-6 text-text-secondary">
              Siga nas Redes Sociais
            </h3>
            <div className="flex justify-center space-x-8">
              <a
                href="https://www.twitch.tv/yungyro"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-text-primary hover:text-[#9146FF] transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-card-background rounded-full flex items-center justify-center mb-2 group-hover:bg-[#9146FF]/10 transition-all duration-300 transform group-hover:scale-110">
                  <FontAwesomeIcon icon={faTwitch} size="xl" />
                </div>
                <span className="text-sm font-medium">Twitch</span>
              </a>

              <a
                href="https://kick.com/yungyro"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-text-primary hover:text-[#53FC18] transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-card-background rounded-full flex items-center justify-center mb-2 group-hover:bg-[#53FC18]/10 transition-all duration-300 transform group-hover:scale-110">
                  <FontAwesomeIcon icon={faKickstarterK} size="xl" />
                </div>
                <span className="text-sm font-medium">Kick</span>
              </a>

              <a
                href="https://www.instagram.com/yungyro"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-text-primary hover:text-[#E4405F] transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-card-background rounded-full flex items-center justify-center mb-2 group-hover:bg-[#E4405F]/10 transition-all duration-300 transform group-hover:scale-110">
                  <FontAwesomeIcon icon={faInstagram} size="xl" />
                </div>
                <span className="text-sm font-medium">Instagram</span>
              </a>

              <a
                href="https://www.youtube.com/@yungyro"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-text-primary hover:text-[#FF0000] transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-card-background rounded-full flex items-center justify-center mb-2 group-hover:bg-[#FF0000]/10 transition-all duration-300 transform group-hover:scale-110">
                  <FontAwesomeIcon icon={faYoutube} size="xl" />
                </div>
                <span className="text-sm font-medium">YouTube</span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};