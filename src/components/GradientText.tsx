import { FC } from "react";
import { TPercentage } from "../types/customTypes";

const GradientText: FC<Props> = ({
    text = "",
    className = "",
    option = {
        fromColor: "#686868",
        viaColor: "#FFFFFF",
        toColor: "#686868",
        position: "bg-gradient-to-r",
    },
}) => {
    return (
        <p
            className={`${className} inline-block ${option.position} from-[${option.fromColor}] via-[${option.viaColor}] to-[${option.toColor}] bg-clip-text text-transparent`}
        >
            {text}
        </p>
    );
};

export default GradientText;

// TYPES
interface Props {
    text: string;
    className?: string;
    option: {
        fromColor: string;
        viaColor?: string;
        toColor: string;
        position:
            | "bg-gradient-to-t"
            | "bg-gradient-to-tr"
            | "bg-gradient-to-r"
            | "bg-gradient-to-br"
            | "bg-gradient-to-b"
            | "bg-gradient-to-bl"
            | "bg-gradient-to-l"
            | "bg-gradient-to-tl";
    };
}
