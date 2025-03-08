import { FC } from "react";

const PortfolioProjectCard: FC<Props> = ({
    text1 = "",
    text2 = "",
    text3 = "",
    image,
    tagList = [],
    buttonText = "Button",
    parentClassName = "",
    imageClassName = "",
    contentClassName = "",
    imageContainerClassName = "",
    className = "",
    backgroundColor = "",
    onClick = () => { },
}) => {
    return (
        <div
            className={`${parentClassName} rounded-xl shadow-md p-[1px] flex justify-center items-center w-full max-h-auto`}
            style={{ backgroundColor }}
        >
            <div className={`xl:gap-10 relative p-[2rem] rounded-xl flex flex-col w-full h-full ${className}`}>
                <div className={`${imageContainerClassName} xl:h-[17.6rem] lg:h-[12rem] md:h-[17.6rem] h-[11rem] flex justify-center items-center`}>
                    <img src={image} className={`${imageClassName} absolute`} />
                </div>
                <div className={`${contentClassName} xl:h-[20rem] lg:h-[20rem] md:h-[26.4rem] h-auto flex flex-col justify-between`}>
                    <div className="flex flex-col gap-[0.75rem]">
                        <p className="text-[1.5rem] text-white font-normal">{text1}</p>
                        <div className="flex flex-wrap items-center gap-4">
                            {tagList.map((tag, index) => {
                                return (
                                    <p key={index} className="w-fit text-[1rem] py-[0.2rem] px-[0.75rem] bg-[#47474759] text-white font-light rounded-lg">
                                        {tag}
                                    </p>
                                );
                            })}
                        </div>
                        <p className="w-full text-white text-[2rem]">{text2}</p>
                        <p className="text-white text-sm font-light w-full">{text3}</p>
                    </div>
                    <div className="mt-4">
                        <button onClick={onClick} className="px-[1rem] py-[0.6rem] text-white border-2 rounded-xl">
                            {buttonText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioProjectCard;

// TYPES
interface Props {
    text1: string;
    text2: string;
    text3: string;
    image: string;
    buttonText: string;
    className?: string;
    tagList: Array<string>;
    parentClassName?: string;
    imageClassName?: string;
    contentClassName?: string;
    imageContainerClassName?: string;
    backgroundColor?: string;
    onClick?: () => void;
}
