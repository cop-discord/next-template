import { ReactNode } from 'react';

export const Feature = ( { name, description, icon }: { name: string, description: string, icon: ReactNode }) => {
    return (
        <div className="flex flex-col rounded-lg bg-[#171212] border-solid border border-red-200 border-opacity-10 p-5 px-4 bg-opacity-50 cursor-pointer hover:scale-105 transition-transform duration-500 sm:px-10">
            {icon}
            <h2 className="font-bold text-xl">{name}</h2>
            <p className="text-red-400 max-w-72">{description}</p>
        </div>
    )
}