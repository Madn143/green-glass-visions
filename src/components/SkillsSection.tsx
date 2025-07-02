
import React from 'react';

const skills = [
  { name: 'React.js', level: 95, color: 'from-emerald-400 to-green-500' },
  { name: 'Three.js', level: 85, color: 'from-green-400 to-emerald-600' },
  { name: 'TypeScript', level: 90, color: 'from-teal-400 to-emerald-500' },
  { name: 'CSS/Tailwind', level: 92, color: 'from-emerald-300 to-green-400' },
  { name: 'WebGL', level: 80, color: 'from-green-500 to-emerald-700' },
  { name: 'UI/UX Design', level: 88, color: 'from-emerald-500 to-teal-600' },
];

const SkillsSection: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl shadow-emerald-500/10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Technical Skills
          </h2>
          
          <div className="grid gap-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="group">
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-green-300">{skill.level}%</span>
                </div>
                <div className="h-3 backdrop-blur-md bg-white/10 rounded-full overflow-hidden border border-white/20">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg`}
                    style={{
                      width: `${skill.level}%`,
                      animation: `skill-fill-${index} 2s ease-out`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-green-100/80 text-lg">
              Passionate about creating immersive web experiences that push the boundaries of what's possible in the browser.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
