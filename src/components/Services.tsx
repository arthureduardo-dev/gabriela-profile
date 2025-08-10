import { TrendingUp } from 'lucide-react';
import { services } from '../data';

interface ServicesProps {
  onMouseMove: (e: React.MouseEvent<HTMLElement>) => void;
}

export const Services = ({ onMouseMove }: ServicesProps) => {
  return (
    <section id="services" className="scroll-section">
      <div
        className="card-glow glass-effect rounded-2xl p-8 max-w-4xl w-full transition-transform duration-300 hover:-translate-y-2"
        onMouseMove={onMouseMove}
      >
        <h2 className="text-2xl font-semibold mb-8 text-text-primary flex items-center justify-center">
          <TrendingUp className="mr-3" size={24} />
          Serviços Oferecidos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative rounded-lg p-[2px] bg-transparent hover:bg-gradient-to-br from-grad-purple-from to-grad-purple-to transition-all duration-300 hover:scale-105 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-card-background/80 rounded-[7px] h-full w-full p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 mb-4 rounded-full flex items-center justify-center bg-dark-purple text-grad-purple-from transition-all duration-300 group-hover:bg-background group-hover:text-white group-hover:scale-110">
                  <service.icon size={28} />
                </div>
                <span className="text-text-primary font-medium">{service.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};