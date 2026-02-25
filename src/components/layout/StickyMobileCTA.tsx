"use client";

import Link from "next/link";
import { Calculator } from "lucide-react";
import { useEffect, useState } from "react";

export function StickyMobileCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        toggleVisibility(); // Check initial state
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[100] md:hidden bg-white border-t border-slate-100 p-3 shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.05)] animate-in slide-in-from-bottom duration-300">
            <Link
                href="/devis"
                className="flex items-center justify-center gap-2 w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-cyan-600/20 active:scale-[0.98] transition-all"
            >
                <Calculator className="w-5 h-5 flex-shrink-0" />
                <span className="truncate">Obtenir mes 3 Devis Gratuits</span>
            </Link>
        </div>
    );
}
