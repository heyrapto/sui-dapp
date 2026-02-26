import Image from "next/image";
import Link from "next/link";
import { Twitter, Send, HelpCircle } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full bg-[#000] border-t border-white/5 py-4 px-8 mt-auto">
            <div className="flex items-center justify-between gap-8">
                <div className="flex items-center gap-8 text-sm font-medium">
                    <Link href="https://www.suiagents.ai" className="text-[#ff0066] hover:underline flex items-center gap-1">
                        <span className="w-2 h-2 bg-[#ff0066] rounded-full animate-pulse" />
                        www.suiagents.ai
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">Partners</Link>
                    <Link href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                        <Image src="/sui-agents-logo.png" alt="Ape Terminal" width={16} height={16} className="opacity-50 group-hover:opacity-100" />
                        Ape Terminal
                    </Link>
                </div>

                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-4">
                        <span className="text-gray-500 text-xs">Follow us on socials:</span>
                        <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Twitter className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Send className="w-5 h-5" />
                        </Link>
                    </div>
                    <Link href="#" className="flex items-center gap-2 text-gray-400 hover:text-white text-xs transition-colors">
                        How it works?
                    </Link>
                </div>
            </div>
        </footer>
    );
}
