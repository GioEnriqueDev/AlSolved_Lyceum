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
    "rgba(139, 92, 246, 0.08)",   // Violet - reduced opacity
    "rgba(167, 139, 250, 0.06)",  // Light Violet
    "rgba(20, 184, 166, 0.06)",   // Teal
];

// Generate fewer, simpler shapes
function generateShapes(count: number): Shape[] {
    const shapes: Shape[] = [];

    for (let i = 0; i < count; i++) {
        shapes.push({
            id: i,
            size: 80 + Math.random() * 150,
            x: 10 + (i * 25) % 80,  // More spread out
            y: 10 + Math.random() * 80,
            duration: 20 + Math.random() * 10, // Slower = less CPU
            color: shapeColors[i % shapeColors.length],
            blur: 40 + Math.random() * 30,
        });
    }
    return shapes;
}

export default function FloatingShapes({ count = 5 }: { count?: number }) {
    const shapes = useMemo(() => generateShapes(Math.min(count, 6)), [count]);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {shapes.map((shape) => (
                <motion.div
                    key={shape.id}
                    className="absolute rounded-full will-change-transform"
                    style={{
                        left: `${shape.x}%`,
                        top: `${shape.y}%`,
                        width: shape.size,
                        height: shape.size,
                        background: shape.color,
                        filter: `blur(${shape.blur}px)`,
                    }}
                    animate={{
                        y: [0, -15, 0],
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        duration: shape.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}
