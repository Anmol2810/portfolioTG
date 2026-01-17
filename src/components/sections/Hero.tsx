"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
    return (
        <section className="h-screen flex flex-col justify-center items-center relative overflow-hidden px-4">
            <div className="absolute inset-0 -z-10 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[128px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[128px]" />
            </div>

            <div className="text-center z-10">
                <motion.h1
                    className="text-6xl md:text-9xl font-bold tracking-tighter mb-6 bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent"
                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    CREATIVE
                    <br />
                    DEVELOPER
                </motion.h1>

                <motion.p
                    className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                    Crafting digital experiences with precision and passion.
                </motion.p>
            </div>

            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <ArrowDown className="text-white/40 animate-bounce" size={32} />
            </motion.div>
        </section>
    );
}
