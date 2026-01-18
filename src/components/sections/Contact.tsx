"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight, MapPin, Clock, ChartAreaIcon } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Contact() {
    return (
        <section id="contact" className="py-32 px-4 bg-zinc-950 relative overflow-hidden">
            <div className="container mx-auto max-w-6xl relative z-10">

                <div className="grid lg:grid-cols-2 gap-20">
                    {/* Left Column: Info */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl text-zinc-500 md:text-6xl font-bold tracking-tighter mb-12"
                        >
                            Built fast.<br />Scaled smart.<br />Zero babysitting.<br />
                            <span className="text-white text-6xl md:text-8xl">Let's Connect</span>
                        </motion.h2>

                        <div className="flex flex-col gap-8 mb-12">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-white/5 border border-white/10">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold mb-1">Location</h4>
                                    <p className="text-zinc-400">Global</p>
                                    <p className="text-zinc-500 text-sm">Remote First</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-white/5 border border-white/10">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold mb-1">Email</h4>
                                    <a href="mailto:hey.generalists@gmail.com" className="text-zinc-400 hover:text-white transition-colors">
                                        hey.generalists@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-white/5 border border-white/10">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold mb-1">Availability</h4>
                                    <p className="text-zinc-400">Open for new projects</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            {["Twitter", "LinkedIn", "Instagram", "GitHub"].map((social) => (
                                <a key={social} href="#" className="text-zinc-500 hover:text-white uppercase tracking-widest text-xs font-mono border-b border-transparent hover:border-white transition-all pb-0.5">
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Visual Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-zinc-900/30 p-8 md:p-12 rounded-3xl border border-white/5 backdrop-blur-sm"
                    >
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-3 py-12">
                            <h3 className="text-3xl md:text-5xl font-bold tracking-tighter">
                                Ready to Dream?
                            </h3>
                            <p className="text-zinc-400 text-[21px] max-w-md">
                                Bring the vision. We'll take it to the world.
                            </p>
                            <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-5">
                                <MagneticButton>
                                    <a href="mailto:hey.generalists@gmail.com" className="px-8 py-5 bg-white text-black text-lg font-bold rounded-full hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group">
                                        Start a Project <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </a>
                                </MagneticButton>
                                <MagneticButton>
                                    <a href="https://wa.me/+918826572782" target="_blank" className="px-8 py-5 bg-transparent border border-white/20 text-white text-lg font-bold rounded-full hover:bg-white/10 transition-colors flex items-center justify-center gap-2 group">
                                        WhatsApp <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </a>
                                </MagneticButton>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
            {/* Background Decorative */}
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full -z-10 translate-y-1/2 translate-x-1/2" />
        </section>
    );
}
