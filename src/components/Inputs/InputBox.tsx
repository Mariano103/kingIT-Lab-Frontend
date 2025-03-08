import { FC, InputHTMLAttributes } from "react";

const TextBox: FC<Props> = ({ title, className = "", ...props }) => {
    return (
        <div className={`${className} flex flex-col`}>
            {title && <label className="text-[#4AB4FF] text-base font-extralight">{title}</label>}
            <input {...props} className="mt-[0.75rem] w-full p-3 border border-[#393939] bg-[#1A1A1A] text-white placeholder-gray-500 rounded-md" />
        </div>
    );
};

export default TextBox;

// TYPES
interface Props extends InputHTMLAttributes<HTMLInputElement> {
    title?: string;
}
