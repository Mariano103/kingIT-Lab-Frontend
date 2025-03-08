/* eslint-disable @typescript-eslint/no-explicit-any */
// IMAGES
import columnLine from "../../../assets/images/columnLine.png";
import PCImageBg from "../../../assets/images/key_feature_bg.png";
import BusinessChallengeBg from "../../../assets/images/business_challenge_bg.png";
import BusinessChallengeBgSmall from "../../../assets/images/business_challenge_bg_small.png";

// COMPONENTS
import WrapperLayout from "../../WrapperLayout";
import { API_URL } from "../../../Constants/config";

const KeyFeatures = (param: any) => {

    const project = param.project;

    if (project)
        return (
            <div>
                <WrapperLayout className="xl:mt-[6rem] lg:mt-[6rem] md:mt-[6rem] mt-[4rem] ">
                    <div className="grid xl:grid-cols-[21%_5%_21%_5%_21%_5%_21%] lg:grid-cols-[21%_5%_21%_5%_21%_5%_21%] md:grid-cols-[21%_5%_21%_5%_21%_5%_21%] grid-cols-[45%_5%_45%] xl:gap-y-0 lg:gap-y-0 md:gap-y-0 gap-y-8 justify-center items-center">
                        {/* #1 */}
                        <div className="h-full w-full flex flex-col justify-center items-center">
                            <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#4AB4FF] to-[#4A80FF] xl:text-[4rem] lg:text-[4rem] md:text-[3rem] text-[3rem]">
                                $2.3M
                            </p>
                            <p className="xl:text-[1.5rem] lg:text-[1.2rem] md:text-[0.9rem] text-[1.2rem] text-center text-white">Successful Projects</p>
                        </div>
                        <div className="flex justify-center items-center text-xl text-white">
                            <img src={columnLine} className="h-[8.2rem]" />
                        </div>

                        {/* #2 */}
                        <div className="h-full w-full flex flex-col justify-center items-center">
                            <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#4AB4FF] to-[#4A80FF] xl:text-[4rem] lg:text-[4rem] md:text-[3rem] text-[3rem]">
                                98%
                            </p>
                            <p className="xl:text-[1.5rem] lg:text-[1.2rem] md:text-[0.9rem] text-[1.2rem] text-center text-white">User Satisfaction</p>
                        </div>
                        <div className="xl:flex lg:flex md:flex hidden justify-center items-center text-xl text-white">
                            <img src={columnLine} className="h-[8.2rem]" />
                        </div>

                        {/* #3 */}
                        <div className="h-full w-full flex flex-col justify-center items-center">
                            <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#4AB4FF] to-[#4A80FF] xl:text-[4rem] lg:text-[4rem] md:text-[3rem] text-[3rem]">
                                2000+
                            </p>
                            <p className="xl:text-[1.5rem] lg:text-[1.2rem] md:text-[0.9rem] text-[1.2rem] text-center text-white">Wallet Participated</p>
                        </div>
                        <div className="flex justify-center items-center text-xl text-white">
                            <img src={columnLine} className="h-[8.2rem]" />
                        </div>

                        {/* #4 */}
                        <div className="h-full w-full flex flex-col justify-center items-center">
                            <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#4AB4FF] to-[#4A80FF] xl:text-[4rem] lg:text-[4rem] md:text-[3rem] text-[3rem]">
                                99.9%
                            </p>
                            <p className="xl:text-[1.5rem] lg:text-[1.2rem] md:text-[0.9rem] text-[1.2rem] text-center text-white">System Uptime</p>
                        </div>
                    </div>
                </WrapperLayout>
                <div className="relative mt-20 mb-20 flex">
                    <img src={PCImageBg} className="absolute object-contain -top-[16rem]" />
                    <div className="w-full flex l:flex-row lg:flex-row md:flex-col flex-col justify-center">
                        <div className="xl:w-[30%] lg:w-[50%] md:w-full w-full">
                            <img src={API_URL + project.feature_img.url} className="w-full h-full object-cover" />
                        </div>
                        <div className="xl:w-[50%] xl:p-10 lg:p-0 md:p-10 p-5 lg:w-[50%] md:w-full full">
                            <p className="text-white text-[1.5rem] font-medium">Key Features</p>
                            <div className="mt-3">
                                {
                                    project.features && project.features.map((feature: { title: string, content: string }, id: number) =>
                                        <div className="flex ml-3" key={id}>
                                            <div className="mt-2.5">
                                                <div className="w-1 h-1 bg-white rounded-full"></div>
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-white text-[1.1rem] font-medium">{feature.title}</p>
                                                <p className="text-white text-[1rem] font-extralight">
                                                    {feature.content}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img src={BusinessChallengeBg} className="absolute right-0 -top-20 xl:block lg:block md:hidden hidden animate-[bounce_5s_infinite]" />
                    <img
                        src={BusinessChallengeBgSmall}
                        className="absolute right-0 xl:top-auto lg:top-auto md:top-[32rem] top-[38rem] xl:hidden lg:hidden md:block block animate-[bounce_5s_infinite]"
                    />
                    <WrapperLayout>
                        <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#999999] via-[#FFFFFF] to-[#999999] text-[3rem] text-center">
                            Business Challenge
                        </p>
                        <div className="mt-10 flex xl:flex-row lg:flex-row md:flex-col flex-col">
                            <div className="z-10 xl:w-[50%] lg:w-[60%] md:w-full w-full flex flex-col gap-[4rem]">
                                <div>
                                    <p className="text-white font-bold text-[1.7rem]">Background</p>
                                    <p className="text-white text-[1rem] font-extralight">
                                        {project.background}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-white font-bold text-[1.7rem]">Challenge</p>
                                    <div className="mt-1">
                                        {
                                            project.challenge && project.challenge.map((challenge: { content: string }, id: number) =>
                                                <div className="flex ml-3" key={id}>
                                                    <div className="mt-2.5">
                                                        <div className="w-1 h-1 bg-white rounded-full"></div>
                                                    </div>
                                                    <div className="ml-3">
                                                        <p className="text-white text-[1rem] font-extralight">
                                                            {challenge.content}
                                                        </p>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="z-10 xl:w-[50%] lg:w-[40%] md:w-full w-full flex justify-center items-center xl:mt-0 lg:mt-0 md:mt-20 mt-20">
                                <img src={API_URL + project.challenge_img.url} className="xl:w-fit lg:w-fit md:w-fit w-[80%]" />
                            </div>
                        </div>
                    </WrapperLayout>
                </div>
            </div>
        );
};

export default KeyFeatures;
