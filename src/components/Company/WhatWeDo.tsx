// IMAGES
import one from "../../assets/images/one.png";
import two from "../../assets/images/two.png";
import three from "../../assets/images/three.png";
import four from "../../assets/images/four.png";

// COMPONENTS
import MainHeading from "../MainHeading";

const WhatWeDo = () => {
    // MOCK DATA
    const whatWeDoData: TWhatWeDoData = [
        {
            id: 1,
            title: "Software <br/> Development",
            description: "Create decentralized platforms, tokens, and smart contracts for innovative Web3 solutions.",
            logo: four,
        },
        {
            id: 2,
            title: "Blockchain <br/> Solutions",
            description: "Develop blockchain applications, smart contracts, and DApps tailored to your web3 business needs.",
            logo: three,
        },
        {
            id: 3,
            title: "Whitelabel <br/> Products",
            description: "Launch quickly with customizable Web3 solutions like NFT marketplaces and token launchpads tailored to your brand.",
            logo: two,
        },
        {
            id: 4,
            title: "Telegram <br/> Automation",
            description: "Automate engagement, support, and notifications with advanced Telegram bots for seamless communication.",
            logo: one,
        },
    ];

    return (
        <div className="bg-[#0E0E0E] flex flex-col items-center py-4 xl:px-[8rem] lg:px-[4rem] md:px-[3rem] px-[1rem]">
            <MainHeading className="mb-[5rem] mt-20" text="What We Do" />
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-x-10 md:gap-y-20 gap-24 w-full mb-[3rem]">
                {whatWeDoData.map(({ id, logo, title, description }) => {
                    return (
                        <div key={id} className="bg-[#202020] text-white text-center relative p-6 rounded-lg shadow-md border border-[#4F4F4F]">
                            <img
                                src={logo}
                                alt="Card Image"
                                className="absolute top-[-65px] left-1/2 transform -translate-x-1/2 xl:w-[8rem] xl:h-[8.5rem] lg:w-[8rem] lg:h-[8.5rem] md:w-[8rem] md:h-[8.5rem] w-[6.5rem] h-[7rem]"
                            />
                            <h2
                                className="xl:text-2xl lg:text-2xl md:text-xl text-base font-semibold mb-4 xl:mt-12 lg:mt-12 md:mt-12 mt-5"
                                dangerouslySetInnerHTML={{ __html: title }}
                            ></h2>
                            <p className="font-normal text-gray-300 text-left xl:text-base lg:text-base md:text-base text-lg">{description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default WhatWeDo;

// TYPES
type TWhatWeDoData = Array<{
    id: number;
    title: string;
    description: string;
    logo: string;
}>;
