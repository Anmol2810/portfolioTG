"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

interface MenuOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

const menuVariants = {
    closed: {
        opacity: 0,
        y: "-100%",
        transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] as any }
    },
    open: {
        opacity: 1,
        y: "0%",
        transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] as any }
    }
};

const linkVariants = {
    closed: { y: 100, opacity: 0 },
    open: (i: number) => ({
        y: 0,
        opacity: 1,
        transition: { delay: 0.1 * i, duration: 0.8, ease: [0.76, 0, 0.24, 1] as any }
    })
};

const links = [
    { title: "Home", href: "/" },
    { title: "Who We Are", href: "/#aboutbento" },
    { title: "Our Work", href: "/projects" },
    { title: "Contact", href: "#contact" }
];

export function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    variants={menuVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="fixed inset-0 z-[60] bg-zinc-950 text-white h-[100dvh] w-full flex flex-col justify-center items-center"
                >
                    {/* Header */}
                    <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-10">
                        <span className="text-xl font-bold tracking-tighter uppercase text-zinc-500">
                            Navigate
                        </span>
                        <button onClick={onClose} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                            <X size={24} />
                        </button>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col gap-4 text-center">
                        {links.map((link, i) => (
                            <div key={i} className="overflow-hidden">
                                <motion.div
                                    custom={i}
                                    variants={linkVariants}
                                    initial="closed"
                                    animate="open"
                                    exit="closed"
                                >
                                    <Link
                                        href={link.href}
                                        onClick={onClose}
                                        className="text-5xl md:text-8xl font-bold uppercase tracking-tighter hover:text-blue-600 transition-colors block p-2"
                                    >
                                        {link.title}
                                    </Link>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
