import { FC, ReactNode } from "react";

const WrapperLayout: FC<Props> = ({ className = "", children }) => {
    return <div className={`${className} xl:px-[8rem] lg:px-[4rem] md:px-[3rem] px-[1rem]`}>{children}</div>;
};

export default WrapperLayout;

// TYPES
interface Props {
    className?: string;
    children: ReactNode;
}
