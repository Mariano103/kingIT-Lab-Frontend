import { useState } from "react";

// IMAGES
import FireFliesLaptop from "../../assets/images/our_work_laptop_fireflies.png";
import SharkrollLaptop from "../../assets/images/our_work_laptop_sharkroll.png";
import VestaLaptop from "../../assets/images/our_work_laptop_vesta.png";
import CasineoLaptop from "../../assets/images/our_work_laptop_casineo.png";
import JollywaleLaptop from "../../assets/images/our_work_laptop_jollywale.png";

// COMPONENTS
import WrapperLayout from "../WrapperLayout";
import { Link, useNavigate } from "react-router-dom";

const SeeOurWork = () => {
    const navigate = useNavigate();
    const ourWorksData = [
        {
            id: 0,
            value: "Fireflies",
            text1: "Raised",
            text2: "$2.3M revenue and 2,000+ wallet",
            text3: "participation.",
            text4: "Fireflies was built in 3 months by our team which blends Web3 innovation with secure, seamless travel solutions. Generating $2.3M in revenue, 98% user satisfaction, and 2000+ wallet participation.",
            tags: ["Travel", "Binance", "Web App", "Token Launch"],
            laptop: FireFliesLaptop,
            url: "https://www.firefliestoken.com/"
        },
        {
            id: 1,
            value: "Sharkroll",
            text1: "Raised",
            text2: "$628K and gained 1.000+ wallet",
            text3: "participation.",
            text4: "Sharkroll was one of biggest casino project built by our team which blends secure and seamless Web3 innovation into a casino platform. Increasing in engagement with native token, SHRL.",
            tags: ["Casino", "Binance", "Token Launch"],
            laptop: SharkrollLaptop,
            url: "https://www.sharkroll.io/"
        },
        {
            id: 2,
            value: "Vesta",
            text1: "Own a Fraction of the",
            text2: "Future of Property",
            text3: "with Vesta",
            text4: "Empowered by King IT, Vesta bridges investors to tokenized real-world assets, unlocking growth in luxury properties and businesses through innovative opportunities.",
            tags: ["Real-World Asset", "NFT", "Property"],
            laptop: VestaLaptop,
            url: "https://www.vestagroup.io/"
        },
        {
            id: 3,
            value: "CasiNeo",
            text1: "Raised",
            text2: "$150k and Gained 450 Wallets",
            text3: "participation",
            text4: "CasiNeo redefines the casino experience by bringing transparency, security, and innovation through Web3 technology. Built on blockchain by KingIT, CasiNeo offers fair games, instant payouts, and true ownership of digital assets.",
            tags: ["Casino", "Binance", "Token Launch"],
            laptop: CasineoLaptop,
            url: "http://Casino.sharkroll.io"
        },
        {
            id: 4,
            value: "JollyWhale",
            text1: "Token with a Purpose to",
            text2: "Protect the Ocean",
            text3: "",
            text4: "JollyWhale transforms meme coins into a force for good. With monthly community-voted donations from every transaction, it merges profitability with meaningful impact, proving that every trade can make a difference.",
            tags: ["Token Launch", "Solana", "Environment"],
            laptop: JollywaleLaptop,
            url: "https://t.me/JollyWhaleOfficial/32"
        },
    ];

    // STATES
    const [selectedWork, setSelectedWork] = useState(0);

    // FUNCTIONS
    const selectWorkHandler = (value: number) => {
        setSelectedWork(value);
    };

    return (
        <div className="bg-[#0E0E0E] xl:mt-20">
            <WrapperLayout>
                <p className="xl:text-[4rem] lg:text-[3rem] md:text-[3rem] text-[3rem] text-center mb-[2.5rem] bg-gradient-to-r from-[#ffffff00] via-[#FFFFFF] to-[#ffffff00] bg-clip-text text-transparent">See Our Work</p>
                <div className="flex xl:flex-row lg:flex-row md:flex-col flex-col xl:gap-0 lg:gap-0 md:gap-10 gap-8 overflow-auto utilities no-scrollbar">
                    <div className="xl:w-[80%] lg:w-[80%] md:w-full w-full flex justify-between items-center">
                        {ourWorksData.map(({ id, value }) => {
                            return (
                                <p
                                    key={id}
                                    onClick={() => selectWorkHandler(id)}
                                    className={`${selectedWork === id ? "text-white border-b-2 border-b-[#4AB4FF]" : "text-[#969696]"
                                        } xl:text-[1.125rem] lg:text-[1.125rem] md:text-[1rem] p-[0.6rem] cursor-pointer`}
                                >
                                    {value}
                                </p>
                            );
                        })}
                    </div>
                    <div className="xl:w-[20%] lg:w-[20%] md:w-full xl:justify-center lg:justify-center md:justify-start justify-start items-center xl:block lg:block md:block hidden">
                        <button className="bg-black border-2 xl:text-[1rem] lg:text-[1rem] md:text-[1rem] px-[1rem] py-[0.625rem] border-white rounded-xl text-white"
                            onClick={() => navigate('/portfolio')}
                        >
                            See More Projects
                        </button>
                    </div>
                </div>
                {
                    ourWorksData.map(work =>
                        <div className={"flex xl:flex-row lg:flex-row md:flex-col-reverse flex-col-reverse min-h-[31.188rem] mt-[4rem] mb-[4rem] gap-10" + (selectedWork === work.id ? "" : " hidden")}>
                            <div className="flex flex-col justify-center xl:w-[50%] lg:w-[50%] md:w-full">
                                <p className="text-[2rem] font-medium text-white">
                                    {work.text1 + " "}
                                    <span
                                        className="bg-gradient-to-r from-[#63E2FF] via-[#FFD154] to-[#63E2FF]  bg-clip-text text-transparent"
                                    >
                                        {work.text2}
                                    </span>{" " + work.text3}
                                </p>
                                <p className="text-[#F0F0F0] text-[1.125rem] font-extralight mt-[1.5rem]">
                                    {work.text4}
                                </p>
                                <div className="w-fit mt-[1.5rem] flex-wrap">
                                    {
                                        work.tags.map((tag, index) =>
                                            <button className={"mr-4 w-fit text-white font-medium text-base bg-[#47474759] py-[0.375rem] px-[0.75rem] rounded-xl" + (index === work.tags.length - 1 ? " xl:mt-0 lg:mt-0 md:mt-0 mt-4" : "")}>
                                                {tag}
                                            </button>
                                        )
                                    }
                                </div>
                                <div className="flex xl:mt-[3rem] lg:mt-[3rem] md:mt-[3rem] mt-[2rem] xl:justify-start lg:justify-start md:justify-start justify-center">
                                    <Link className="w-fit bg-white text-black font-medium px-[1rem] py-[0.5rem] rounded-lg text-center"
                                        to={work.url}
                                        target="_blank"
                                    >Read More</Link>
                                </div>
                            </div>
                            <div className="xl:w-[50%] lg:w-[50%] md:w-full flex justify-center items-center">
                                <img src={work.laptop} className="xl:w-full lg:w-full md:w-[70%] w-full" />
                            </div>
                        </div>
                    )
                }
            </WrapperLayout>
        </div>
    );
};

export default SeeOurWork;
