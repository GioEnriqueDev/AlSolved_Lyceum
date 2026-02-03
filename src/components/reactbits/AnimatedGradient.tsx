"use client";

export default function AnimatedGradient({ className = "" }: { className?: string }) {
    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none translate-z-0 ${className}`}>
            {/* Static refined blobs with minimal CSS animation */}
            <div
                className="absolute w-[600px] h-[600px] rounded-full will-change-transform opacity-40"
                style={{
                    background: "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)",
                    left: "50%",
                    top: "-20%",
                    transform: "translateX(-50%)",
                }}
            />

            <div
                className="absolute w-[400px] h-[400px] rounded-full will-change-transform opacity-30 animate-pulse-slow"
                style={{
                    background: "radial-gradient(circle, rgba(20, 184, 166, 0.08) 0%, transparent 70%)",
                    right: "-10%",
                    top: "20%",
                }}
            />
        </div>
    );
}
