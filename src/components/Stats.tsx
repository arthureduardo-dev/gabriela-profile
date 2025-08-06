import React, { useState, useRef, useEffect } from 'react';
import { Users, TrendingUp, Heart, MessageCircle, Instagram } from 'lucide-react';
import { demographicsData, ageData } from '../data';

interface StatsProps {
  onMouseMove: (e: React.MouseEvent<HTMLElement>) => void;
}

export const Stats = ({ onMouseMove }: StatsProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <section id="stats" className="scroll-section">
      <div ref={statsRef} className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">
        <div
          className="card-glow glass-effect rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-2"
          onMouseMove={onMouseMove}
        >
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
                    className="h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: isVisible ? `${item.percentage}%` : '0%',
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
                    className="bg-gradient-to-r from-text-secondary to-dark-purple h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: isVisible ? `${item.percentage}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="card-glow glass-effect rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-2"
          onMouseMove={onMouseMove}
        >
          <h2 className="text-2xl font-semibold mb-6 text-text-primary flex items-center">
            <Instagram className="mr-3" size={24} />
            Estatísticas do Instagram
          </h2>

          <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-card-background/50 rounded-lg transition-transform duration-300 hover:scale-105">
                  <Users className="mx-auto mb-2 text-text-secondary" size={20} />
                  <div className="text-2xl font-bold">21,6K</div>
                  <div className="text-sm text-text-secondary">Seguidores</div>
                </div>

                <div className="text-center p-4 bg-card-background/50 rounded-lg transition-transform duration-300 hover:scale-105">
                  <TrendingUp className="mx-auto mb-2 text-text-secondary" size={20} />
                  <div className="text-2xl font-bold">152K</div>
                  <div className="text-sm text-text-secondary">Alcance Médio</div>
                </div>

                <div className="text-center p-4 bg-card-background/50 rounded-lg transition-transform duration-300 hover:scale-105">
                  <Heart className="mx-auto mb-2 text-dark-purple" size={20} />
                  <div className="text-2xl font-bold">5,06%</div>
                  <div className="text-sm text-text-secondary">Taxa de Engajamento</div>
                </div>

                <div className="text-center p-4 bg-card-background/50 rounded-lg transition-transform duration-300 hover:scale-105">
                  <MessageCircle className="mx-auto mb-2 text-dark-purple" size={20} />
                  <div className="text-2xl font-bold">+50K</div>
                  <div className="text-sm text-text-secondary">Curtidas e Comentários</div>
                </div>
              </div>
        </div>
      </div>
    </section>
  );
};