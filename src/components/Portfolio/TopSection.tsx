// IMAGES
import columnLine from "../../assets/images/columnLine.png";
import TopSectionBgImgLeft from "../../assets/images/portfolio_top_section_bg_left.png";
import TopSectionBgImgRight from "../../assets/images/portfolio_top_section_bg_right.png";

// COMPONENTS
import GradientText from "../GradientText";

// COMPONENTS

const TopSection = () => {
    return (
        <div className="text-white text-center mb-[6rem]">
            <div className="relative flex justify-center items-center">
                <img
                    src={TopSectionBgImgLeft}
                    className="absolute xl:top-auto lg:top-auto md:top-auto top-10 xl:left-16 lg:left-0 md:left-0 left-0 animate-[bounce_5s_infinite]"
                />
                <p
                    className={`z-10 bg-gradient-to-r from-[#ffffff00] via-[#FFFFFF] to-[#ffffff00] bg-clip-text text-transparent text-center xl:text-[4rem] lg:text-[4rem] md:text-[3rem] text-[1.7rem] font-[500]`}
                >
                    Showcasing Excellence
                    <br /> in Every Project
                </p>
                <img
                    src={TopSectionBgImgRight}
                    className="absolute xl:top-auto lg:top-auto md:top-auto top-10 xl:right-12 lg:right-0 md:right-0 right-0 animate-[bounce_5s_infinite]"
                />
            </div>
            <div className="mt-[6.25rem] grid xl:grid-cols-[21%_5%_21%_5%_21%_5%_21%] lg:grid-cols-[21%_5%_21%_5%_21%_5%_21%] md:grid-cols-[21%_5%_21%_5%_21%_5%_21%] grid-cols-[45%_5%_45%] xl:gap-y-0 lg:gap-y-0 md:gap-y-0 gap-y-8 justify-center items-center">
                <div className="h-full w-full flex flex-col justify-center items-center">
                    <GradientText
                        text="75 +"
                        option={{ position: "bg-gradient-to-r", fromColor: "#4AB4FF", toColor: "#4A80FF" }}
                        className="font-medium xl:!text-[3rem] lg:!text-[2rem] md:!text-[2rem] text-[2rem]"
                    />
                    <p className="xl:text-[1.5rem] lg:text-[1.2rem] md:text-[0.9rem] text-[1.2rem] text-center">Successful Projects</p>
                </div>
                <div className="flex justify-center items-center text-xl text-white">
                    <img src={columnLine} className="h-[8.2rem]" />
                </div>
                <div className="h-full w-full flex flex-col justify-center items-center">
                    <GradientText
                        text="98%"
                        option={{ position: "bg-gradient-to-r", fromColor: "#4AB4FF", toColor: "#4A80FF" }}
                        className="font-medium xl:!text-[3rem] lg:!text-[2rem] md:!text-[2rem] text-[2rem]"
                    />
                    <p className="xl:text-[1.5rem] lg:text-[1.2rem] md:text-[0.9rem] text-[1.2rem] text-center">Client Retention Rate</p>
                </div>
                <div className="xl:flex lg:flex md:flex hidden justify-center items-center text-xl text-white">
                    <img src={columnLine} className="h-[8.2rem]" />
                </div>
                <div className="h-full w-full flex flex-col justify-center items-center">
                    <GradientText
                        text="$100M +"
                        option={{ position: "bg-gradient-to-r", fromColor: "#4AB4FF", toColor: "#4A80FF" }}
                        className="font-medium xl:!text-[3rem] lg:!text-[2rem] md:!text-[2rem] text-[2rem]"
                    />
                    <p className="xl:text-[1.5rem] lg:text-[1.2rem] md:text-[0.9rem] text-[1.2rem] text-center">Revenue Generated</p>
                </div>
                <div className="flex justify-center items-center text-xl text-white">
                    <img src={columnLine} className="h-[8.2rem]" />
                </div>
                <div className="h-full w-full flex flex-col justify-center items-center">
                    <GradientText
                        text="5 yrs"
                        option={{ position: "bg-gradient-to-r", fromColor: "#4AB4FF", toColor: "#4A80FF" }}
                        className="font-medium xl:!text-[3rem] lg:!text-[2rem] md:!text-[2rem] text-[2rem]"
                    />
                    <p className="xl:text-[1.5rem] lg:text-[1.2rem] md:text-[0.9rem] text-[1.2rem] text-center">Industry Expertise</p>
                </div>
            </div>
        </div>
    );
};

export default TopSection;
