
import React from 'react';
import FloatingCrystal from './FloatingCrystal';

interface HeroProps {
  scrollY: number;
}

const Hero: React.FC<HeroProps> = ({ scrollY }) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div 
        className="text-center z-20 transform"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        {/* Glass card container */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12 shadow-2xl shadow-emerald-500/20 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            Welcome to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-green-400">
              Lovable
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-green-100/80 mb-8 leading-relaxed">
            Exploring the beauty of glassmorphism and 3D interactive design
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-4 backdrop-blur-md bg-emerald-500/20 border border-emerald-400/30 rounded-full text-white hover:bg-emerald-500/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25">
              Explore
            </button>
            <button className="px-8 py-4 backdrop-blur-md bg-white/10 border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      {/* 3D Crystal */}
      <div 
        className="absolute right-10 top-1/2 transform -translate-y-1/2 w-96 h-96 z-10"
        style={{
          transform: `translateY(${-scrollY * 0.3}px) translateX(-50px)`,
        }}
      >
        <FloatingCrystal />
      </div>
    </section>
  );
};

export default Hero;
