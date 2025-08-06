import React, { useState, useRef, useEffect } from 'react';
import { Mail, Users, TrendingUp, Heart, MessageCircle, Instagram, Camera, Video, Gift, Percent, User, UserCheck, Youtube, Clapperboard, Play, Pause, Volume2, VolumeX } from 'lucide-react';

const DotNav = ({ sections, activeSection }: { sections: string[], activeSection: string }) => {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 pr-4 flex flex-col gap-3 z-50">
      {sections.map(section => (
        <a 
          key={section}
          href={`#${section}`} 
          className="flex items-center group"
        >
          <span className="absolute right-10 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-card-background/80 px-2 py-1 rounded-md capitalize text-text-primary">
            {section}
          </span>
          <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${activeSection === section ? 'bg-text-primary' : 'bg-card-background'}`}>
             <span className={`font-bold transition-colors duration-300 ${activeSection === section ? 'text-background' : 'text-text-secondary'}`}>
              {section.charAt(0).toUpperCase()}
            </span>
          </div>
        </a>
      ))}
    </div>
  );
};


function App() {
  const demographicsData = [
    { label: 'Masculino', percentage: 90, color: '#BFBFBF' },
    { label: 'Feminino', percentage: 10, color: '#737373' }
  ];

  const ageData = [
    { range: '18-24', percentage: 65 },
    { range: '25-34', percentage: 35 }
  ];

  const services = [
    { icon: Instagram, text: 'Divulgação no Instagram e durante lives' },
    { icon: Video, text: 'Conteúdo em vídeo: Reels e Shorts' },
    { icon: UserCheck, text: 'Testes de produto com review espontâneo' },
    { icon: Gift, text: 'Sorteios patrocinados' },
    { icon: Percent, text: 'Descontos e links personalizados' },
    { icon: Camera, text: 'Divulgação em fotos com looks da marca' }
  ];

  const clipsData = [
    { id: 1, src: 'https://videos.pexels.com/video-files/4434246/4434246-hd_1280_720_25fps.mp4' },
    { id: 2, src: 'https://videos.pexels.com/video-files/8327881/8327881-hd_1280_720_30fps.mp4' },
    { id: 3, src: 'https://videos.pexels.com/video-files/4784093/4784093-hd_1280_720_30fps.mp4' },
    { id: 4, src: 'https://videos.pexels.com/video-files/7578544/7578544-hd_1280_720_30fps.mp4' },
    { id: 5, src: 'https://videos.pexels.com/video-files/853875/853875-hd_1280_720_30fps.mp4' }
  ];

  const [activeClipIndex, setActiveClipIndex] = useState(0);
  const [playingClipId, setPlayingClipId] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  const carouselRef = useRef<HTMLDivElement>(null);
  const clipRefs = useRef<(HTMLDivElement | null)[]>([]);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const [activeSection, setActiveSection] = useState('home');
  const sections = ['home', 'about', 'stats', 'clips', 'services', 'contact'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach(id => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  useEffect(() => {
    const clipObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0', 10);
          const video = videoRefs.current[index];
          if (!video) return;

          if (entry.isIntersecting) {
            setActiveClipIndex(index);
          } else {
            video.pause();
            video.currentTime = 0;
            if (playingClipId === clipsData[index].id) {
              setPlayingClipId(null);
            }
          }
        });
      },
      { root: carouselRef.current, threshold: 0.6 }
    );

    const currentClipRefs = clipRefs.current;
    currentClipRefs.forEach(clip => {
      if (clip) clipObserver.observe(clip);
    });

    return () => {
      currentClipRefs.forEach(clip => {
        if (clip) clipObserver.unobserve(clip);
      });
    };
  }, [clipsData, playingClipId]);
  
  const handlePlayPause = (id: number, index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (playingClipId === id) {
      video.pause();
      setPlayingClipId(null);
    } else {
      videoRefs.current.forEach((vid, i) => {
        if (vid && i !== index) {
          vid.pause();
          vid.currentTime = 0;
        }
      });
      video.play();
      setPlayingClipId(id);
    }
  };

  const handleMuteToggle = () => {
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);
    videoRefs.current.forEach(video => {
      if (video) video.muted = newMutedState;
    });
  };

  const handleDotClick = (index: number) => {
    clipRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  };

  return (
    <div className="min-h-screen bg-background text-text-primary font-sans">
      <DotNav sections={sections} activeSection={activeSection} />
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header Section */}
        <section id="home" className="text-center mb-12 min-h-screen flex flex-col justify-center">
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary p-1 shadow-2xl">
              <img 
                src="https://pbs.twimg.com/media/Gwn1R2tXUAELGf8?format=jpg&name=large" 
                alt="Foto de Gabriela Carrilho" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-2 tracking-wide">
            GABRIELA CARRILHO
          </h1>
          <p className="text-xl text-text-secondary tracking-wider uppercase">
            Criadora de Conteúdo Digital
          </p>
        </section>

        {/* About Section */}
        <section id="about" className="mb-12 bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 rounded-2xl p-8 border border-accent-primary/20">
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
        </section>

        <section id="stats" className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Demographics Section */}
          <div className="bg-gradient-to-br from-accent-secondary/10 to-accent-primary/10 rounded-2xl p-8 border border-accent-secondary/20">
            <h2 className="text-2xl font-semibold mb-6 text-text-primary flex items-center">
              <Users className="mr-3" size={24} />
              Demografia do Público
            </h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-4 text-text-secondary">Gênero</h3>
              {demographicsData.map((item, index) => (
                <div key={index} className="mb-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">{item.label}</span>
                    <span className="text-sm font-bold">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-card-background rounded-full h-3">
                    <div 
                      className="h-3 rounded-full transition-all duration-700 ease-out"
                      style={{ 
                        width: `${item.percentage}%`, 
                        backgroundColor: item.color 
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4 text-text-secondary">Principais Faixas Etárias</h3>
              {ageData.map((item, index) => (
                <div key={index} className="mb-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">{item.range} anos</span>
                    <span className="text-sm font-bold">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-card-background rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-text-secondary to-accent-primary h-3 rounded-full transition-all duration-700 ease-out"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Instagram Stats Section */}
          <div className="bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 rounded-2xl p-8 border border-accent-primary/20">
            <h2 className="text-2xl font-semibold mb-6 text-text-primary flex items-center">
              <Instagram className="mr-3" size={24} />
              Estatísticas do Instagram
            </h2>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-card-background/50 rounded-lg">
                <Users className="mx-auto mb-2 text-text-secondary" size={20} />
                <div className="text-2xl font-bold">21,6K</div>
                <div className="text-sm text-text-secondary">Seguidores</div>
              </div>
              
              <div className="text-center p-4 bg-card-background/50 rounded-lg">
                <TrendingUp className="mx-auto mb-2 text-text-secondary" size={20} />
                <div className="text-2xl font-bold">152K</div>
                <div className="text-sm text-text-secondary">Alcance Médio</div>
              </div>
              
              <div className="text-center p-4 bg-card-background/50 rounded-lg">
                <Heart className="mx-auto mb-2 text-accent-primary" size={20} />
                <div className="text-2xl font-bold">5,06%</div>
                <div className="text-sm text-text-secondary">Taxa de Engajamento</div>
              </div>
              
              <div className="text-center p-4 bg-card-background/50 rounded-lg">
                <MessageCircle className="mx-auto mb-2 text-accent-primary" size={20} />
                <div className="text-2xl font-bold">+50K</div>
                <div className="text-sm text-text-secondary">Curtidas e Comentários</div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Clips Section */}
        <section id="clips" className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-text-primary flex items-center">
            <Clapperboard className="mr-3" size={24} />
            Clipes em Destaque
          </h2>
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar space-x-4 pb-4"
          >
            {clipsData.map((clip, index) => (
              <div
                key={clip.id}
                ref={el => clipRefs.current[index] = el}
                data-index={index}
                className="group relative flex-shrink-0 w-full md:w-3/5 snap-center rounded-2xl overflow-hidden border border-accent-primary/20"
              >
                <video
                  ref={el => videoRefs.current[index] = el}
                  src={clip.src}
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover"
                  onClick={() => handlePlayPause(clip.id, index)}
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="transform transition-transform duration-300 group-hover:scale-110">
                    {playingClipId === clip.id ? <Pause size={48} className="text-white/80" /> : <Play size={48} className="text-white/80" />}
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <button onClick={handleMuteToggle} className="text-white/80 hover:text-white p-2">
                    {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            {clipsData.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeClipIndex === index ? 'bg-text-primary scale-125' : 'bg-accent-primary'}`}
              />
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="mb-12 bg-gradient-to-r from-accent-secondary/10 to-accent-primary/10 rounded-2xl p-8 border border-accent-secondary/20">
          <h2 className="text-2xl font-semibold mb-6 text-text-primary flex items-center">
            <TrendingUp className="mr-3" size={24} />
            Serviços Oferecidos
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div key={index} className="flex items-center p-4 bg-card-background/30 rounded-lg hover:bg-card-background/50 transition-all duration-300">
                <service.icon className="mr-4 text-text-secondary flex-shrink-0" size={20} />
                <span className="text-text-primary">{service.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="text-center bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 rounded-2xl p-8 border border-accent-primary/20">
          <h2 className="text-2xl font-semibold mb-6 text-text-primary">Contato</h2>
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
        </section>

        {/* Social Media Footer */}
        <footer className="mt-12 pt-8 border-t border-accent-primary/20">
          <div className="text-center">
            <h3 className="text-lg font-medium mb-6 text-text-secondary">Siga nas Redes Sociais</h3>
            <div className="flex justify-center space-x-8">
              <a 
                href="https://www.twitch.tv/yungyro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center text-text-primary hover:text-[#9146FF] transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-card-background rounded-full flex items-center justify-center mb-2 group-hover:bg-[#9146FF]/10 transition-all duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium">Twitch</span>
              </a>

              <a 
                href="https://kick.com/yungyro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center text-text-primary hover:text-[#53FC18] transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-card-background rounded-full flex items-center justify-center mb-2 group-hover:bg-[#53FC18]/10 transition-all duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium">Kick</span>
              </a>

              <a 
                href="https://www.instagram.com/yungyro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center text-text-primary hover:text-[#E4405F] transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-card-background rounded-full flex items-center justify-center mb-2 group-hover:bg-[#E4405F]/10 transition-all duration-300">
                  <Instagram size={24} />
                </div>
                <span className="text-sm font-medium">Instagram</span>
              </a>

              <a 
                href="https://www.youtube.com/@yungyro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center text-text-primary hover:text-[#FF0000] transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-card-background rounded-full flex items-center justify-center mb-2 group-hover:bg-[#FF0000]/10 transition-all duration-300">
                  <Youtube size={24} />
                </div>
                <span className="text-sm font-medium">YouTube</span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;