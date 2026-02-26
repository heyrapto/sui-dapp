"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import StakingCard from "@/components/ui/StakingCard";

const STAKING_OPTIONS = [
    { id: "30D-1", duration: 30, apr: 1, rewardValue: "$200", agentAmount: 1, image: "/agents/cosmo.png" },
    { id: "30D-4", duration: 30, apr: 4, rewardValue: "$800", agentAmount: 4, image: "/agents/trump.png" },
    { id: "60D-10", duration: 60, apr: 10, rewardValue: "$2000", agentAmount: 10, image: "/agents/monkey.png" },
];

export default function StakingPage() {
    const router = useRouter();

    return (
        <div className="p-8 pb-32">
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

            <div className="space-y-6">
                <div className="space-y-2">
                    <h1 className="text-white text-3xl font-black">Stake $SUI</h1>
                    <p className="text-gray-400 text-sm max-w-2xl leading-relaxed">
                        Choose between three options of staking, the longer you stake more agents you get!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {STAKING_OPTIONS.map((option) => (
                        <StakingCard
                            key={option.id}
                            {...option}
                            onClick={() => router.push(`/staking/${option.id.toLowerCase()}`)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
