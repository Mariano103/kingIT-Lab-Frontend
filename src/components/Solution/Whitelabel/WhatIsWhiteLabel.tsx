import WrapperLayout from "../../WrapperLayout";

const WhatIsWhiteLabel = () => {
    return (
        <WrapperLayout>
            <p className="xl:text-[3.5rem] lg:text-[3.5rem] md:text-[3.5rem] text-[2rem] text-center mb-[1rem] bg-gradient-to-r from-[#ffffff00] via-[#FFFFFF] to-[#ffffff00] bg-clip-text text-transparent">
                What is Whitelabel?
            </p>
            <p className="text-[#F0F0F0] text-center xl:text-[1.5rem] lg:text-[1.5rem] md:text-[1.5rem] text-[1.2rem] font-extralight leading-7 flex justify-center">
                <p className="md:max-w-2xl">
                    We provide fully function products that you are freely customizing the brand color and interfaces. There will be no downtime to request
                    user interface design and features.
                </p>
            </p>
            <div className="grid grid-cols-3 xl:gap-[1.5rem] lg:gap-[1.5rem] mb:gap-[1.5rem] gap-[0.5rem] mt-[3.188rem] mb-[5.375rem]">
                <button className="w-full xl:py-[1rem] lg:py-[1rem] mb:py-[1rem] py-[0.5rem] px-3 text-white xl:text-[1.5rem] lg:text-[1.5rem] md:text-[1rem] text-sm text-center font-extralight bg-black border-2 border-[#808080] rounded-full">
                    Customizable Interface
                </button>
                <button className="w-full xl:py-[1rem] lg:py-[1rem] mb:py-[1rem] py-[0.5rem] px-3 text-white xl:text-[1.5rem] lg:text-[1.5rem] md:text-[1rem] text-sm text-center font-extralight bg-black border-2 border-[#808080] rounded-full">
                    Quick Deployment
                </button>
                <button className="w-full xl:py-[1rem] lg:py-[1rem] mb:py-[1rem] py-[0.5rem] px-3 text-white xl:text-[1.5rem] lg:text-[1.5rem] md:text-[1rem] text-sm text-center font-extralight bg-black border-2 border-[#808080] rounded-full">
                    Secure Infrastructure
                </button>
            </div>
        </WrapperLayout>
    );
};

export default WhatIsWhiteLabel;
