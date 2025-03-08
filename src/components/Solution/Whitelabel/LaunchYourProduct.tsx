// IMAGES
import ClockImg from "../../../assets/images/solution_card_clock.png";
import CubeImg from "../../../assets/images/solution_card_cube.png";
import PiggyImg from "../../../assets/images/solution_card_piggy.png";
import PuzzelPiceImg from "../../../assets/images/solution_card_puzzel_pice.png";
import BgLeftImg from "../../../assets/images/solution_heading_left_bg.png";
import BgLeftSmallImg from "../../../assets/images/solution_heading_left_bg_small.png";
import BottomBarImg from "../../../assets/images/solution_whitelabel_bottom_bar.png";
import BottomBarSmallImg from "../../../assets/images/solution_whitelabel_bottom_bar_small.png";

// COMPONENTS
import WrapperLayout from "../../WrapperLayout";

const LaunchYourProduct = () => {
    const digitalProductData = [
        {
            id: 0,
            title: "Faster Time-to-Market",
            desc: "Get to know your customer early",
            logo: ClockImg,
        },
        {
            id: 1,
            title: "Scalable for Growth",
            desc: "Easily maintain more features",
            logo: CubeImg,
        },
        {
            id: 2,
            title: "Less Development Costs",
            desc: "Saving more for product growth",
            logo: PiggyImg,
        },
        {
            id: 3,
            title: "Full Branding Control",
            desc: "Allows you customized the UI",
            logo: PuzzelPiceImg,
        },
    ];

    return (
        <div className="relative">
            <img src={BgLeftImg} className="absolute left-0 top-[7rem] xl:block lg:block md:block hidden animate-[bounce_5s_infinite]" />
            <img src={BgLeftSmallImg} className="absolute h-[50%] left-0 xl:hidden lg:hidden md:hidden block animate-[bounce_5s_infinite]" />
            <WrapperLayout className="relative z-10">
                <div className="flex xl:flex-row lg:flex-col md:flex-col flex-col">
                    <div className="xl:w-[50%] lg:w-full md:w-full w-full">
                        <p className="text-white xl:text-[3rem] lg:text-[3rem] md:text-[3rem] text-[2rem] xl:block lg:block md:block hidden">
                            Launch your digital product effortlessly and faster.
                        </p>
                        <p className="text-white xl:text-[3rem] lg:text-[3rem] md:text-[3rem] text-[2rem] xl:hidden lg:hidden md:hidden block">
                            Launch your digital product <span className="font-bold">effortlessly</span> and <span className="font-bold">faster</span>.
                        </p>
                    </div>
                    <div className="xl:w-[50%] lg:w-full md:w-full w-full mt-14">
                        <div className="grid xl:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-2 xl:gap-x-4 lg:gap-x-4 md:gap-x-4 gap-x-2 xl:gap-y-[4rem] lg:gap-y-[4rem] md:gap-y-[4rem] gap-y-[2rem]">
                            {digitalProductData.map(({ id, title, desc, logo }) => {
                                return (
                                    <div
                                        key={id}
                                        className="w-full xl:h-[8rem] lg:h-[8rem] md:h-[8rem] h-[5.5rem] relative rounded-lg shadow-md border bg-[#4f4f4f20] backdrop-blur-sm border-[#4F4F4F]"
                                    >
                                        <img
                                            src={logo}
                                            alt="Card Image"
                                            className="absolute xl:left-[11.5rem] lg:left-[9rem] md:left-[12rem] left-[8rem] xl:top-[-50px] lg:top-[-50px] md:top-[-50px] top-[-28px] xl:w-[100px] xl:h-[100px] lg:w-[100px] lg:h-[100px] md:w-[100px] md:h-[100px] w-[56px] h-[56px]"
                                        />
                                        <div className="w-full h-full flex flex-col justify-end px-[0.75rem] pb-[1rem]">
                                            <p className="text-white font-bold xl:text-xl lg:text-xl md:text-xl text-xs">{title}</p>
                                            <p className="text-white font-extralight xl:text-base lg:text-base md:text-base text-xs">{desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center xl:mt-[5.75rem] lg:mt-[5.75rem] md:mt-[5.75rem] mt-[2rem] mb-[5.375rem]">
                    <img src={BottomBarImg} className="xl:block lg:block md:block hidden" />
                    <img src={BottomBarSmallImg} className="xl:hidden lg:hidden md:hidden block" />
                </div>
            </WrapperLayout>
        </div>
    );
};

export default LaunchYourProduct;
