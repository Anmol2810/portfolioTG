"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

function Card3D({ children }: { children: React.ReactNode }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [10, -10]);
    const rotateY = useTransform(x, [-100, 100], [-10, 10]);

    return (
        <div style={{ perspective: 1000 }}>
            <motion.div
                style={{ x, y, rotateX, rotateY, z: 100 }}
                onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    x.set(e.clientX - rect.left - rect.width / 2);
                    y.set(e.clientY - rect.top - rect.height / 2);
                }}
                onMouseLeave={() => {
                    x.set(0);
                    y.set(0);
                }}
                className="w-full h-full cursor-grab active:cursor-grabbing"
            >
                {children}
            </motion.div>
        </div>
    );
}

export function About() {
    return (
        <section id="about" className="py-32 px-4 relative overflow-hidden">
            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-2 lg:order-1"
                    >
                        <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
                            Obsessed with <br />
                            <span className="text-zinc-500">details.</span>
                        </h2>

                        <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                            I'm a multidisciplinary developer who bridges the gap between design and engineering.
                            I don't just write code; I craft digital experiences that feel alive.
                        </p>

                        <div className="grid grid-cols-2 gap-8 mb-12">
                            <div>
                                <h4 className="text-4xl font-bold mb-2">5+</h4>
                                <p className="text-zinc-500 text-sm uppercase tracking-widest">Years Experience</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-bold mb-2">50+</h4>
                                <p className="text-zinc-500 text-sm uppercase tracking-widest">Projects Shipped</p>
                            </div>
                        </div>

                        <MagneticButton>
                            <button className="flex items-center gap-2 text-lg font-medium border-b border-white pb-1 hover:text-zinc-300 transition-colors">
                                Read my story <ArrowUpRight size={18} />
                            </button>
                        </MagneticButton>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2 h-[500px] w-full"
                    >
                        <Card3D>
                            <div className="w-full h-full rounded-3xl bg-gradient-to-br from-zinc-800 to-black border border-white/10 p-8 flex flex-col justify-between shadow-2xl">
                                <div className="flex justify-between items-start">
                                    <div className="w-16 h-16 rounded-full bg-white/10 animate-pulse" />
                                    <div className="px-4 py-2 rounded-full border border-white/10 text-xs uppercase tracking-widest">
                                        Available for work
                                    </div>
                                </div>
                                <div>
                                    <div className="h-4 w-3/4 bg-white/10 rounded-full mb-4" />
                                    <div className="h-4 w-1/2 bg-white/10 rounded-full" />
                                </div>
                            </div>
                        </Card3D>
                    </motion.div>

                </div>
            </div>

            {/* Background Decorative */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-zinc-800/20 blur-[128px] rounded-full -z-10" />
        </section>
    );
}
