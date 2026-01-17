"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { MenuOverlay } from "@/components/overlay/MenuOverlay";

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 text-white",
                    scrolled ? "py-4 bg-black/10 backdrop-blur-md" : "py-8 mix-blend-difference"
                )}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <Link href="/" className="text-xl font-bold tracking-tighter uppercase relative group overflow-hidden">
                        <span className="block group-hover:-translate-y-full transition-transform duration-500 ease-[0.76,0,0.24,1]">
                            The Generalists
                        </span>
                        <span className="absolute top-0 left-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76,0,0.24,1]">
                            Creative लोग
                        </span>
                    </Link>

                    <button
                        onClick={() => setIsOpen(true)}
                        className="flex items-center gap-2 group cursor-pointer"
                    >
                        <span className="hidden md:block font-mono text-sm uppercase tracking-widest group-hover:opacity-75 transition-opacity">
                            Menu
                        </span>
                        <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Menu size={16} />
                        </div>
                    </button>
                </div>
            </nav>

            <MenuOverlay isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
}
