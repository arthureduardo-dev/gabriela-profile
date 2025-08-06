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
          <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${activeSection === section ? 'bg-text-primary' : 'bg-dark-purple'}`}>
             <span className={`font-bold transition-colors duration-300 ${activeSection === section ? 'text-background' : 'text-text-primary'}`}>
              {section.charAt(0).toUpperCase()}
            </span>
          </div>
        </button>
      ))}
    </div>
  );
};