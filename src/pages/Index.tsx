
import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import ThreeShowcase from '../components/ThreeShowcase';
import SkillsSection from '../components/SkillsSection';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 relative overflow-hidden">
      <ParticleBackground />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Hero scrollY={scrollY} />
        <About />
        <ThreeShowcase />
        <SkillsSection />
        <Footer />
      </div>
      
      {/* Glass overlay effect */}
      <div className="fixed inset-0 bg-gradient-to-t from-transparent via-green-900/5 to-emerald-900/10 pointer-events-none z-5" />
    </div>
  );
};

export default Index;
