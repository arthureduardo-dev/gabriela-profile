import { motion } from 'framer-motion';

interface AnimatedTitleProps {
  text: string;
  className?: string;
  icon?: React.ReactNode;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 * i },
  }),
};

const letterVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 200,
    },
  },
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 200,
    },
  },
};

export const AnimatedTitle = ({ text, className, icon }: AnimatedTitleProps) => {
  const words = text.split(' ');

  return (
    <motion.h2
      className={`font-heading text-2xl font-semibold mb-6 text-text-primary flex items-center flex-wrap ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
    >
      {icon && <span className="mr-3">{icon}</span>}
      {words.map((word, index) => (
        <span key={index} className="whitespace-nowrap mr-3">
          {Array.from(word).map((letter, letterIndex) => (
            <motion.span
              key={letterIndex}
              variants={letterVariants}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h2>
  );
};