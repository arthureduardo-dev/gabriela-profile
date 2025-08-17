import { motion } from 'framer-motion';

interface DotNavProps {
  sections: string[];
  activeSection: string;
  onNavClick: (sectionId: string) => void;
}

export const DotNav = ({ sections, activeSection, onNavClick }: DotNavProps) => {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 pr-4 flex flex-col gap-3 z-50">
      {sections.map(section => (
        <button
          key={section}
          onClick={() => onNavClick(section)}
          className="flex items-center group focus:outline-none"
        >
          <span className="absolute right-10 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-dark-purple/80 px-2 py-1 rounded-md capitalize text-text-primary">
            {section}
          </span>
          <motion.div
            className="w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300"
            animate={{
              backgroundColor: activeSection === section ? '#F5F5F5' : '#2a004f',
              scale: activeSection === section ? 1.2 : 1,
            }}
            whileHover={{ scale: 1.3 }}
          >
             <motion.span
              className={`font-bold transition-colors duration-300`}
              animate={{ color: activeSection === section ? '#0D0D0D' : '#F5F5F5' }}
             >
              {section.charAt(0).toUpperCase()}
            </motion.span>
          </motion.div>
        </button>
      ))}
    </div>
  );
};