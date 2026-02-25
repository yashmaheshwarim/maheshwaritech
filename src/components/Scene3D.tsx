import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from "@react-three/drei";
import * as THREE from "three";

const FloatingIcosahedron = ({ position, color, speed }: { position: [number, number, number]; color: string; speed: number }) => {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    ref.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
    ref.current.rotation.y = state.clock.elapsedTime * speed * 0.2;
  });
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={ref} position={position}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial color={color} speed={3} distort={0.4} roughness={0.2} metalness={0.8} transparent opacity={0.7} />
      </mesh>
    </Float>
  );
};

const FloatingTorus = ({ position, color }: { position: [number, number, number]; color: string }) => {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    ref.current.rotation.x = state.clock.elapsedTime * 0.4;
    ref.current.rotation.z = state.clock.elapsedTime * 0.2;
  });
  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
      <mesh ref={ref} position={position}>
        <torusGeometry args={[0.8, 0.3, 16, 32]} />
        <MeshWobbleMaterial color={color} speed={2} factor={0.3} metalness={0.9} roughness={0.1} transparent opacity={0.6} />
      </mesh>
    </Float>
  );
};

const Particles = () => {
  const count = 200;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 20;
    }
    return arr;
  }, []);

  const ref = useRef<THREE.Points>(null!);
  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    ref.current.rotation.x = state.clock.elapsedTime * 0.01;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#00b4d8" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
};

const Scene3D = () => (
  <div className="absolute inset-0 z-0">
    <Canvas camera={{ position: [0, 0, 6], fov: 60 }} dpr={[1, 2]}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#0077b6" />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#00b4d8" />
      <FloatingIcosahedron position={[-3, 1.5, -2]} color="#0077b6" speed={0.5} />
      <FloatingIcosahedron position={[3.5, -1, -1]} color="#00b4d8" speed={0.7} />
      <FloatingTorus position={[0, -2, -3]} color="#0096c7" />
      <FloatingTorus position={[-2, -1, 0]} color="#48cae4" />
      <Particles />
    </Canvas>
  </div>
);

export default Scene3D;
