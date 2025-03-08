import { FC, useState } from "react";

// ICONS
import { FaArrowDownLong } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";

const FeatureCard: FC<Props> = ({ title, cardData, className = "" }) => {
    // STATES
    const [seeMore, setSeeMore] = useState(false);
    console.log(cardData);

    const [data, setData] = useState<Array<TCardItem>>(cardData ? cardData.slice(0, 6) : []);
    const [lastTwoIds, setLastTwoIds] = useState<Array<number>>(data.slice(-2).map((item) => item.id));

    // FUNCTIONS
    const seeMoreHandler = () => {
        const _seeMore = seeMore ? false : true;
        const _data = _seeMore ? cardData : cardData.slice(0, 6);
        const _lastTwoIds = _data.slice(-2).map((item) => item.id);

        setLastTwoIds(() => _lastTwoIds);
        setData(() => _data);
        setSeeMore(() => _seeMore);
    };

    return (
        <div className={`${className}`}>
            <p className="text-white font-normal text-[2.5rem] mb-[1.5rem]">{title}</p>
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 rounded-xl overflow-hidden">
                {data.map((product, index) => {
                    return (
                        <div
                            key={product.id}
                            className={`w-full xl:min-h-[10.8rem] lg:min-h-[9rem] md:min-h-[8rem] max-h-auto bg-white bg-opacity-5 backdrop-blur-xl ${index % 2 == 0
                                ? `border-[#383838] xl:border-r lg:border-r md:border-r ${lastTwoIds.includes(product.id) ? "" : "border-b"}`
                                : `${lastTwoIds.includes(product.id) ? "" : "border-b"} border-[#383838]`
                                } xl:p-[1.5rem] lg:p-[1rem] md:p-[1rem] p-[1rem]`}
                        >
                            <p className="text-white font-medium xl:text-[1.5rem] lg:text-[1rem] line-clamp-1">{product.title}</p>
                            <div className="ml-[1.2rem] mt-[0.5rem]">
                                {product.content && product.content.map((content, index) => {
                                    return (
                                        <div key={index} className="flex h-full">
                                            <div className="w-[4%] h-full">
                                                <div className="w-1 h-1 mt-2.5 rounded-full bg-white"></div>
                                            </div>
                                            <div className="w-[96%] h-full overflow-hidden ml-2">
                                                <span className="text-white font-light xl:text-[1rem] lg:text-[0.9rem] md:text-[0.8rem] text-[0.8rem] line-clamp-2">
                                                    {content.content}
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="flex justify-center items-center">
                <div onClick={seeMoreHandler} className="z-10 cursor-pointer flex flex-col mt-1.5 mb-[6.6rem]">
                    <div className="flex w-fit gap-1.5">
                        <span className="text-white font-light text-[1.1rem]">See {seeMore ? "less" : "more"} </span>
                        {seeMore ? <FaArrowUp color="white" className="mt-1.5" /> : <FaArrowDownLong color="white" className="mt-1.5" />}
                    </div>
                    <p className="w-full border-b-2 border-white"></p>
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;

// TYPES
interface Props {
    title: string;
    cardData: Array<TCardItem>;
    className?: string;
}
type TCardItem = {
    id: number;
    title: string;
    content: Array<{ content: string }>;
};
