"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface DecryptedTextProps {
    text: string;
    speed?: number;
    maxIterations?: number;
    sequential?: boolean;
    revealDirection?: "start" | "end" | "center";
    useOriginalCharsOnly?: boolean;
    characters?: string;
    className?: string;
    parentClassName?: string;
    animateOn?: "view" | "hover";
}

export default function DecryptedText({
    text,
    speed = 50,
    maxIterations = 10,
    sequential = false,
    revealDirection = "start",
    useOriginalCharsOnly = false,
    characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+",
    className = "",
    parentClassName = "",
    animateOn = "hover",
}: DecryptedTextProps) {
    const [displayText, setDisplayText] = useState(text);
    const [isHovering, setIsHovering] = useState(false);
    const [isScrolledIntoView, setIsScrolledIntoView] = useState(false);
    const containerRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        let currentIteration = 0;

        const getNextChar = (char: string) => {
            if (useOriginalCharsOnly) {
                const index = Math.floor(Math.random() * text.length);
                return text[index];
            }
            const index = Math.floor(Math.random() * characters.length);
            return characters[index];
        };

        const runAnimation = () => {
            interval = setInterval(() => {
                setDisplayText((prevText) => {
                    return text
                        .split("")
                        .map((char, index) => {
                            if (char === " ") return " ";
                            if (currentIteration >= maxIterations) return char;

                            // Logic for sequential reveal could be added here
                            if (Math.random() < 0.1 + currentIteration / maxIterations) {
                                return char;
                            }

                            return getNextChar(char);
                        })
                        .join("");
                });

                currentIteration++;
                if (currentIteration > maxIterations + 5) { // Ensure cleanup
                    clearInterval(interval);
                    setDisplayText(text);
                }
            }, speed);
        };

        if (animateOn === "view" && isScrolledIntoView) {
            runAnimation();
        } else if (animateOn === "hover" && isHovering) {
            runAnimation();
        }

        return () => clearInterval(interval);
    }, [text, speed, maxIterations, characters, useOriginalCharsOnly, isHovering, isScrolledIntoView, animateOn]);


    // Intersection Observer for 'view' trigger
    useEffect(() => {
        if (animateOn !== 'view') return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsScrolledIntoView(true);
                    if (containerRef.current) observer.unobserve(containerRef.current);
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, [animateOn]);

    return (
        <span
            ref={containerRef}
            className={`inline-block whitespace-nowrap ${parentClassName}`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <span className={className}>{displayText}</span>
        </span>
    );
}
