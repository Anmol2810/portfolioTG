"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function GenmojiFace({ src }: { src: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["-15deg", "15deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = ref.current!.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="relative w-64 h-64 cursor-grab active:cursor-grabbing"
        >
            <div style={{ transform: "translateZ(75px)" }} className="absolute inset-0">
                <Image
                    src={src}
                    alt="Developer Genmoji"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                />
            </div>
            {/* Ambient Glow */}
            <div style={{ transform: "translateZ(-50px)" }} className="absolute inset-4 bg-purple-500/30 blur-[60px] rounded-full" />
        </motion.div>
    );
}
