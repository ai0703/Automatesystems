'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function GeometricShape({ position, type, color, speed }: { position: [number, number, number], type: 'sphere' | 'cube' | 'torus', color: string, speed: number }) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * speed * 0.2;
            meshRef.current.rotation.y += delta * speed * 0.3;
        }
    });

    // GSAP animation for scroll interaction
    useGSAP(() => {
        if (meshRef.current) {
            gsap.to(meshRef.current.position, {
                y: `+=${position[1] * 0.5}`, // Move drastically based on scroll
                ease: "none",
                scrollTrigger: {
                    trigger: document.body,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1.5
                }
            });
        }
    }, { scope: meshRef });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <mesh ref={meshRef} position={position}>
                {type === 'sphere' && <sphereGeometry args={[1, 32, 32]} />}
                {type === 'cube' && <boxGeometry args={[1.5, 1.5, 1.5]} />}
                {type === 'torus' && <torusKnotGeometry args={[0.8, 0.3, 100, 16]} />}
                <meshStandardMaterial
                    color={color}
                    transparent
                    opacity={0.1}
                    roughness={0.1}
                    metalness={0.1}
                />
            </mesh>
        </Float>
    );
}

export default function Background3D() {
    const shapes = useMemo(() => {
        const items = [];
        const colors = ['#3B82F6', '#0F172A']; // Tech Blue and Deep Midnight
        const types: ('sphere' | 'cube' | 'torus')[] = ['sphere', 'cube', 'torus'];

        for (let i = 0; i < 15; i++) {
            items.push({
                position: [
                    (Math.random() - 0.5) * 20, // X: -10 to 10
                    (Math.random() - 0.5) * 20, // Y: -10 to 10
                    (Math.random() - 0.5) * 5 - 5 // Z: -7.5 to -2.5 (behind content)
                ] as [number, number, number],
                type: types[Math.floor(Math.random() * types.length)],
                color: colors[Math.floor(Math.random() * colors.length)],
                speed: Math.random() + 0.5
            });
        }
        return items;
    }, []);

    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none">
            <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                {shapes.map((shape, i) => (
                    <GeometricShape
                        key={i}
                        position={shape.position}
                        type={shape.type}
                        color={shape.color}
                        speed={shape.speed}
                    />
                ))}
            </Canvas>
            {/* Overlay to ensure readability */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]"></div>
        </div>
    );
}
