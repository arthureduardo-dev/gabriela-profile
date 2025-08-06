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
    { icon: Users, label: 'Seguidores', value: 22000, suffix: '', prefix: '' },
    { icon: TrendingUp, label: 'Alcance Médio', value: 152000, suffix: '', prefix: '+' },
    { icon: Heart, label: 'Taxa de Engajamento', value: 5.06, suffix: '%', prefix: '' },
    { icon: MessageCircle, label: 'Curtidas e Comentários', value: 50000, suffix: '', prefix: '+' }
  ];

  return (
    <section id="stats" className="scroll-section">
      <div ref={statsRef} className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">
        <div
          className="card-glow glass-effect rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-2"
          onMouseMove={onMouseMove}
        >
          <h2 className="text-xl font-semibold mb-8 text-text-primary flex items-center">
            <Users className="mr-3 text-text-secondary" size={24} />
            Demografia do Público
          </h2>
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 text-text-primary">Gênero</h3>
            {demographicsData.map((item, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-text-secondary">{item.label}</span>
                  <span className="text-sm font-bold text-text-primary">{item.percentage}%</span>
                </div>
                <div className="w-full bg-bar-track rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-grad-purple-from to-grad-purple-to h-2.5 rounded-full transition-all duration-[1500ms] ease-out"
                    style={{
                      width: isVisible ? `${item.percentage}%` : '0%'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4 text-text-primary">Principais Faixas Etárias</h3>
            {ageData.map((item, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-text-secondary">{item.range} anos</span>
                  <span className="text-sm font-bold text-text-primary">{item.percentage}%</span>
                </div>
                <div className="w-full bg-bar-track rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-grad-purple-from to-grad-purple-to h-2.5 rounded-full transition-all duration-[1500ms] ease-out"
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
          <h2 className="text-xl font-semibold mb-8 text-text-primary flex items-center">
            <Instagram className="mr-3 text-text-secondary" size={24} />
            Estatísticas do Instagram
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {instagramStats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 bg-stat-card rounded-lg transition-transform duration-300 hover:scale-105"
              >
                <stat.icon
                  className="mx-auto mb-3 text-text-primary"
                  size={24}
                />
                <div className="text-3xl font-bold text-text-primary">
                  <CountUpNumber
                    end={stat.value}
                    duration={2000}
                    startAnimation={isVisible}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                </div>
                <div className="text-sm text-text-secondary mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};