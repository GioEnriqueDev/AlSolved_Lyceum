"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

interface Shape {
    id: number;
    size: number;
    x: number;
    y: number;
    duration: number;
    delay: number;
    type: "circle" | "hexagon" | "triangle" | "ring";
    color: string;
    blur: number;
}

const shapeColors = [
    "rgba(139, 92, 246, 0.15)",   // Violet
    "rgba(167, 139, 250, 0.12)",  // Light Violet
    "rgba(196, 181, 253, 0.10)",  // Lighter Violet
    "rgba(20, 184, 166, 0.10)",   // Teal
    "rgba(45, 212, 191, 0.08)",   // Light Teal
];

// Generate random shapes
function generateShapes(count: number): Shape[] {
    const shapes: Shape[] = [];
    const types: Shape["type"][] = ["circle", "hexagon", "triangle", "ring"];

    for (let i = 0; i < count; i++) {
        shapes.push({
            id: i,
            size: 40 + Math.random() * 120,
            x: Math.random() * 100,
            y: Math.random() * 100,
            duration: 15 + Math.random() * 20,
            delay: Math.random() * -20,
            type: types[Math.floor(Math.random() * types.length)],
            color: shapeColors[Math.floor(Math.random() * shapeColors.length)],
            blur: 20 + Math.random() * 40,
        });
    }
    return shapes;
}

// Shape SVG components
const ShapeSVG = ({ type, color }: { type: Shape["type"]; color: string }) => {
    switch (type) {
        case "circle":
            return <circle cx="50" cy="50" r="50" fill={color} />;
        case "hexagon":
            return <polygon points="50,0 100,25 100,75 50,100 0,75 0,25" fill={color} />;
        case "triangle":
            return <polygon points="50,0 100,100 0,100" fill={color} />;
        case "ring":
            return (
                <>
                    <circle cx="50" cy="50" r="45" fill="none" stroke={color} strokeWidth="10" />
                </>
            );
        default:
            return null;
    }
};

export default function FloatingShapes({ count = 12 }: { count?: number }) {
    const shapes = useMemo(() => generateShapes(count), [count]);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {shapes.map((shape) => (
                <motion.div
                    key={shape.id}
                    className="absolute"
                    style={{
                        left: `${shape.x}%`,
                        top: `${shape.y}%`,
                        width: shape.size,
                        height: shape.size,
                        filter: `blur(${shape.blur}px)`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 15, 0],
                        rotate: [0, 180, 360],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: shape.duration,
                        delay: shape.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <ShapeSVG type={shape.type} color={shape.color} />
                    </svg>
                </motion.div>
            ))}
        </div>
    );
}
