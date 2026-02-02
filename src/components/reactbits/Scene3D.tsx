"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useState, useRef } from "react";
import * as random from "maath/random/dist/maath-random.cjs";

function Stars(props: any) {
    // Generate random points in a sphere volume
    const ref = useRef<any>(null);
    const [sphere] = useState(() => {
        const data = random.inSphere(new Float32Array(5000), { radius: 1.5 });
        // Validate to ensure no NaN
        for (let i = 0; i < data.length; i++) {
            if (isNaN(data[i])) data[i] = 0;
        }
        return data;
    });

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#2dd4bf" // Neon Teal
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}

function DNAHelix() {
    // Conceptual abstract DNA strands
    const groupRef = useRef<any>(null);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (groupRef.current) {
            groupRef.current.rotation.z = t * 0.05; // Very slow rotation
            groupRef.current.position.y = Math.sin(t * 0.2) * 0.05; // Tiny floating
        }
    });

    return (
        <group ref={groupRef} rotation={[0, 0, Math.PI / 3]}>
            <Points positions={GenerateHelix(100, 0.5, 2)} stride={3}>
                <PointMaterial transparent color="#a78bfa" size={0.03} sizeAttenuation depthWrite={false} opacity={0.8} />
            </Points>
            <Points positions={GenerateHelix(100, 0.5, 2, Math.PI)} stride={3}>
                <PointMaterial transparent color="#5eead4" size={0.03} sizeAttenuation depthWrite={false} opacity={0.8} />
            </Points>
        </group>
    )
}

function GenerateHelix(count: number, radius: number, height: number, offsetAngle = 0) {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        const t = i / count;
        const angle = t * Math.PI * 4 + offsetAngle;
        const x = Math.cos(angle) * radius;
        const y = (t - 0.5) * height * 4; // Stretch
        const z = Math.sin(angle) * radius;

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;
    }
    return positions;
}


export default function Scene3D() {
    return (
        <div className="absolute inset-0 z-0 opacity-60">
            <Canvas camera={{ position: [0, 0, 3] }}>
                <fog attach="fog" args={["#0f172a", 1, 4]} />
                <Stars />
                <DNAHelix />
            </Canvas>
        </div>
    );
}
