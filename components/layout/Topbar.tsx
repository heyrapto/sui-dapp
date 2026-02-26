"use client";

import Image from "next/image";
import Link from "next/link";

export default function Topbar() {
    return (
        <header className="fixed top-0 left-0 right-0 h-[70px] bg-[#000] border-b border-white/5 z-50 px-6 flex items-center justify-between">
            <div className="flex items-center gap-8">
                <Link href="/" className="flex items-center">
                    <h1 className="text-white font-bold text-2xl tracking-tighter flex items-center gap-1 group">
                        SUI <span className="text-[#ff0066]">AGENTS</span>
                    </h1>
                </Link>

                <button className="bg-[#ff0066] hover:bg-[#d40055] text-white px-5 py-2 rounded-lg font-bold text-sm transition-colors flex items-center gap-2">
                    Buy $SUIAI
                </button>
            </div>

            <div className="flex items-center gap-3">
                <div className="flex items-center bg-[#111] border border-white/10 rounded-xl px-4 py-2 gap-4">
                    <div className="flex items-center gap-2 border-r border-white/10 pr-4">
                        <span className="text-white font-bold text-sm">0 SUI</span>
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <span className="text-gray-400 text-xs font-mono">0x1d09b...1134</span>
                        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>

                <div className="flex items-center bg-[#111] border border-white/10 rounded-xl px-4 py-2 gap-4">
                    <div className="flex items-center gap-2 border-r border-white/10 pr-4">
                        <span className="text-white font-bold text-sm">0 ETH</span>
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <div className="w-5 h-5 bg-[#ff4a4a] rounded-full flex items-center justify-center">
                            <span className="text-[8px] text-white">S</span>
                        </div>
                        <span className="text-gray-400 text-xs font-mono">0x18...0eDb</span>
                        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </div>
        </header>
    );
}
