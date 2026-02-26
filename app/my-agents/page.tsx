"use client";

import Image from "next/image";

export default function MyAgentsPage() {
    return (
        <div className="p-8">
            {/* Banner */}
            <div className="relative w-full h-[240px] rounded-3xl overflow-hidden mb-12 border border-white/10 group">
                <Image
                    src="/ad.png"
                    alt="Stake to get airdrop"
                    fill
                    className="object-cover brightness-75 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-center px-12">
                    <h2 className="text-white text-4xl font-black mb-2 tracking-tight">
                        Stake to get airdrop of agents!
                    </h2>
                    <p className="text-gray-300 text-lg">
                        Stake your way to unlock powerful agents and benefits
                    </p>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center py-32 text-center">
                <p className="text-gray-500 text-lg font-mono">
                    No agents found for this wallet.
                </p>
            </div>
        </div>
    );
}
