"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function AgencyAbout() {
    return (
        <section id="aboutbento" className="bg-zinc-950 py-32 px-4 border-t border-white/5 relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10">

                {/* Section 1: Who We Are */}
                <div className="grid lg:grid-cols-2 gap-16 mb-40">
                    <div>
                        <span className="text-sm font-mono uppercase tracking-widest text-blue-500 mb-4 block">
                            Who We Are
                        </span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight"
                        >
                            We’re The <br />
                            Generalists.
                        </motion.h2>
                    </div>
                    <div className="space-y-8 text-xl text-zinc-200 font-light leading-relaxed">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            We work at the intersection of strategy, creativity, technology, and execution, connecting dots most teams don’t even see.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            We step in when problems are undefined, briefs are messy, and outcomes actually matter. From shaping ideas to building systems that scale, we don’t just do the work, we make it work.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="pt-4"
                        >
                            <a href="#contact" className="inline-flex items-center gap-2 text-white border-b border-white pb-1 hover:text-zinc-300 transition-colors">
                                Bring us the mess. We’ll find the method <ArrowDown className="rotate-[-45deg]" size={16} />
                            </a>
                        </motion.div>
                    </div>
                </div>

                {/* Section 2: What We're Made Of */}
                <div className="grid lg:grid-cols-2 gap-16 mb-40">
                    <div className="order-2 lg:order-1 space-y-8 text-xl text-zinc-200 font-light leading-relaxed">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Our roots in both design and engineering mean we don’t just imagine beautiful interfaces, we understand exactly how they’ll behave once they meet the browser. No handoffs. No guesswork. No “this looked better in Figma.”
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            We believe great digital experiences live at the intersection of instinct and structure. Where aesthetics are backed by systems, and creativity is supported by code. For us, beauty isn’t fragile, it’s engineered.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            Our approach is product-design driven: clear goals, scalable frameworks, and interactions that feel intentional, not ornamental. We’re obsessed with performance, and quietly nerdy about micro-interactions, the kind that make a product feel native, responsive, and alive.
                        </motion.p>

                        <motion.div className="pt-8 border-l-2 border-white/20 pl-6 my-8">
                            <p className="text-2xl text-white font-medium italic">
                                "If something feels smooth, fast, and effortless, that’s not luck. That’s design doing its job. And logic doing the heavy lifting."
                            </p>
                        </motion.div>

                    </div>
                    <div className="order-1 lg:order-2">
                        <span className="text-sm font-mono uppercase tracking-widest text-blue-500 mb-4 block">
                            Our DNA
                        </span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight"
                        >
                            Design comes <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">naturally.</span><br />
                            Logic keeps it <span className="italic font-serif text-white">honest.</span>
                        </motion.h2>
                    </div>
                </div>

                {/* Section 3: Stats */}
                <div className="border-y border-white/10 py-16 bg-white/5 relative overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50" />
                    <div className="relative z-10 p-8">
                        <span className="text-sm font-mono uppercase tracking-widest text-zinc-500 mb-12 block text-center lg:text-left">
                            The Journey
                        </span>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                            {[
                                { label: "Certifications", value: "6+", sub: "And still not done..." },
                                { label: "Projects Delivered", value: "25+", sub: "And still obsessed..." },
                                { label: "Years Experience", value: "5+", sub: "And still evolving..." },
                                { label: "Mugs of Caffeine", value: "7000+", sub: "And still counting..." },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="text-center lg:text-left"
                                >
                                    <h3 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-500 mb-2">{stat.value}</h3>
                                    <p className="text-sm font-mono uppercase tracking-widest text-blue-400 mb-1">{stat.label}</p>
                                    <p className="text-zinc-500 text-xs italic">{stat.sub}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-32 text-center">
                    <p className="text-zinc-400 mb-6 font-mono uppercase tracking-widest text-sm">Next Step</p>
                    <a href="mailto:hey.generalists@gmail.com" className="inline-block text-4xl md:text-6xl font-bold hover:text-blue-500 transition-colors border-b-2 border-white/20 hover:border-blue-500 pb-2">
                        If it matters, let’s do it properly →
                    </a>
                </div>

            </div>
        </section>
    );
}
