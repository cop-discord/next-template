import Link from "next/link";
import { FaDiscord } from "react-icons/fa";

export const Navbar = ({ title, link }: { title: string, link: string }) => {
    return (
        <div className="flex flex-row justify-between gap-6 z-50 pt-10 px-5 md:px-40 sm:px-20">
            <Link href="/" className="font-extrabold text-2xl">{title}</Link>
            <Link href={link} className="flex flex-row gap-3 justify-center items-center bg-red-600 rounded-md p-2 px-6 hover:bg-red-300">
                <FaDiscord className="text-black" width={85} height={85} />
                <span className="text-black font-extrabold">Add to your server</span>
            </Link>
        </div>
    )
}