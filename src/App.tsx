import React, { useState, useEffect } from 'react';
import { useScroll } from 'framer-motion';
import { sections } from './data';
import { DotNav } from './components/DotNav';
import { Home } from './components/Home';
import { About } from './components/About';
import { Stats } from './components/Stats';
import { Clips } from './components/Clips';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { StreamerBackground } from './components/StreamerBackground';
import SmileyPreloader from './components/SmileyPreloader';
import { CustomCursor } from './components/CustomCursor';
import { CursorProvider } from './context/CursorContext';

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); 

    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--x', `${x}px`);
    e.currentTarget.style.setProperty('--y', `${y}px`);
  };

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  useEffect(() => {
    if (loading) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const animationObserver = new IntersectionObserver(
      (entries, animObserver) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            animObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        element.classList.add('section-fade-in');
        observer.observe(element);
        animationObserver.observe(element);
      }
    });

    return () => {
      sections.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
          animationObserver.unobserve(element);
        }
      });
    };
  }, [loading]);

  if (loading) {
    return (
      <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-background to-dark-purple text-text-primary font-sans overflow-hidden">
        <SmileyPreloader />
      </div>
    );
  }

  return (
    <CursorProvider>
      <CustomCursor />
      <div className="relative min-h-screen bg-gradient-to-br from-background to-dark-purple text-text-primary font-sans overflow-hidden">
        <StreamerBackground scrollYProgress={scrollYProgress} />

        <div className="relative z-10 section-container">
          <DotNav sections={sections} activeSection={activeSection} onNavClick={handleNavClick} />
          
          <Home />
          <About onMouseMove={handleMouseMove} />
          <Stats onMouseMove={handleMouseMove} />
          <Clips />
          <Services onMouseMove={handleMouseMove} />
          <Contact onMouseMove={handleMouseMove} />
        </div>
      </div>
    </CursorProvider>
  );
}

export default App;