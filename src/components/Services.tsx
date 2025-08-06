import { TrendingUp } from 'lucide-react';
import { services } from '../data';

interface ServicesProps {
  onMouseMove: (e: React.MouseEvent<HTMLElement>) => void;
}

export const Services = ({ onMouseMove }: ServicesProps) => {
  return (
    <section id="services" className="scroll-section">
      <div
        className="card-glow glass-effect rounded-2xl p-8 max-w-4xl w-full"
        onMouseMove={onMouseMove}
      >
        <h2 className="text-2xl font-semibold mb-6 text-text-primary flex items-center">
          <TrendingUp className="mr-3" size={24} />
          Serviços Oferecidos
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <div key={index} className="flex items-center p-4 bg-card-background/30 rounded-lg hover:bg-card-background/50 transition-all duration-300 hover:scale-105">
              <service.icon className="mr-4 text-text-secondary flex-shrink-0" size={20} />
              <span className="text-text-primary">{service.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};