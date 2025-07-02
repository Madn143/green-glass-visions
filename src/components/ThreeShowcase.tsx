
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const Butterfly = () => {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.3;
      group.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <group ref={group}>
      {/* Butterfly body */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 1.5]} />
        <meshPhysicalMaterial color="#2d3748" roughness={0.3} />
      </mesh>
      
      {/* Wings */}
      <mesh position={[-0.4, 0.2, 0]} rotation={[0, 0, Math.PI / 6]}>
        <sphereGeometry args={[0.3, 16, 8]} />
        <meshPhysicalMaterial
          color="#10b981"
          transparent
          opacity={0.8}
          transmission={0.3}
          roughness={0.1}
        />
      </mesh>
      <mesh position={[0.4, 0.2, 0]} rotation={[0, 0, -Math.PI / 6]}>
        <sphereGeometry args={[0.3, 16, 8]} />
        <meshPhysicalMaterial
          color="#10b981"
          transparent
          opacity={0.8}
          transmission={0.3}
          roughness={0.1}
        />
      </mesh>
      <mesh position={[-0.3, -0.2, 0]} rotation={[0, 0, Math.PI / 8]}>
        <sphereGeometry args={[0.2, 16, 8]} />
        <meshPhysicalMaterial
          color="#34d399"
          transparent
          opacity={0.8}
          transmission={0.3}
          roughness={0.1}
        />
      </mesh>
      <mesh position={[0.3, -0.2, 0]} rotation={[0, 0, -Math.PI / 8]}>
        <sphereGeometry args={[0.2, 16, 8]} />
        <meshPhysicalMaterial
          color="#34d399"
          transparent
          opacity={0.8}
          transmission={0.3}
          roughness={0.1}
        />
      </mesh>
    </group>
  );
};

const House = () => {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={group}>
      {/* House base */}
      <mesh position={[0, -0.5, 0]}>
        <boxGeometry args={[1.5, 1, 1.5]} />
        <meshPhysicalMaterial
          color="#059669"
          transparent
          opacity={0.7}
          transmission={0.4}
          roughness={0.2}
        />
      </mesh>
      
      {/* Roof */}
      <mesh position={[0, 0.2, 0]} rotation={[0, Math.PI / 4, 0]}>
        <coneGeometry args={[1.2, 0.8, 4]} />
        <meshPhysicalMaterial
          color="#10b981"
          transparent
          opacity={0.8}
          transmission={0.2}
          roughness={0.1}
        />
      </mesh>
      
      {/* Chimney */}
      <mesh position={[0.4, 0.4, 0.4]}>
        <boxGeometry args={[0.2, 0.6, 0.2]} />
        <meshPhysicalMaterial
          color="#065f46"
          transparent
          opacity={0.6}
          transmission={0.3}
        />
      </mesh>
    </group>
  );
};

const AbstractTree = () => {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={group}>
      {/* Trunk */}
      <mesh position={[0, -0.8, 0]}>
        <cylinderGeometry args={[0.1, 0.15, 1]} />
        <meshPhysicalMaterial
          color="#065f46"
          transparent
          opacity={0.8}
          transmission={0.2}
        />
      </mesh>
      
      {/* Leaves - multiple spheres */}
      {[...Array(5)].map((_, i) => {
        const angle = (i / 5) * Math.PI * 2;
        return (
          <mesh
            key={i}
            position={[Math.cos(angle) * 0.3, 0.2 + Math.sin(i) * 0.2, Math.sin(angle) * 0.3]}
          >
            <sphereGeometry args={[0.3, 12, 12]} />
            <meshPhysicalMaterial
              color="#10b981"
              transparent
              opacity={0.7}
              transmission={0.5}
              roughness={0.1}
            />
          </mesh>
        );
      })}
    </group>
  );
};

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
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhysicalMaterial
          color="#059669"
          transparent
          opacity={0.6}
          roughness={0.1}
          metalness={0.1}
          transmission={0.8}
        />
      </mesh>
      
      {/* Orbiting smaller spheres */}
      {[...Array(6)].map((_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        return (
          <mesh
            key={i}
            position={[Math.cos(angle) * 2.5, Math.sin(angle * 0.5), Math.sin(angle) * 2.5]}
          >
            <sphereGeometry args={[0.3, 16, 16]} />
            <meshPhysicalMaterial
              color="#10b981"
              transparent
              opacity={0.7}
              roughness={0.2}
              metalness={0.2}
              transmission={0.9}
            />
          </mesh>
        );
      })}
    </group>
  );
};

const Crystal = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef}>
      <octahedronGeometry args={[1.5]} />
      <meshPhysicalMaterial
        color="#10b981"
        transparent
        opacity={0.7}
        roughness={0.1}
        metalness={0.1}
        transmission={0.9}
        thickness={0.5}
        envMapIntensity={1}
      />
    </mesh>
  );
};

const ThreeShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const scenes = [
    { component: GlassShapes, title: "Glass Spheres", description: "Floating transparent spheres" },
    { component: Butterfly, title: "3D Butterfly", description: "Animated glass butterfly" },
    { component: House, title: "Glass House", description: "Transparent crystal house" },
    { component: AbstractTree, title: "Abstract Tree", description: "Geometric glass tree" },
    { component: Crystal, title: "Floating Crystal", description: "Rotating crystal gem" }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl shadow-emerald-500/10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Interactive 3D Gallery
          </h2>
          <p className="text-lg text-green-100/80 text-center mb-8">
            Click and drag to explore • Scroll to zoom • Slide to see more
          </p>
          
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {scenes.map((scene, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div className="h-96 md:h-[500px] rounded-2xl overflow-hidden backdrop-blur-md bg-black/20 border border-white/10 mb-4">
                      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
                        <ambientLight intensity={0.3} />
                        <directionalLight position={[10, 10, 5]} intensity={1} color="#10b981" />
                        <pointLight position={[-10, 0, -5]} intensity={0.5} color="#34d399" />
                        <pointLight position={[0, 10, 0]} intensity={0.3} color="#6ee7b7" />
                        
                        <scene.component />
                        
                        <OrbitControls
                          enableDamping
                          dampingFactor={0.05}
                          minDistance={3}
                          maxDistance={15}
                        />
                      </Canvas>
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white mb-2">{scene.title}</h3>
                      <p className="text-green-100/70">{scene.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="backdrop-blur-md bg-white/10 border-white/20 text-white hover:bg-white/20" />
            <CarouselNext className="backdrop-blur-md bg-white/10 border-white/20 text-white hover:bg-white/20" />
          </Carousel>
          
          <div className="flex justify-center mt-6 space-x-2">
            {scenes.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-emerald-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeShowcase;
