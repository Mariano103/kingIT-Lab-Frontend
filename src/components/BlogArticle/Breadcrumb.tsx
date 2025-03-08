import { FC } from "react";

const Breadcrumb: FC<Props> = ({ text1, text2 }) => {
    return (
        <p className="text-white mb-[4rem] mt-[4rem] xl:block lg:block md:block hidden">
            <span className="text-[1.125rem] font-extralight">{text1} &gt; </span>
            <span className="text-[1.125rem] font-medium">{text2}</span>
        </p>
    );
};

export default Breadcrumb;

// TYPES
interface Props {
    text1: string;
    text2: string;
}
