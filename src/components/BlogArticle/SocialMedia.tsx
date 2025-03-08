import { FC } from "react";

const SocialMedia: FC<Props> = ({ Icon, text }) => {
    return (
        <div className="p-[0.2rem] flex flex-col mt-[1rem] gap-[0.75rem] w-fit">
            <div className="flex justify-center items-center">
                <img src={Icon} className="cursor-icon w-[1rem] h-[1rem]" />
            </div>
            <p className="text-white font-extralight text-[0.75rem]">{text}</p>
        </div>
    );
};

export default SocialMedia;

// TYPES
interface Props {
    Icon: string;
    text: string;
}
