// IMAGES
import CasinoImg from "../../assets/images/casino.png";
import DexImg from "../../assets/images/dex.png";
import NFTImg from "../../assets/images/nft.png";
import CryptoImg from "../../assets/images/crypto.png";
import BGImage from "../../assets/images/market_ready_scripts_bg.png";
import BGSmallImage from "../../assets/images/market_ready_scripts_bg_small.png";

// COMPONENTS
import WrapperLayout from "../WrapperLayout";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../navigation/routes";

const MarketReadyScripts = () => {

    const navigate = useNavigate();
    return (
        <div className="bg-[#0E0E0E] relative h-auto pb-[8rem]">
            <img src={BGImage} className="w-full absolute xl:block lg:block md:block hidden" />
            <img src={BGSmallImage} className="w-full top-[30rem] absolute xl:hidden lg:hidden md:hidden block" />
            <WrapperLayout>
                <div className="mb-[1.5rem]">
                    <p className="xl:text-[4rem] lg:text-[4rem] md:text-[3rem] text-[3rem] bg-gradient-to-r from-[#ffffff00] via-[#FFFFFF] to-[#ffffff00] bg-clip-text text-transparent text-center mb-1 font-lexend">
                        Market-Ready Script, Instantly
                    </p>
                    <p className="text-[#F0F0F0] text-lg font-extralight text-center">
                        Launch your business in a blink with our scalable and <br /> customizable white-label solutions,
                    </p>
                </div>

                {/* FLOATING CARDS */}
                <div className="relative h-[40rem] xl:mb-0 lg:mb-0 md:mb-20">
                    {/* #1 */}
                    <div className="xl:absolute lg:absolute md:absolute relative xl:top-[5rem] lg:top-[5rem] md:top-[2rem] xl:left-[10rem] lg:left-0 md:left-0 xl:w-[26rem] lg:w-[26rem] md:w-[26rem] w-full xl:mb-0 lg:mb-0 md:mb-0 mb-5 flex flex-col gap-[0.5rem] justify-between backdrop-blur-sm bg-white/5 text-white p-[0.8rem] rounded-lg shadow-md border border-[#4F4F4F]">
                        <p className="text-lg font-medium">Fast Deployment</p>
                        <p className="text-[#F0F0F0] text-sm font-extralight">
                            Hit the ground running with scripts that are ready to deploy instantly.
                        </p>
                    </div>

                    {/* #2 */}
                    <div className="xl:absolute lg:absolute md:absolute relative xl:top-[3rem] lg:top-[3rem] md:top-[10rem] xl:right-[10rem] lg:right-0 md:right-0 xl:w-[26rem] lg:w-[26rem] md:w-[26rem] w-full xl:mb-0 lg:mb-0 md:mb-0 mb-5 flex flex-col gap-[0.5rem] justify-between backdrop-blur-sm bg-white/5 text-white p-[0.8rem] rounded-lg shadow-md border border-[#4F4F4F]">
                        <p className="text-lg font-medium">Scalable</p>
                        <p className="text-[#F0F0F0] text-sm font-extralight">
                            Built with growth in mind, ensuring seamless integration as your business expands.
                        </p>
                    </div>

                    {/* #3 */}
                    <div className="xl:absolute lg:absolute md:absolute relative xl:top-[14rem] lg:top-[14rem] md:top-[18rem] xl:left-[30rem] lg:left-[16rem] md:left-0 lg:right-44 xl:w-[26rem] lg:w-[26rem] md:w-[26rem] w-full xl:mb-0 lg:mb-0 md:mb-0 mb-5 flex flex-col gap-[0.5rem] justify-between backdrop-blur-sm bg-white/5 text-white p-[0.8rem] rounded-lg shadow-md border border-[#4F4F4F]">
                        <p className="text-lg font-medium">Customizable</p>
                        <p className="text-[#F0F0F0] text-sm font-extralight">
                            Tailor the scripts to reflect your brand identity and meet specific business needs.
                        </p>
                    </div>

                    {/* #4 */}
                    <div className="xl:absolute lg:absolute md:absolute relative xl:top-[25rem] lg:top-[25rem] md:top-[26rem] xl:left-[10rem] lg:left-0 md:right-0  xl:w-[26rem] lg:w-[26rem] md:w-[26rem] w-full xl:mb-0 lg:mb-0 md:mb-0 mb-5 flex flex-col gap-[0.5rem] justify-between backdrop-blur-sm bg-white/5 text-white p-[0.8rem] rounded-lg shadow-md border border-[#4F4F4F]">
                        <p className="text-lg font-medium">Cost-Effective</p>
                        <p className="text-[#F0F0F0] text-sm font-extralight">
                            Eliminate the need for costly custom development with affordable, pre-built solutions.
                        </p>
                    </div>

                    {/* #5 */}
                    <div className="xl:absolute lg:absolute md:absolute relative xl:top-[25rem] lg:top-[25rem] md:top-[34rem] xl:right-[5rem] lg:right-0 xl:w-[26rem] lg:w-[26rem] md:w-[26rem] w-full xl:mb-0 lg:mb-0 md:mb-0 mb-5 flex flex-col gap-[0.5rem] justify-between backdrop-blur-sm bg-white/5 text-white p-[0.8rem] rounded-lg shadow-md border border-[#4F4F4F]">
                        <p className="text-lg font-medium">Expert Support</p>
                        <p className="text-[#F0F0F0] text-sm font-extralight">
                            Get access to comprehensive documentation and a dedicated support team for a smooth setup.
                        </p>
                    </div>
                </div>

                {/* BOTTOM CARDS */}
                <div className="mb-[2rem] relative grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 gap-[1.5rem]">
                    {/* #1 */}
                    <div className="w-full overflow-hidden xl:h-[19rem] lg:h-[16rem] md:h-[17rem] h-[17rem] flex flex-col gap-[0.5rem] backdrop-blur-sm bg-white/5 text-white rounded-lg shadow-md border border-[#4F4F4F]">
                        <div className="overflow-hidden">
                            <img src={CasinoImg} className="w-full" />
                        </div>
                        <div className="px-[1.2rem] py-[0.3rem]">
                            <p className="font-bold text-white text-lg">Casino</p>
                            <p className="text-sm font-extralight text-[#F0F0F0]">A ready-to-launch platform for online gaming.</p>
                        </div>
                    </div>

                    {/* #2 */}
                    <div className="w-full overflow-hidden xl:h-[19rem] lg:h-[16rem] md:h-[17rem] h-[17rem] flex flex-col gap-[0.5rem] backdrop-blur-sm bg-white/5 text-white rounded-lg shadow-md border border-[#4F4F4F]">
                        <div className="overflow-hidden">
                            <img src={DexImg} className="w-full" />
                        </div>
                        <div className="px-[1.2rem] py-[0.3rem]">
                            <p className="font-bold text-white text-lg">DEX</p>
                            <p className="text-sm font-extralight text-[#F0F0F0]">Seamless token trading with secure integration.</p>
                        </div>
                    </div>

                    {/* #3 */}
                    <div className="w-full overflow-hidden xl:h-[19rem] lg:h-[16rem] md:h-[17rem] h-[17rem] flex flex-col gap-[0.5rem] backdrop-blur-sm bg-white/5 text-white rounded-lg shadow-md border border-[#4F4F4F]">
                        <div className="overflow-hidden">
                            <img src={NFTImg} className="w-full" />
                        </div>
                        <div className="px-[1.2rem] py-[0.3rem]">
                            <p className="font-bold text-white text-lg">NFT Marketplace</p>
                            <p className="text-sm font-extralight text-[#F0F0F0]">Showcase and trade digital collectibles easily.</p>
                        </div>
                    </div>

                    {/* #4 */}
                    <div className="w-full overflow-hidden xl:h-[19rem] lg:h-[16rem] md:h-[17rem] h-[17rem] flex flex-col gap-[0.5rem] backdrop-blur-sm bg-white/5 text-white rounded-lg shadow-md border border-[#4F4F4F]">
                        <div className="overflow-hidden">
                            <img src={CryptoImg} className="w-full" />
                        </div>
                        <div className="px-[1.2rem] py-[0.3rem]">
                            <p className="font-bold text-white text-lg">Crypto Launchpad</p>
                            <p className="text-sm font-extralight text-[#F0F0F0]">Effortlessly launch tokens and projects.</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <button className="border-2 border-white text-white py-[0.5rem] px-[1rem] rounded-xl cursor-pointer" onClick={() => navigate(ROUTES.SOLUTION.WHITELABEL.PATH)}>Discover More</button>
                </div>
            </WrapperLayout >
        </div >
    );
};

export default MarketReadyScripts;
