"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { GeometricShape } from "@/components/ui/GeometricShape";

export function HeroLando() {
    return (
        <section className="h-screen relative overflow-hidden bg-zinc-950 text-white selection:bg-blue-500/30">

            {/* Background Texture - Topographic Lines */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <filter id="noise">
                        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noise)" opacity="0.5" />
                </svg>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
            </div>

            {/* Vibrant Orbs */}
            <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse" />
            <div className="absolute bottom-[20%] right-[20%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse" />

            {/* Main Content Container */}
            <div className="container mx-auto h-full px-6 relative z-10 flex flex-col justify-between py-8">

                {/* Top Corners handled by Navigation overlay usually, but adding Hero specific branding */}
                <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-1">
                        <motion.span
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500"
                        >

                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-2xl md:text-4xl font-bold tracking-tighter uppercase hidden md:block"
                        >
                            {/* The Generalists. removed */}
                        </motion.h1>
                    </div>
                    {/* Right side is menu */}
                </div>

                {/* Center: Massive Text & Image */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    {/* Huge Background Text */}
                    {/* Huge Background Text */}
                    <div className="w-full flex z-20 flex-col items-center justify-center select-none">
                        <motion.span
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: "circOut" }}
                            className="text-[6vw] leading-none font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-center"
                        >
                            DREAM. DESIGN. DEPLOY.
                        </motion.span>
                        <motion.span
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
                            className="text-6xl leading-none font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400 text-center"
                        >
                            The Generalists
                        </motion.span>
                    </div>

                    {/* Centered Avatar/Shape */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, y: 50 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="absolute pointer-events-auto cursor-grab active:cursor-grabbing hover:scale-105 transition-transform duration-500"
                    >
                        <GeometricShape />
                    </motion.div>

                    {/* Role Text */}
                    {/* <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="absolute bottom-[15%] md:bottom-[10%] text-center z-30"
                    >
                        <p className="text-xl md:text-2xl font-mono uppercase tracking-widest text-zinc-300 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                            Creative Digitals
                        </p>
                    </motion.div> */}
                </div>

                {/* Bottom Corners */}
                <div className="flex justify-between items-end pb-8">
                    <div className="hidden md:flex flex-col gap-2">
                        <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">Current Status</span>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span className="font-bold">Accepting Projects</span>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="flex items-center gap-2 text-zinc-500"
                    >
                        <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
                        <ArrowDown size={16} className="animate-bounce" />
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
