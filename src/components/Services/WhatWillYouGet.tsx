import { FC } from "react";

const WhatWillYouGet: FC<Props> = ({ heading = "", cardData = [] }) => {
    return (
        <div className="mt-[4rem]">
            <p className="bg-gradient-to-r from-[#ffffff00] via-[#FFFFFF] to-[#ffffff00] bg-clip-text text-transparent text-[2.5rem] font-extralight text-center mb-[2rem]">{heading}</p>
            <div className={"grid xl:grid-cols-" + (cardData.length === 4 ? '2' : '3') + " lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-[1.188rem]"}>
                {cardData.map(({ id, title, description }) => {
                    return (
                        <div key={id} className="bg-[#202020] w-full p-[1.5rem] rounded-2xl border-2 border-[#808080]">
                            <p className="text-[1.4rem] text-white font-bold mb-[1rem] line-clamp-1">{title}</p>
                            <p className="text-[#F0F0F0] text-[1rem] font-extralight line-clamp-4">{description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default WhatWillYouGet;

// TYPES
type TWhatWillYouGetItem = { id: number; title: string; description: string };
interface Props {
    heading: string;
    cardData: Array<TWhatWillYouGetItem>;
}
