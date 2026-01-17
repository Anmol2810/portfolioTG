"use client";

import { motion } from "framer-motion";

export function GeometricShape() {
    return (
        <div className="relative w-64 h-64 md:w-96 md:h-96 [perspective:1000px]">
            <motion.div
                animate={{ rotateX: 360, rotateY: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-full h-full relative [transform-style:preserve-3d]"
            >
                {/* Cube Faces */}
                <div className="absolute inset-0 border-2 border-white/20 bg-white/5 backdrop-blur-sm [transform:translateZ(100px)]" />
                <div className="absolute inset-0 border-2 border-white/20 bg-white/5 backdrop-blur-sm [transform:translateZ(-100px)]" />
                <div className="absolute inset-0 border-2 border-white/20 bg-white/5 backdrop-blur-sm [transform:rotateY(90deg)translateZ(100px)]" />
                <div className="absolute inset-0 border-2 border-white/20 bg-white/5 backdrop-blur-sm [transform:rotateY(-90deg)translateZ(100px)]" />
                <div className="absolute inset-0 border-2 border-white/20 bg-white/5 backdrop-blur-sm [transform:rotateX(90deg)translateZ(100px)]" />
                <div className="absolute inset-0 border-2 border-white/20 bg-white/5 backdrop-blur-sm [transform:rotateX(-90deg)translateZ(100px)]" />

                {/* Inner Core */}
                <div className="absolute inset-[30%] bg-blue-500/20 blur-xl rounded-full [transform:translateZ(0)] animate-pulse" />
            </motion.div>
        </div>
    );
}
