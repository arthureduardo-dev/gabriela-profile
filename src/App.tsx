import React from 'react';
import { Mail, Users, TrendingUp, Heart, MessageCircle, Instagram, Camera, Video, Gift, Percent, User, UserCheck, Youtube } from 'lucide-react';

function App() {
  const demographicsData = [
    { label: 'Masculino', percentage: 90, color: '#B8846C' },
    { label: 'Feminino', percentage: 10, color: '#733E2E' }
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

  return (
    <div className="min-h-screen bg-[#1D1E20] text-[#D9D3D1] font-sans">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#B8846C] to-[#733E2E] p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-[#2A2B2D] flex items-center justify-center">
                <User size={60} className="text-[#AFA198]" />
                <span className="text-sm text-[#AFA198] absolute mt-16">Foto Profissional</span>
              </div>
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-2 tracking-wide">
            GABRIELA CARRILHO
          </h1>
          <p className="text-xl text-[#AFA198] tracking-wider uppercase">
            Criadora de Conteúdo Digital
          </p>
        </div>

        {/* About Section */}
        <section className="mb-12 bg-gradient-to-r from-[#B8846C]/10 to-[#733E2E]/10 rounded-2xl p-8 border border-[#B8846C]/20">
          <h2 className="text-2xl font-semibold mb-6 text-[#B8846C] flex items-center">
            <User className="mr-3" size={24} />
            Sobre mim
          </h2>
          <p className="text-lg leading-relaxed text-[#D9D3D1]">
            Oi! Eu sou a Gabriela, sou criadora de conteúdo, faço lives na Twitch, Kick e YouTube. 
            Meu foco é gameplay de jogos variados, interação com o chat, humor com memes, dicas de 
            looks e alimentação saudável - sempre de forma leve e sem neura! Meu objetivo é criar um 
            espaço acolhedor e animado, onde as pessoas possam rir, se sentir bem e trocar ideias 
            sobre o que amam.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Demographics Section */}
          <section className="bg-gradient-to-br from-[#733E2E]/10 to-[#B8846C]/10 rounded-2xl p-8 border border-[#733E2E]/20">
            <h2 className="text-2xl font-semibold mb-6 text-[#B8846C] flex items-center">
              <Users className="mr-3" size={24} />
              Demografia do Público
            </h2>
            
            {/* Gender Demographics */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-4 text-[#AFA198]">Gênero</h3>
              {demographicsData.map((item, index) => (
                <div key={index} className="mb-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">{item.label}</span>
                    <span className="text-sm font-bold">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-[#2A2B2D] rounded-full h-3">
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

            {/* Age Demographics */}
            <div>
              <h3 className="text-lg font-medium mb-4 text-[#AFA198]">Principais Faixas Etárias</h3>
              {ageData.map((item, index) => (
                <div key={index} className="mb-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">{item.range} anos</span>
                    <span className="text-sm font-bold">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-[#2A2B2D] rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-[#B8846C] to-[#733E2E] h-3 rounded-full transition-all duration-700 ease-out"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Instagram Stats Section */}
          <section className="bg-gradient-to-br from-[#B8846C]/10 to-[#733E2E]/10 rounded-2xl p-8 border border-[#B8846C]/20">
            <h2 className="text-2xl font-semibold mb-6 text-[#B8846C] flex items-center">
              <Instagram className="mr-3" size={24} />
              Estatísticas do Instagram
            </h2>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-[#2A2B2D]/50 rounded-lg">
                <Users className="mx-auto mb-2 text-[#B8846C]" size={20} />
                <div className="text-2xl font-bold">21,6K</div>
                <div className="text-sm text-[#AFA198]">Seguidores</div>
              </div>
              
              <div className="text-center p-4 bg-[#2A2B2D]/50 rounded-lg">
                <TrendingUp className="mx-auto mb-2 text-[#B8846C]" size={20} />
                <div className="text-2xl font-bold">152K</div>
                <div className="text-sm text-[#AFA198]">Alcance Médio</div>
              </div>
              
              <div className="text-center p-4 bg-[#2A2B2D]/50 rounded-lg">
                <Heart className="mx-auto mb-2 text-[#733E2E]" size={20} />
                <div className="text-2xl font-bold">5,06%</div>
                <div className="text-sm text-[#AFA198]">Taxa de Engajamento</div>
              </div>
              
              <div className="text-center p-4 bg-[#2A2B2D]/50 rounded-lg">
                <MessageCircle className="mx-auto mb-2 text-[#733E2E]" size={20} />
                <div className="text-2xl font-bold">+50K</div>
                <div className="text-sm text-[#AFA198]">Curtidas e Comentários</div>
              </div>
            </div>
          </section>
        </div>

        {/* Services Section */}
        <section className="mb-12 bg-gradient-to-r from-[#733E2E]/10 to-[#B8846C]/10 rounded-2xl p-8 border border-[#733E2E]/20">
          <h2 className="text-2xl font-semibold mb-6 text-[#B8846C] flex items-center">
            <TrendingUp className="mr-3" size={24} />
            Serviços Oferecidos
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div key={index} className="flex items-center p-4 bg-[#2A2B2D]/30 rounded-lg hover:bg-[#2A2B2D]/50 transition-all duration-300">
                <service.icon className="mr-4 text-[#B8846C] flex-shrink-0" size={20} />
                <span className="text-[#D9D3D1]">{service.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center bg-gradient-to-r from-[#B8846C]/10 to-[#733E2E]/10 rounded-2xl p-8 border border-[#B8846C]/20">
          <h2 className="text-2xl font-semibold mb-6 text-[#B8846C]">Contato</h2>
          <div className="flex justify-center space-x-8">
            <a 
              href="mailto:contatoyungyro@gmail.com" 
              className="flex items-center text-[#D9D3D1] hover:text-[#B8846C] transition-colors duration-300 group"
            >
              <Mail className="mr-2 group-hover:scale-110 transition-transform duration-300" size={20} />
              <span>contatoyungyro@gmail.com</span>
            </a>
            
            <a 
              href="https://x.com/yungyro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-[#D9D3D1] hover:text-[#B8846C] transition-colors duration-300 group"
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
        <footer className="mt-12 pt-8 border-t border-[#B8846C]/20">
          <div className="text-center">
            <h3 className="text-lg font-medium mb-6 text-[#AFA198]">Siga nas Redes Sociais</h3>
            <div className="flex justify-center space-x-8">
              <a 
                href="https://www.twitch.tv/yungyro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center text-[#D9D3D1] hover:text-[#9146FF] transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#2A2B2D] rounded-full flex items-center justify-center mb-2 group-hover:bg-[#9146FF]/10 transition-all duration-300">
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
                className="flex flex-col items-center text-[#D9D3D1] hover:text-[#53FC18] transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#2A2B2D] rounded-full flex items-center justify-center mb-2 group-hover:bg-[#53FC18]/10 transition-all duration-300">
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
                className="flex flex-col items-center text-[#D9D3D1] hover:text-[#E4405F] transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#2A2B2D] rounded-full flex items-center justify-center mb-2 group-hover:bg-[#E4405F]/10 transition-all duration-300">
                  <Instagram size={24} />
                </div>
                <span className="text-sm font-medium">Instagram</span>
              </a>

              <a 
                href="https://www.youtube.com/@yungyro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center text-[#D9D3D1] hover:text-[#FF0000] transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#2A2B2D] rounded-full flex items-center justify-center mb-2 group-hover:bg-[#FF0000]/10 transition-all duration-300">
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