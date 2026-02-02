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

            // Handle both "#id" and "/#id" (if we are on the homepage)
            if (href.startsWith('#') || (href.startsWith('/#') && window.location.pathname === '/')) {
                const id = href.startsWith('/') ? href.substring(1) : href;
                const element = document.querySelector(id);

                if (element && lenis) {
                    e.preventDefault();
                    lenis.scrollTo(element, { offset: 0, duration: 2 });
                    // Optionally update URL without jump
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
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
            <AnchorScrollHandler />
            {children}
        </ReactLenis>
    );
}
