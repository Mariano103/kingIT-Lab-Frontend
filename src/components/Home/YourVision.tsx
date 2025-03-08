// IMAGES
import YourVisionBgImage from "../../assets/images/your_vision_bg.png";
import YourVisionBgEffect from "../../assets/images/yout_vision_bg_effect.png";
import YourVisionBgSmallImage from "../../assets/images/your_vision_bg_small.png";
import YourVisionBgSmallEffect from "../../assets/images/yout_vision_bg_effect_small.png";

// COMPONENTS
import WrapperLayout from "../WrapperLayout";

const YourVision = () => {
    return (
        <div className="bg-[#0E0E0E] pb-[8rem]">
            <div className="mb-[4rem]">
                <WrapperLayout>
                    <p className="xl:text-[4rem] lg:text-[4rem] md:text-[3rem] text-[3rem] bg-gradient-to-r from-[#ffffff00] via-[#FFFFFF] to-[#ffffff00] bg-clip-text text-transparent text-center">Build to Empower Your Vision</p>
                    <p className="text-[#F0F0F0] text-lg font-extralight text-center">
                        We leverage state-of-the-art tools and frameworks to turn
                        <br /> your ideas into reality.
                    </p>
                </WrapperLayout>
            </div>
            <div className="relative h-[18.5rem] flex justify-center items-center">
                <img src={YourVisionBgEffect} className="absolute w-full h-[32rem] xl:block lg:block md:block hidden" />
                <img src={YourVisionBgImage} className="w-full z-10 absolute xl:block lg:block md:block hidden" />

                {/* MOBILE */}
                <img src={YourVisionBgSmallEffect} className="absolute w-full h-[32rem] xl:hidden lg:hidden md:hidden block" />
                <img src={YourVisionBgSmallImage} className="w-full z-10 absolute xl:hidden lg:hidden md:hidden block" />
            </div>
        </div>
    );
};

export default YourVision;
