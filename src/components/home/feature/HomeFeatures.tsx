import { MdOutlineQueueMusic, MdSecurity } from "react-icons/md";
import { Feature } from "./Feature";
import { CiSettings } from "react-icons/ci";

export const HomeFeatures = () => {
    return (
      <div className="flex flex-col items-center justify-center z-20 pb-5">
        <h1 className="font-bold text-4xl text-center">Features</h1>
        <span className="text-red-400 text-center">Features description.</span>
        <div className="grid grid-cols-1 gap-6 items-center justify-center pt-10 md:grid-cols-2">
            <Feature name="Item 1" description="Item 1 Description" icon={<CiSettings size={42} />} />
            <Feature name="Item 2" description="Item 2 Description" icon={<CiSettings size={42} />} />
            <Feature name="Item 3" description="Item 3 Description" icon={<CiSettings size={42} />} />
            <Feature name="Item 4" description="Item 4 Description" icon={<CiSettings size={42} />} />
        </div>
      </div>
    );
  }