export default function Footer() {
    return (
        <footer className="py-12 border-t border-[rgba(255,255,255,0.05)] bg-black text-center">
            <div className="container mx-auto px-6">
                <h2 className="text-2xl font-bold tracking-tighter mb-6">WAVE CLOTHING</h2>
                <div className="flex justify-center gap-6 mb-8 text-sm text-gray-400">
                    <a href="#" className="hover:text-white transition-colors">Instagram</a>
                    <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    <a href="#" className="hover:text-white transition-colors">Facebook</a>
                </div>
                <p className="text-gray-600 text-xs">
                    © {new Date().getFullYear()} Wave Clothing. All rights reserved. <br />
                    Premium Streetwear & Custom Prints.
                </p>
            </div>
        </footer>
    );
}
