import { FC } from "react";

// IMAGES
import DoubleRightArrow from "../../assets/images/double_right_arrow.png";

const HowWeDoSection: FC<Props> = ({ heading, cardData }) => {
    return (
        <div className="mb-[3.5rem]">
            <p className="bg-gradient-to-r from-[#ffffff00] via-[#FFFFFF] to-[#ffffff00] bg-clip-text text-transparent text-[2.5rem] font-extralight text-center mb-[2rem]">{heading}</p>
            <div className="bg-[#202020] text-white relative p-6 rounded-lg shadow-md border border-[#4F4F4F]">
                <div className="w-full grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-1">
                    {cardData.map(({ id, title, description, logo }) => {
                        return (
                            <div className="w-full flex xl:flex-row lg:flex-row md:flex-col flex-col" key={id}>
                                <div className="w-full h-auto p-[1rem]">
                                    <div className="mb-[1rem] flex justify-start items-start gap-[0.5rem]">
                                        <img src={logo} />
                                        <span className="text-[1.3rem] font-bold">{title}</span>
                                    </div>
                                    <p className="text-[#F0F0F0] text-[1.125] font-extralight line-clamp-5">{description}</p>
                                </div>
                                <div
                                    className={`place-content-center place-items-center ${cardData[cardData.length - 1].id === id ? "hidden" : "block"
                                        } flex justify-center items-center xl:rotate-0 lg:rotate-0 md:rotate-90 rotate-90 w-fit self-center`}
                                >
                                    <img src={DoubleRightArrow} className="w-[2rem] h-[2rem]" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default HowWeDoSection;

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
