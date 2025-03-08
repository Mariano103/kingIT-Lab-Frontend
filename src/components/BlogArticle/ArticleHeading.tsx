/* eslint-disable @typescript-eslint/no-explicit-any */
// IMAGES
import avatar from "../../assets/images/blog_card_avatar.png";

// ICONS
import { GoShareAndroid } from "react-icons/go";
import { CiClock2 } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";

const ArticleHeading = (param: any) => {

    const blog = param.blog;

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
        <div className="flex flex-col gap-[0.75rem] mb-[5rem]">
            <p className="text-[2.5rem] xl:w-[50%] lg:w-[70%] md:w-[90%] w-full text-white">{blog.title}</p>
            <p className="text-[1.5rem] font-extralight text-white">Relationship tips couples therapists are giving all the time</p>
            <div className="flex flex-col gap-[1.094rem]">
                <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col xl:justify-between lg:justify-between md:justify-between justify-start items-center xl:gap-0 lg:gap-0 md:gap-0 gap-[0.563rem]">
                    <div className="xl:w-autfull lg:w-auto md:w-auto w-full flex xl:items-center lg:items-center md:items-center items-start gap-[0.5rem] xl:flex-row lg:flex-row md:flex-row flex-col">
                        <div className="flex items-center gap-[0.5rem]">
                            <img src={avatar} className="rounded-full xl:w-[1.75rem] xl:h-[1.75rem]" />
                            <span className="text-[0.75rem] font-[400] text-[#F0F0F0]">{blog.name}</span>
                        </div>
                        <div className="xl:w-auto lg:w-auto md:w-auto w-full flex items-center gap-[0.5rem]">
                            <p className="xl:block lg:block md:block hidden border-t-2 border-[#F0F0F0] xl:w-[1.5rem] lg:w-[1.5rem] md:w-[1rem] w-[0.75rem]"></p>
                            <div className="xl:w-auto flex items-center gap-[0.5rem]">
                                <CiClock2 size={18} color="white" />
                                <span className="text-[#F0F0F0] text-[0.7rem] font-[400]">{blog.readTime + ' read'}</span>
                            </div>
                            <p className="border-t-2 border-[#F0F0F0] xl:w-[1.5rem] lg:w-[1.5rem] md:w-[1rem] w-[0.75rem]"></p>
                            <div className="xl:w-auto flex items-center gap-[0.5rem]">
                                <IoEyeOutline size={16} color="white" />
                                <span className="text-[#F0F0F0] text-[0.7rem] font-[400]">{bigNumberChange(blog.views) + ' views'}</span>
                            </div>
                            <p className="border-t-2 border-[#F0F0F0] xl:w-[1.5rem] lg:w-[1.5rem] md:w-[1rem] w-[0.75rem]"></p>
                            <div className="xl:w-auto flex items-center gap-[0.5rem]">
                                <GoShareAndroid size={16} color="white" />
                                <span className="text-[#F0F0F0] text-[0.7rem] font-[400]">{bigNumberChange(blog.shares) + ' shares'}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleHeading;
