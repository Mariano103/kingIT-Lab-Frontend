import { FC } from "react";

const WhySection: FC<Props> = ({ heading, cardData }) => {
    return (
        <div className="mb-[3.5rem]">
            <p className="bg-gradient-to-r from-[#ffffff00] via-[#FFFFFF] to-[#ffffff00] bg-clip-text text-transparent text-[2.5rem] font-extralight text-center mb-[2rem]">{heading}</p>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                {cardData.map(({ id, title, description, logo }) => {
                    return (
                        <div key={id} className="flex flex-col w-full gap-[1.25rem] p-[1.5rem]">
                            <div>
                                <img src={logo} />
                            </div>
                            <div className="flex flex-col items-start">
                                <p className="text-[1.75rem] font-bold text-white mb-[1rem] w-[80%]">{title}</p>
                                <p className="text-left text-[#F0F0F0] text-[1.125rem] font-extralight line-clamp-6">{description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default WhySection;

// TYPES
type TCardData = {
    id: number;
    title: string;
    description: string;
    logo: string;
};
interface Props {
    heading: string;
    cardData: Array<TCardData>;
}
