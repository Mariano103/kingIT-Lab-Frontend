import { FC } from "react";

// ICONS
import { GoShareAndroid } from "react-icons/go";
import { API_URL } from "../../Constants/config";

const BlogArticleCard: FC<Props> = ({ card, onClickReadArticle = () => { } }) => {

    const bigNumberChange = (bigNumber: number) => {
        const M = Math.pow(10, 6);
        const K = Math.pow(10, 3);
        return bigNumber >= M ?
            (bigNumber / M).toFixed(1) + 'M' :
            bigNumber >= K ?
                (bigNumber / K).toFixed(1) + 'K' :
                bigNumber;
    }
    return (
        <div
            className={`flex flex-col border border-[#434444] overflow-hidden bg-[#15171A] rounded-lg xl:w-[17.375rem] lg:w-[17.375] md:w-[17.375] xl:h-auto lg:h-auto md:h-auto h-auto`}
        >
            <div className="w-full h-[12.5rem] overflow-hidden">
                <img src={API_URL + card.image.url} className="w-full h-full" />
            </div>
            <div className="p-[1.5rem] h-auto">
                <div className="text-left flex flex-col gap-[1.313rem]">
                    <div>
                        <p className="xl:text-[1.1rem] lg:text-[1.1rem] md:text-[1rem] text-[1rem] text-white font-bold line-clamp-2">{card.title}</p>
                        <p className="text-[#F0F0F0] text-[0.656rem] font-extralight truncate">{card.readTime}</p>
                    </div>

                    <div className="flex flex-col gap-[1.094rem]">
                        <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col xl:justify-between lg:justify-between md:justify-between justify-start items-center xl:gap-0 lg:gap-0 md:gap-0 gap-[0.563rem]">
                            <div className="xl:w-auto lg:w-auto md:w-auto w-full flex items-center gap-[0.375rem]">
                                <img src={API_URL + card.avatar.url} className="rounded-full xl:w-[1.3rem] xl:h-[1.3rem]" />
                                <span className="text-[0.563rem] font-[400] text-[#F0F0F0]">{card.name}</span>
                                <p className="border-t-2 border-[#F0F0F0] xl:w-[1rem] lg:w-[1rem] md:w-[1rem] w-[0.75rem]"></p>
                                <span className="text-[#F0F0F0] text-[0.469rem] font-[400]">{new Date(card.date).toDateString()}</span>
                            </div>
                            <div className="xl:w-auto lg:w-auto md:w-auto w-full flex items-center gap-[0.3rem]">
                                <GoShareAndroid size={12} color="white" />
                                <span className="text-[#F0F0F0] text-[0.469rem] font-[400]">{bigNumberChange(card.shares) + ' shares'}</span>
                            </div>
                        </div>
                        <p className="text-[#F0F0F0] text-[0.656rem] font-[400] leading-[1rem] line-clamp-3 break-all">{card.desc}</p>
                        <button
                            onClick={() => onClickReadArticle(card.id)}
                            className="w-fit cursor-pointer text-[#FFFFFF]  text-[0.75rem] font-[600]"
                        >
                            Read Article
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogArticleCard;

// TYPES
interface Props {
    card: {
        id: string;
        title: string;
        readTime: string;
        image: { url: string };
        shares: number;
        desc: string;
        name: string;
        avatar: { url: string };
        date: Date;
    };
    onClickReadArticle: (v: string) => void;
}
