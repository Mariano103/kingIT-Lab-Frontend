import { FC, TextareaHTMLAttributes } from "react";

const TextArea: FC<Props> = ({ title, className = "", ...rest }) => {
    return (
        <div className={`${className} flex flex-col`}>
            {title && <label className="text-[#4AB4FF] text-base font-extralight">{title}</label>}
            <textarea
                {...rest}
                className="mt-[0.75rem] w-full p-3 border border-[#393939] bg-[#1A1A1A] text-white placeholder-gray-500 rounded-md"
            ></textarea>
        </div>
    );
};

export default TextArea;

// TYPES
interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    title?: string;
}
