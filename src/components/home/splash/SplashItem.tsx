import { ReactNode } from 'react';

export const SplashItem = ( { name, link, icon }: { name: string, link: string, icon: ReactNode }) => {
    return (
        <a href={link} className="flex flex-row gap-2 items-center justify-center rounded-lg py-2 px-20 bg-[#171212] bg-opacity-70 border-solid border border-red-200 border-opacity-10 text-red-600 hover:bg-opacity-10 sm:px-6 hover:scale-105 transition-transform duration-500">
            {icon}
            {name}
        </a>
    )
}