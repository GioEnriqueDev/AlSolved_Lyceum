"use client";

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { useEffect } from "react";

function AnchorScrollHandler() {
    const lenis = useLenis();

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const link = target.closest('a');
            if (!link) return;

            const href = link.getAttribute('href');
            if (!href) return;

            // Only handle internal links
            if (href.startsWith('#') || (href.startsWith('/#') && window.location.pathname === '/')) {
                const id = href.startsWith('/') ? href.substring(1) : href;
                const element = document.querySelector(id);

                if (element && lenis) {
                    e.preventDefault();
                    // Instant scroll or very fast scroll to avoid "fighting" the user
                    lenis.scrollTo(element as HTMLElement, { offset: -80, duration: 1.0, immediate: false });
                    window.history.pushState({}, '', id);
                }
            }
        };

        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, [lenis]);

    return null;
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    return (
        <ReactLenis
            root
            options={{
                lerp: 0.15,      // Increased from 0.12 for more responsive/native feel
                duration: 0.8,   // Reduced duration for snappier aim
                smoothWheel: true,
                wheelMultiplier: 1.0, // Reset to 1.0 to avoid unnatural speed
                touchMultiplier: 1.5, // Reduced from 2
                infinite: false,
            }}
        >
            <AnchorScrollHandler />
            {children as any}
        </ReactLenis>
    );
}
