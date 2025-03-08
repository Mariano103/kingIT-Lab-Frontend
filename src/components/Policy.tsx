/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";

import RichTextRenderer from "./RichTextRender";

const Policy: FC<Props> = ({ className = "", header = "", policy }) => {

    return (
        <div
            className={`${className}`}
        >
            {/* Center Text */}
            <div className="mt-[2rem] mb-[2.5rem]">
                <div className="w-fit xl:text-left lg:text-left md:text-left text-left xl:text-[4rem] lg:text-[4rem] md:text-[3rem] text-[2rem] bg-gradient-to-r from-[#ffffff80] via-[#FFFFFF] to-[#ffffff80] bg-clip-text text-transparent xl:mb-[1rem] lg:mb-[1rem] font-bold">
                    {header}
                </div>
                <p className="text-white">{`Effective Date : ${new Date(policy.date).toDateString()}`}</p>
            </div>

            {/* FAQ Questions and Answers */}
            <div className="w-full text-white ml-0 sm:ml-0">
                {
                    policy.content.map((content, index) =>
                        <div className="w-full mt-4">
                            <p className="text-white font-bold w-full">{(index + 1) + '. ' + content.subtitle}</p>
                            <div className="w-full text-white">
                                <RichTextRenderer content={content.content} />
                            </div>
                        </div>
                    )
                }
                <div className="w-full mt-4 text-white mb-12">
                    <p>EDIMILTD</p>
                    <p>9a Wick Road Business Park, Wick Road, Burnham-On-Crouch, Essex, United Kingdom, CM0 8LT</p>
                    <p>info@kingitsolutions.net</p>
                </div>
            </div>
        </div>
    );
};

export default Policy;

// TYPES
type TPolicyData = {
    content: Array<{
        subtitle: string;
        content: any;
    }>;
    date: Date;
};
interface Props {
    className?: string;
    header: string;
    policy: TPolicyData
}
