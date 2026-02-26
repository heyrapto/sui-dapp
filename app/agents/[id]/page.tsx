"use client";

import { use } from "react";
import AgentDetail from "@/components/ui/AgentDetail";
import { useRouter } from "next/navigation";

const DUMMY_AGENTS: Record<string, any> = {
    "COSMO": { name: "COSMO", ticker: "$COSMO", image: "/agents/cosmo.png" },
    "TRUMP": { name: "TRUMP", ticker: "$TRUMP", image: "/agents/trump.png" },
    "RETAR": { name: "Retard", ticker: "$RETAR", image: "/agents/monkey.png" },
    "SANTA": { name: "Santa", ticker: "$SANTA", image: "/agents/santa.png" },
    "BM3": { name: "BMW M3", ticker: "$BM3", image: "/agents/car.png" },
};

export default function AgentDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const router = useRouter();
    const resolvedParams = use(params);
    const id = resolvedParams.id.toUpperCase();
    const agent = DUMMY_AGENTS[id] || DUMMY_AGENTS["COSMO"];

    return <AgentDetail agent={agent} onBack={() => router.push("/agents")} />;
}
