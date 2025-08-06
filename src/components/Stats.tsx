import React, { useState, useRef, useEffect } from 'react';
import { Users, TrendingUp, Heart, MessageCircle, Instagram } from 'lucide-react';
import { demographicsData, ageData } from '../data';
import { CountUpNumber } from './CountUpNumber';

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

  const instagramStats = [
    { icon: Users, label: 'Seguidores', value: 21600, suffix: '' },
    { icon: TrendingUp, label: 'Alcance Médio', value: 152000, suffix: '' },
    { icon: Heart, label: 'Taxa de Engajamento', value: 5.06, suffix: '%' },
    { icon: MessageCircle, label: 'Curtidas e Comentários', value: 50000, suffix: '' }
  ];

  return (
    <section id="stats" className="scroll-section">
      <div ref={statsRef} className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">
        <div
          className="card-glow glass-effect rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-2 opacity-0 animate-fade-in-up"
          onMouseMove={onMouseMove}
        >
          <h2 className="text-2xl font-semibold mb-6 text-text-primary flex items-center">
            <Users
              className={`mr-3 ${isVisible ? 'animate-text-shadow-pulse' : ''}`}
              size={24}
            />
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
                    className="h-3 rounded-full transition-all duration-[1500ms] ease-out"
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
                    className="bg-gradient-to-r from-text-secondary to-dark-purple h-3 rounded-full transition-all duration-[1500ms] ease-out"
                    style={{ width: isVisible ? `${item.percentage}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="card-glow glass-effect rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-2 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '200ms' }}
          onMouseMove={onMouseMove}
        >
          <h2 className="text-2xl font-semibold mb-6 text-text-primary flex items-center">
            <Instagram
              className={`mr-3 ${isVisible ? 'animate-text-shadow-pulse' : ''}`}
              size={24}
              style={{ animationDelay: '200ms' }}
            />
            Estatísticas do Instagram
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {instagramStats.map((stat, index) => (
              <div
                key={index}
                className={`text-center p-4 bg-card-background/50 rounded-lg transition-transform duration-300 hover:scale-105 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${200 + index * 150}ms` }}
              >
                <stat.icon
                  className={`mx-auto mb-2 ${index > 1 ? 'text-dark-purple' : 'text-text-secondary'} ${isVisible ? 'animate-text-shadow-pulse' : ''}`}
                  size={20}
                  style={{ animationDelay: `${200 + index * 150}ms` }}
                />
                <div className="text-2xl font-bold">
                  <CountUpNumber
                    end={stat.value}
                    duration={2000}
                    startAnimation={isVisible}
                    suffix={stat.suffix}
                  />
                </div>
                <div className="text-sm text-text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};