import { Accordion } from "./Accordion";

export const HomeFaq = () => {
    return (
        <div className="flex flex-col items-center justify-center pt-20 z-20 pb-10" id="faq">
            <h1 className="font-bold text-4xl text-center">Frequently Asked Questions</h1>
            <span className="text-red-400 text-center pt-2">You ask, we answer.</span>
            <div className="flex flex-col mt-8 gap-3">
                <Accordion question="FAQ 1" answer="Answer." />
                <Accordion question="FAQ 2" answer="Answer." />
                <Accordion question="FAQ 3" answer=" Answer." />
            </div>
        </div>
    );
}
