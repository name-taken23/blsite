"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef } from "react";

// --- Types & Data ---

type City = {
  name: string;
  lat: number;
  lon: number;
};

const CITIES: City[] = [
  { name: "London", lat: 51.5074, lon: -0.1278 },
  { name: "New York", lat: 40.7128, lon: -74.006 },
  { name: "San Francisco", lat: 37.7749, lon: -122.4194 },
  { name: "Singapore", lat: 1.3521, lon: 103.8198 },
  { name: "Tokyo", lat: 35.6895, lon: 139.6917 },
  { name: "Sydney", lat: -33.8688, lon: 151.2093 },
  { name: "Frankfurt", lat: 50.1109, lon: 8.6821 },
  { name: "Hong Kong", lat: 22.3193, lon: 114.1694 },
];

const ROUTES = [
  ["London", "New York"],
  ["London", "Singapore"],
  ["New York", "San Francisco"],
  ["Singapore", "Tokyo"],
  ["Tokyo", "Sydney"],
  ["Frankfurt", "Hong Kong"],
  ["London", "Frankfurt"],
  ["San Francisco", "Tokyo"],
  ["New York", "Frankfurt"],
];

// --- Helpers ---

function latLonToCartesian(latDeg: number, lonDeg: number, radius: number) {
  // phi: angle from positive y-axis (0 at north pole, 180 at south pole)
  const phi = (90 - latDeg) * (Math.PI / 180);
  // theta: angle around y-axis (starting from positive z-axis)
  const theta = (lonDeg + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return new THREE.Vector3(x, y, z);
}

// --- Components ---

function Globe() {
  const globeRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <group rotation={[0, 0, 0]}>
      {/* Base Sphere - Dark & Glossy */}
      <Sphere ref={globeRef} args={[1, 64, 64]}>
        <meshPhysicalMaterial
          color="#050505"
          roughness={0.2}
          metalness={0.8}
          clearcoat={0.5}
        />
      </Sphere>
      
      {/* Wireframe / Grid Overlay for Technical Feel */}
      <group rotation={[0, 0, 0]}>
         <Sphere args={[1.001, 24, 24]}>
          <meshBasicMaterial
            color="#4AA6FF"
            wireframe
            transparent
            opacity={0.03}
          />
        </Sphere>
      </group>

      {/* Atmosphere Glow */}
      <Sphere args={[1.02, 64, 64]}>
        <meshBasicMaterial
          color="#4AA6FF"
          transparent
          opacity={0.05}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </Sphere>
    </group>
  );
}

function CityNodes({ radius = 1 }: { radius?: number }) {
  return (
    <group>
      {CITIES.map((city, i) => {
        const pos = latLonToCartesian(city.lat, city.lon, radius);
        return (
          <group key={i} position={pos}>
            {/* Simple, clean node */}
            <mesh>
              <sphereGeometry args={[0.015, 16, 16]} />
              <meshBasicMaterial color="#ffffff" toneMapped={false} />
            </mesh>
            {/* Subtle ring */}
            <mesh lookAt={() => new THREE.Vector3(0,0,0)}>
              <ringGeometry args={[0.02, 0.025, 32]} />
              <meshBasicMaterial color="#4AA6FF" side={THREE.DoubleSide} transparent opacity={0.5} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

function ArcPulse({ curve, speed = 1, offset = 0 }: { curve: THREE.Curve<THREE.Vector3>; speed?: number; offset?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const t = (state.clock.elapsedTime * speed * 0.1 + offset) % 1;
      const point = curve.getPointAt(t);
      const tangent = curve.getTangentAt(t).normalize();
      
      meshRef.current.position.copy(point);
      
      // Orient along path
      const lookAtPos = point.clone().add(tangent);
      meshRef.current.lookAt(lookAtPos);

      // Simple fade at ends
      const scale = Math.sin(t * Math.PI); 
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <mesh ref={meshRef}>
      {/* Clean capsule for electric current look */}
      <capsuleGeometry args={[0.01, 0.08, 4, 8]} />
      <meshBasicMaterial color="#ffffff" toneMapped={false} />
    </mesh>
  );
}

function NetworkArcs({ radius = 1 }: { radius?: number }) {
  const arcs = useMemo(() => {
    return ROUTES.map((route) => {
      const city1 = CITIES.find((c) => c.name === route[0]);
      const city2 = CITIES.find((c) => c.name === route[1]);

      if (!city1 || !city2) return null;

      const start = latLonToCartesian(city1.lat, city1.lon, radius);
      const end = latLonToCartesian(city2.lat, city2.lon, radius);

      // Higher arc for better visibility
      const mid = start.clone().add(end).normalize().multiplyScalar(radius + 0.4);
      
      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      
      // Thicker tube for distinct lines
      const geometry = new THREE.TubeGeometry(curve, 40, 0.003, 8, false);

      return { curve, geometry, id: `${route[0]}-${route[1]}` };
    }).filter(Boolean) as { curve: THREE.QuadraticBezierCurve3; geometry: THREE.TubeGeometry; id: string }[];
  }, [radius]);

  return (
    <group>
      {arcs.map((arc, i) => (
        <group key={arc.id}>
          {/* Distinct Static Wire */}
          <primitive object={new THREE.Mesh(arc.geometry, new THREE.MeshBasicMaterial({ 
            color: "#4AA6FF", 
            transparent: true, 
            opacity: 0.3, // Increased opacity
            blending: THREE.AdditiveBlending,
            depthWrite: false
          }))} />
          
          {/* Clean Electric Pulses */}
          <ArcPulse curve={arc.curve} speed={1.0} offset={i * 0.3} />
          <ArcPulse curve={arc.curve} speed={1.5} offset={i * 0.3 + 0.5} />
        </group>
      ))}
    </group>
  );
}

function SceneContent() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <Globe />
      <CityNodes />
      <NetworkArcs />
    </group>
  );
}

export default function WorldGlobeScene() {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas
        camera={{ position: [0, 1.5, 3.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <color attach="background" args={["#000000"]} /> {/* Fallback color, transparent via alpha: true */}
        
        {/* Lighting */}
        <ambientLight intensity={0.2} color="#4AA6FF" />
        <pointLight position={[10, 10, 10]} intensity={1} color="#4AA6FF" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffffff" />
        <hemisphereLight args={["#050608", "#000000", 1]} />

        {/* Scene */}
        <SceneContent />
        
        {/* Controls - restricted */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate={false}
          enableDamping
          dampingFactor={0.05}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
}
