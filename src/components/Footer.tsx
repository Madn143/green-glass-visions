
import React from 'react';
import { Github, Linkedin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl shadow-emerald-500/10">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-6">
              Let's Connect
            </h3>
            
            <div className="flex justify-center gap-6 mb-8">
              <a
                href="#"
                className="p-4 backdrop-blur-md bg-white/10 border border-white/20 rounded-full hover:bg-emerald-500/20 transition-all duration-300 hover:scale-110 group"
              >
                <Github className="w-6 h-6 text-white group-hover:text-emerald-300" />
              </a>
              <a
                href="#"
                className="p-4 backdrop-blur-md bg-white/10 border border-white/20 rounded-full hover:bg-emerald-500/20 transition-all duration-300 hover:scale-110 group"
              >
                <Linkedin className="w-6 h-6 text-white group-hover:text-emerald-300" />
              </a>
            </div>
            
            <p className="text-green-100/70 mb-6">
              Built with React, Three.js, and a passion for beautiful web experiences
            </p>
            
            <button
              onClick={scrollToTop}
              className="p-3 backdrop-blur-md bg-emerald-500/20 border border-emerald-400/30 rounded-full hover:bg-emerald-500/30 transition-all duration-300 hover:scale-110 group"
            >
              <ArrowUp className="w-5 h-5 text-white group-hover:text-emerald-200" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
