"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-[var(--primary)] rounded-full blur-[150px] opacity-20 animate-pulse"></div>
                <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-[var(--secondary)] rounded-full blur-[150px] opacity-20 animate-pulse" style={{ animationDelay: "2s" }}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block px-4 py-2 rounded-full border border-[var(--secondary)] text-[var(--secondary)] text-xs font-bold tracking-widest mb-6 uppercase bg-[rgba(0,243,255,0.05)]">
                        New Collection 2025
                    </span>
                    <h1 className="text-4xl md:text-8xl font-black tracking-tight mb-6 leading-[1.1]">
                        WEAR THE <br />
                        <span className="text-gradient">REVOLUTION</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Premium oversized tees, anime edits, and custom prints designed for the bold.
                        Elevate your streetwear game today.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <a href="#collections" className="px-8 py-4 bg-[var(--foreground)] text-[var(--background)] font-bold text-sm tracking-widest uppercase rounded hover:scale-105 transition-transform">
                            Shop Collections
                        </a>
                        <a href="#custom" className="px-8 py-4 border border-[var(--card-border)] bg-[var(--card-bg)] text-white font-bold text-sm tracking-widest uppercase rounded backdrop-blur-md hover:bg-[rgba(255,255,255,0.05)] transition-colors">
                            Create Your Own
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
