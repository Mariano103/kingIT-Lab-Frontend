// IMAGES
import { Link } from "react-router-dom";
import SoloLogo from "../../assets/images/solo.png";
import SoloPortfolioImg from "../../assets/images/solo_portfolio_img.png";
import SoloPortfolioSmallImg from "../../assets/images/solo_portfolio_img_small.png";

// COMPONENTS
import WrapperLayout from "../WrapperLayout";

const OurProducts = () => {
    return (
        <div id="ourProducts" className="bg-[#0E0E0E] pb-[8rem]">
            <WrapperLayout>
                <div className="mb-[1.5rem]">
                    <p className="xl:text-[4rem] lg:text-[4rem] md:text-[3rem] text-[3rem] bg-gradient-to-r from-[#ffffff00] via-[#FFFFFF] to-[#ffffff00] bg-clip-text text-transparent text-center">Our Innovative Products</p>
                    <p className="text-[#F0F0F0] text-2xl font-extralight flex justify-center">
                        <p className="max-w-2xl text-center">Innovation meets practicality in our products, crafted to empower businesses with cutting-edge solutions.</p>
                    </p>
                </div>

                <div>
                    <div className="w-full overflow-hidden xl:gap-10 lg:gap-10 md:gap-0 gap-0 xl:h-[38rem] lg:h-[38rem] md:h-auto h-auto flex xl:flex-row lg:flex-row md:flex-col flex-col bg-[#202020] text-white rounded-lg shadow-md border border-[#4F4F4F]">
                        <div className="p-[2rem] xl:w-[40%] lg:w-[60%] md:w-full w-full flex flex-col justify-between">
                            <div>
                                <img src={SoloLogo} />
                                <p className="mt-[1rem] text-white text-[1.7rem] font-bold leading-8">
                                    Launch Your Solana Token with SOLO in Just 4 Easy Steps
                                </p>
                                <p className="mt-[1rem] text-[#F0F0F0] text-sm font-extralight">
                                    SOLO is the ultimate token launchpad tool for a seamless and secure token and project launches in the Solana
                                    ecosystem.
                                </p>
                            </div>
                            <Link to='https://solotokenlaunchpad.com' target="_blank" className="xl:block lg:block md:hidden hidden w-fit text-black font-medium bg-white py-[0.5rem] px-[1rem] rounded-xl">
                                Discover SOLO
                            </Link>
                        </div>
                        <div className="p-[2rem] xl:pt-[2rem] lg:pt-[2rem] md:pt-0 pt-0 xl:w-[60%] lg:w-[60%] md:w-full w-full overflow-hidden flex flex-col xl:justify-start lg:justify-start md:justify-start justify-start">
                            <div className="rounded-xl ">
                                <img src={SoloPortfolioImg} className="w-full xl:block lg:block md:hidden hidden" />
                                <img src={SoloPortfolioSmallImg} className="w-full xl:hidden lg:hidden md:block block" />
                            </div>
                            <div className="flex justify-center items-center mt-[4rem]">
                                <button className="w-fit xl:hidden lg:hidden md:block block bg-white text-black py-[0.5rem] px-[1rem] font-medium rounded-xl">
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </WrapperLayout>
        </div>
    );
};

export default OurProducts;
