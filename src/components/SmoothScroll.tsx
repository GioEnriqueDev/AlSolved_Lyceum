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

            if (href.startsWith('#') || (href.startsWith('/#') && window.location.pathname === '/')) {
                const id = href.startsWith('/') ? href.substring(1) : href;
                const element = document.querySelector(id);

                if (element && lenis) {
                    e.preventDefault();
                    lenis.scrollTo(element, { offset: -80, duration: 1.2 });
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
                lerp: 0.12,      // Faster response (was 0.1)
                duration: 1.0,   // Shorter duration (was 1.5)
                smoothWheel: true,
                wheelMultiplier: 1.2,  // Faster wheel scroll
                touchMultiplier: 2,    // Faster touch scroll
            }}
        >
            <AnchorScrollHandler />
            {children}
        </ReactLenis>
    );
}
