import Link from "next/link";
import Image from "next/image";
import "@/styles/globals.css";

export const Footer = ({ title, invite, documentation, support }: { title: string, invite: string, documentation: string, support: string }) => {
    return (
        <footer className="flex flex-row justify-between items-center bg-[#171212] bg-opacity-80 border-solid border-t border-red-200 border-opacity-10 p-10 mt-20 footer">
            <div className="flex flex-col">
                <Image src="/yes.png" alt="Template" height={150} width={150} className="" />
                <p className="text-red-500 text-sm mt-4">Copyright © 2024 Template. All rights reserved.</p>
            </div>
            <div className="flex flex-col gap-6 sm:flex-row">
                <div className="flex flex-col">
                    <span className="font-extrabold text-2xl text-red-600">Bot</span>
                    <Link href={invite} className="font-semibold text-red-400 text-sm mt-2">Invite</Link>
                    <Link href={documentation} className="font-semibold text-red-400 text-sm mt-2">Documentation</Link>
                    <Link href={support} className="font-semibold text-red-400 text-sm mt-2">Support Server</Link>
                </div>
                <div className="flex flex-col">
                    <span className="font-extrabold text-2xl text-red-600">Legal</span>
                    <Link href="/terms" className="font-semibold text-red-400 text-sm mt-2">Terms</Link>
                    <Link href="/privacy" className="font-semibold text-red-400 text-sm mt-2">Privacy</Link>
                </div>
            </div>
        </footer>
    )
}