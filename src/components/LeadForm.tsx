"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function LeadForm() {
    const [formData, setFormData] = useState({
        name: "",
        contact: "",
        category: "General",
        details: "",
        group: "Individual"
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, this would send to an API
        console.log("Lead Data:", formData);
        alert(`Thank you, ${formData.name}! Your request has been sent to our team. We will contact you at ${formData.contact} shortly.`);
        setFormData({ name: "", contact: "", category: "General", details: "", group: "Individual" });
    };

    return (
        <section id="custom" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[var(--card-bg)] opacity-50"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto glass-panel p-8 md:p-12">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Order</h2>
                        <p className="text-gray-400">
                            Select your interests and tell us what you need. Whether it's for a farewell,
                            sports team, or personal style, we've got you covered.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Full Name</label>
                                <input
                                    required
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-black/40 border border-[var(--card-border)] rounded-lg p-3 text-white focus:border-[var(--secondary)] focus:outline-none transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Email or WhatsApp</label>
                                <input
                                    required
                                    type="text"
                                    value={formData.contact}
                                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                                    className="w-full bg-black/40 border border-[var(--card-border)] rounded-lg p-3 text-white focus:border-[var(--secondary)] focus:outline-none transition-colors"
                                    placeholder="+91 9876543210"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Customer Group</label>
                                <select
                                    value={formData.group}
                                    onChange={(e) => setFormData({ ...formData, group: e.target.value })}
                                    className="w-full bg-black/40 border border-[var(--card-border)] rounded-lg p-3 text-white focus:border-[var(--secondary)] focus:outline-none transition-colors"
                                >
                                    <option>Individual</option>
                                    <option>College Farewell</option>
                                    <option>Sports Team</option>
                                    <option>Company/Startup</option>
                                    <option>Restaurant Staff</option>
                                    <option>Birthday Squad</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Interested Category</label>
                                <select
                                    value={formData.category}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                    className="w-full bg-black/40 border border-[var(--card-border)] rounded-lg p-3 text-white focus:border-[var(--secondary)] focus:outline-none transition-colors"
                                >
                                    <option>General / Custom</option>
                                    <option>Anime</option>
                                    <option>Bollywood</option>
                                    <option>Memes</option>
                                    <option>Bulk Order</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Design Details / Requirements</label>
                            <textarea
                                rows={4}
                                value={formData.details}
                                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                                className="w-full bg-black/40 border border-[var(--card-border)] rounded-lg p-3 text-white focus:border-[var(--secondary)] focus:outline-none transition-colors"
                                placeholder="Describe your design idea, quantity, sizes, etc."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full md:w-auto px-8 py-4 bg-white text-black font-bold uppercase tracking-widest rounded hover:bg-[var(--secondary)] transition-colors flex items-center justify-center gap-2"
                        >
                            <Send size={18} /> Send Request
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
