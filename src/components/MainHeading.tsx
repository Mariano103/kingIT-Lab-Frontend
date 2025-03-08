import { FC } from "react";

const MainHeading: FC<Props> = ({ className, text }) => {
    return <div className={`${className} text-center xl:text-[4rem] lg:text-[4rem] md:text-[3rem] text-[1.7rem] font-[500] bg-gradient-to-r from-[#ffffff80] via-[#FFFFFF] to-[#ffffff80] bg-clip-text text-transparent w-fit mx-auto`}>{text}</div>;
};

export default MainHeading;

// TYPES
interface Props {
    className?: string;
    text: string;
}
