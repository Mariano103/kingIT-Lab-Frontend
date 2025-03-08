import { FC, SelectHTMLAttributes } from "react";

const Dropdown: FC<Props> = ({ title, optionList, className = "", ...prop }) => {
    return (
        <div className={`${className} flex flex-col`}>
            {title && <label className="text-[#4AB4FF] text-base font-extralight">{title}</label>}
            <select {...prop} className="text-[#A5A5A5] mt-[0.75rem] w-full p-3 border border-[#393939] bg-[#1A1A1A] placeholder-gray-500 rounded-md">
                <option value="">Choose an option here</option>
                {optionList.map((item, index) => {
                    return (
                        <option key={index} value={item.value}>
                            {item.title}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default Dropdown;

// TYPES
interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
    title?: string;
    optionList: Array<{ title: string; value: string }>;
}
