"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Message sent!");
    };

    return (
        <div className="min-h-screen pt-24 pb-20 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 uppercase">
                        Let's <span className="text-gradient">Talk</span>
                    </h1>
                    <p className="text-lg text-gray-400 mb-10">
                        Got a custom order? Want to collaborate? Or just want to say hi?
                        Drop us a line and we'll get back to you faster than a Naruto run.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--secondary)]">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Email Us</h3>
                                <p className="text-gray-400">hello@waveclothing.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--primary)]">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Call / WhatsApp</h3>
                                <p className="text-gray-400">+91 98765 43210</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--accent)]">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">HQ</h3>
                                <p className="text-gray-400">Mumbai, India</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="glass-panel p-8 md:p-10 rounded-2xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Name</label>
                            <input
                                type="text"
                                className="w-full bg-black/40 border border-[var(--card-border)] rounded-lg p-4 focus:border-[var(--secondary)] focus:outline-none transition-colors"
                                placeholder="Your Name"
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Email</label>
                            <input
                                type="email"
                                className="w-full bg-black/40 border border-[var(--card-border)] rounded-lg p-4 focus:border-[var(--secondary)] focus:outline-none transition-colors"
                                placeholder="you@example.com"
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Message</label>
                            <textarea
                                className="w-full bg-black/40 border border-[var(--card-border)] rounded-lg p-4 focus:border-[var(--secondary)] focus:outline-none transition-colors h-32"
                                placeholder="Tell us what's on your mind..."
                                value={form.message}
                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-4 bg-[var(--white)] text-black font-black uppercase tracking-widest hover:bg-[var(--secondary)] transition-colors rounded flex items-center justify-center gap-2"
                        >
                            <Send size={18} /> Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
