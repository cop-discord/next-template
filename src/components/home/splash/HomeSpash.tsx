import Link from "next/link";
import { FaQuestionCircle } from "react-icons/fa";
import { RiSlashCommands2 } from "react-icons/ri";
import { SlDocs } from "react-icons/sl";
import { ImEmbed2 } from "react-icons/im";
import { HiOutlineArrowSmDown } from "react-icons/hi";
import { SplashItem } from "./SplashItem";
import { IoIosArrowDropdownCircle } from "react-icons/io";

export const HomeSplash = ({ title, description, link }: { title: string, description: string, link: string }) => {
    const handleScrollDown = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
        });
    };
    return (
    <main className="h-screen flex items-center justify-center">
        <div className="flex flex-col items-center justify-center z-20 pt-20 -mt-64">
            <div className="flex flex-col items-center justify-center z-50">
                <h1 className="text-8xl font-extrabold inline-block text-transparent bg-gradient-to-r from-red-600 via-red-500 to-red-600 bg-clip-text">{title}</h1>
                <span className="text-lg font-medium text-red-400">{description}</span>
                <div className="grid grid-cols-1 gap-6 items-center justify-center text-center pt-10 sm:grid-cols-3">
                    <SplashItem name="Commands" link="https://nigga.com/commands" icon={<RiSlashCommands2 />} />
                    <SplashItem name="Docs" link="https://docs.nigga.com/" icon={<SlDocs />} />
                    <SplashItem name="Embeds" link="https://embeds.nigga.com" icon={<ImEmbed2 />} />
                </div>
                <div className="motion-safe:animate-bounce w-6 h-6 pt-10 cursor-pointer" onClick={handleScrollDown}>
                  <HiOutlineArrowSmDown className="w-10 h-10 opacity-70 text-red-500" />
                </div>
            </div>
        </div>
    </main>
    );
}