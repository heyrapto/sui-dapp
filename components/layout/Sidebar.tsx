"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/components/ui/utils";
import { LayoutDashboard, Users, Zap, Repeat, PlusCircle } from "lucide-react";

const navItems = [
    { name: "My Agents", href: "/my-agents", icon: LayoutDashboard },
    { name: "Agents", href: "/agents", icon: Users },
    { name: "Staking", href: "/staking", icon: Zap },
    { name: "Bridge", href: "/bridging", icon: Repeat },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="fixed left-0 top-[70px] h-[calc(100vh-70px)] w-[240px] bg-[#000] border-r border-white/5 p-4 flex flex-col gap-4">
            <nav className="flex flex-col gap-2">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group text-[#94a3b8]",
                                isActive
                                    ? "bg-[#ff0066] text-white"
                                    : "hover:bg-white/5 hover:text-white"
                            )}
                        >
                            <item.icon className={cn("w-5 h-5", isActive ? "text-white" : "group-hover:text-white")} />
                            <span className="font-medium">{item.name}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="mt-auto">
                <Link
                    href="/create-agent"
                    className="flex items-center gap-3 px-4 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white transition-all border border-white/10 group"
                >
                    <PlusCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="font-semibold">Create Agent</span>
                </Link>
            </div>
        </aside>
    );
}
