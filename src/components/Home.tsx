import { motion } from 'framer-motion';
import { AnimatedTitle } from './AnimatedTitle';

export const Home = () => {
  return (
    <section id="home" className="scroll-section">
      <div className="text-center flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8"
        >
          <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-grad-purple-from to-grad-purple-to p-1.5 shadow-2xl transition-all duration-500 hover:shadow-purple-500/50 hover:scale-105">
            <img
              src="https://pbs.twimg.com/media/Gwn1R2tXUAELGf8?format=jpg&name=large"
              alt="Foto de Gabriela Carrilho"
              className="w-full h-full rounded-full object-cover border-4 border-background"
            />
          </div>
        </motion.div>
        
        <AnimatedTitle 
          text="GABRIELA CARRILHO"
          className="text-5xl !font-bold tracking-wide !mb-2 justify-center font-inlanders"
        />

        <motion.p 
          className="text-xl text-text-secondary tracking-wider uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          Criadora de Conteúdo Digital
        </motion.p>
      </div>
    </section>
  );
};