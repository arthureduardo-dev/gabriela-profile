import { User } from 'lucide-react';

interface AboutProps {
  onMouseMove: (e: React.MouseEvent<HTMLElement>) => void;
}

export const About = ({ onMouseMove }: AboutProps) => {
  return (
    <section id="about" className="scroll-section">
      <div
        className="card-glow glass-effect rounded-2xl p-8 max-w-4xl w-full transition-transform duration-300 hover:-translate-y-2"
        onMouseMove={onMouseMove}
      >
        <h2 className="text-2xl font-semibold mb-6 text-text-primary flex items-center">
          <User className="mr-3" size={24} />
          Sobre mim
        </h2>
        <p className="text-lg leading-relaxed text-text-primary">
          Oi! Eu sou a Gabriela, sou criadora de conteúdo, faço lives na Twitch, Kick e YouTube.
          Meu foco é gameplay de jogos variados, interação com o chat, humor com memes, dicas de
          looks e alimentação saudável - sempre de forma leve e sem neura! Meu objetivo é criar um
          espaço acolhedor e animado, onde as pessoas possam rir, se sentir bem e trocar ideias
          sobre o que amam.
        </p>
      </div>
    </section>
  );
};