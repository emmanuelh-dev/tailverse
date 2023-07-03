import React from "react";
import { RiFileCopyLine } from "react-icons/ri";
import { toast } from "react-hot-toast";

interface GradientCardProps {
  title: string;
  classTitle: string;
  style: string;
}

const GradientCard: React.FC<GradientCardProps> = ({
  title,
  classTitle,
  style,
}) => {
  const handleCopyClick = () => {
    navigator.clipboard.writeText(style);
    toast.success("Style copied to clipboard!");
  };

  return (
    <div>
      <div className={`h-60 ${style} rounded-xl`}></div>
      <div className="pt-2 dark:text-white flex justify-between">
        <h2>{title}</h2>
        <div className="flex items-center">
          <button
            className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 focus:outline-none cursor-pointer"
            onClick={handleCopyClick}
          >
            <RiFileCopyLine size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GradientCard;
