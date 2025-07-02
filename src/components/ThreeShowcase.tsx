
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const GlassShapes = () => {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group ref={group}>
      {/* Central sphere */}
      <Sphere args={[1]} position={[0, 0, 0]}>
        <meshPhysicalMaterial
          color="#059669"
          transparent
          opacity={0.6}
          roughness={0.1}
          metalness={0.1}
          transmission={0.8}
        />
      </Sphere>
      
      {/* Orbiting smaller spheres */}
      {[...Array(6)].map((_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        return (
          <Sphere
            key={i}
            args={[0.3]}
            position={[Math.cos(angle) * 2.5, Math.sin(angle * 0.5), Math.sin(angle) * 2.5]}
          >
            <meshPhysicalMaterial
              color="#10b981"
              transparent
              opacity={0.7}
              roughness={0.2}
              metalness={0.2}
              transmission={0.9}
            />
          </Sphere>
        );
      })}
    </group>
  );
};

const ThreeShowcase: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl shadow-emerald-500/10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Interactive 3D Gallery
          </h2>
          <p className="text-lg text-green-100/80 text-center mb-8">
            Click and drag to explore • Scroll to zoom
          </p>
          
          <div className="h-96 md:h-[500px] rounded-2xl overflow-hidden backdrop-blur-md bg-black/20 border border-white/10">
            <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
              <ambientLight intensity={0.3} />
              <directionalLight position={[10, 10, 5]} intensity={1} color="#10b981" />
              <pointLight position={[-10, 0, -5]} intensity={0.5} color="#34d399" />
              <pointLight position={[0, 10, 0]} intensity={0.3} color="#6ee7b7" />
              
              <GlassShapes />
              
              <OrbitControls
                enableDamping
                dampingFactor={0.05}
                minDistance={3}
                maxDistance={15}
              />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeShowcase;
