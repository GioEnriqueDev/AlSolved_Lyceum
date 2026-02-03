"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

interface Shape {
    id: number;
    size: number;
    x: number;
    y: number;
    duration: number;
    color: string;
    blur: number;
}

const shapeColors = [
    "rgba(139, 92, 246, 0.05)",   // Very faint violet
    "rgba(167, 139, 250, 0.04)",  // Very faint light violet
];

// Generate minimal shapes
function generateShapes(count: number): Shape[] {
    const shapes: Shape[] = [];

    for (let i = 0; i < count; i++) {
        shapes.push({
            id: i,
            size: 100 + Math.random() * 100,
            x: 10 + (i * 40) % 90,
            y: 20 + Math.random() * 60,
            duration: 25, // Very slow constant movement
            color: shapeColors[i % shapeColors.length],
            blur: 50,
        });
    }
    return shapes;
}

export default function FloatingShapes({ count = 3 }: { count?: number }) {
    // Force max 3 shapes regardless of prop to ensure performance
    const shapes = useMemo(() => generateShapes(Math.min(count, 3)), [count]);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none translate-z-0">
            {shapes.map((shape) => (
                <div
                    key={shape.id}
                    className="absolute rounded-full will-change-transform animate-float-slow"
                    style={{
                        left: `${shape.x}%`,
                        top: `${shape.y}%`,
                        width: shape.size,
                        height: shape.size,
                        background: shape.color,
                        filter: `blur(${shape.blur}px)`,
                        animationDuration: `${shape.duration}s`,
                    }}
                />
            ))}
        </div>
    );
}
