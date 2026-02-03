"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const CinematicLogo = () => {
    return (
        <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {/* Glow Effect Behind Logo */}
            <motion.div
                className="absolute inset-0 -z-10"
                animate={{
                    opacity: [0.3, 0.5, 0.3],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <div className="w-full h-full bg-primary-500/20 blur-3xl rounded-full" />
            </motion.div>

            {/* Logo Container */}
            <motion.div
                className="relative w-48 h-16 md:w-64 md:h-20"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
            >
                <Image
                    src="/AlSolved_Lyceum/logo-transparent.png"
                    alt="Lyceum"
                    fill
                    className="object-contain drop-shadow-lg"
                    priority
                />
            </motion.div>

            {/* Subtle Shine Effect */}
            <motion.div
                className="absolute inset-0 overflow-hidden pointer-events-none rounded-lg"
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 5,
                    ease: "easeInOut",
                }}
            >
                <div className="w-20 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12" />
            </motion.div>
        </motion.div>
    );
};
