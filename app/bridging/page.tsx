"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRightLeft } from "lucide-react";

export default function BridgingPage() {
    const [amount, setAmount] = useState("0.00");

    return (
        <div className="p-8 flex items-center justify-center min-h-[calc(100vh-140px)]">
            <div className="w-full max-w-2xl bg-[#111] rounded-3xl border border-white/5 p-12 space-y-8">
                <div className="grid grid-cols-[1fr,auto,1fr] gap-4 items-end">
                    <div className="space-y-3">
                        <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">From</p>
                        <div className="flex items-center gap-3 bg-black border border-white/5 rounded-2xl px-6 py-4">
                            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                <span className="text-[10px] text-white">S</span>
                            </div>
                            <span className="text-white font-mono text-sm uppercase">SUI Chain</span>
                        </div>
                    </div>

                    <div className="pb-2">
                        <button className="w-12 h-12 bg-[#ff0066] rounded-xl flex items-center justify-center text-white hover:scale-105 transition-transform shadow-lg shadow-[#ff0066]/20">
                            <ArrowRightLeft className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="space-y-3">
                        <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">To</p>
                        <div className="flex items-center gap-3 bg-black border border-white/5 rounded-2xl px-6 py-4">
                            <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
                                <span className="text-[10px] text-white">E</span>
                            </div>
                            <span className="text-white font-mono text-sm uppercase">ETH Chain</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="flex justify-between items-center text-xs font-mono uppercase tracking-widest">
                        <span className="text-gray-500">You send</span>
                    </div>
                    <div className="relative group">
                        <div className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-2">
                            <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center ring-1 ring-blue-500/30">
                                <span className="text-[10px] text-blue-400 font-black">S</span>
                            </div>
                            <span className="text-white font-black">$SUIAI</span>
                        </div>
                        <input
                            type="text"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full bg-black border border-white/5 rounded-2xl pl-32 pr-28 py-6 text-white font-mono text-xl text-right focus:outline-none focus:border-[#ff0066]/50 transition-colors"
                        />
                        <button className="absolute right-6 top-1/2 -translate-y-1/2 bg-[#ff0066] hover:bg-[#d40055] text-white px-4 py-2 rounded-lg font-black text-xs uppercase transition-colors">
                            Max
                        </button>
                    </div>
                </div>

                <div className="space-y-4 pt-2">
                    <div className="flex justify-between items-center text-xs font-mono uppercase tracking-widest">
                        <span className="text-gray-500">You receive</span>
                    </div>
                    <div className="relative">
                        <div className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-2">
                            <div className="w-6 h-6 bg-gray-500/20 rounded-full flex items-center justify-center ring-1 ring-gray-500/30">
                                <span className="text-[10px] text-gray-400 font-black">E</span>
                            </div>
                            <span className="text-white font-black font-mono">$SUIAI</span>
                        </div>
                        <input
                            type="text"
                            value={amount}
                            readOnly
                            className="w-full bg-black border border-white/5 rounded-2xl pl-32 pr-8 py-6 text-white font-mono text-xl text-right focus:outline-none"
                        />
                    </div>
                </div>

                <button className="w-full bg-[#ff0066] hover:bg-[#d40055] text-white py-6 rounded-2xl font-black text-xl shadow-xl shadow-[#ff0066]/20 transition-all active:scale-[0.98] mt-4 uppercase">
                    Bridge
                </button>
            </div>
        </div>
    );
}
