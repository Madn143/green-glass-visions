
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl shadow-emerald-500/10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            About This Experience
          </h2>
          <p className="text-lg md:text-xl text-green-100/80 leading-relaxed text-center mb-8">
            This interactive showcase demonstrates the power of modern web technologies, 
            combining React.js with Three.js to create immersive 3D experiences. 
            The glassmorphism design philosophy creates depth and elegance while 
            maintaining excellent usability.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="backdrop-blur-md bg-emerald-500/10 border border-emerald-400/20 rounded-2xl p-6 hover:bg-emerald-500/20 transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold text-white mb-3">Interactive 3D</h3>
              <p className="text-green-100/70">Engaging three-dimensional elements that respond to user interaction</p>
            </div>
            
            <div className="backdrop-blur-md bg-emerald-500/10 border border-emerald-400/20 rounded-2xl p-6 hover:bg-emerald-500/20 transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold text-white mb-3">Glassmorphism</h3>
              <p className="text-green-100/70">Modern frosted glass aesthetic with subtle transparency effects</p>
            </div>
            
            <div className="backdrop-blur-md bg-emerald-500/10 border border-emerald-400/20 rounded-2xl p-6 hover:bg-emerald-500/20 transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold text-white mb-3">Responsive</h3>
              <p className="text-green-100/70">Seamlessly adapts to all device sizes and screen orientations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
