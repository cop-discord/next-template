import { useState } from "react"
import { BsArrowDownSquareFill, BsArrowUpSquareFill } from "react-icons/bs"

export const Accordion = ( { question, answer }: { question: string, answer: string }) => {
    const [open, setOpen] = useState(false)

    return (
        <div className="py-2">
            <div className="flex flex-col justify-between w-72 pb-2 cursor-pointer border-solid border-b border-red-200 border-opacity-10 sm:w-96" onClick={() => setOpen(!open)}>
                <div className="flex flex-row justify-between items-center gap-3">
                    <span className="font-bold text-xl">{question}</span>
                    {open ? <span>▲</span> : <span>▼</span>}
                </div>
                <div className={`transition-all duration-500 ease-in-out ${open ? 'opacity-100' : 'opacity-0'}`}>
                    {open && <p className="text-red-400">{answer}</p>}
                </div>
            </div>
        </div>
    )
}