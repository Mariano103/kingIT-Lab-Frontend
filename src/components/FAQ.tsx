import { FC, useState } from "react";

// IMAGES
import backgroundImage from "../assets/images/bg.png";

// ICONS
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ: FC<Props> = ({ className = "", faqData = [] }) => {
    // MOCK DATA
    // const faqData: TFaqData = [
    //     {
    //         question: "What is KingIT Labs’ mission?",
    //         answer: "Our mission is to empower businesses with cutting-edge Web3 software solutions, focusing on Blockchain, Decentralized applications, and Tokenomics.",
    //     },
    //     {
    //         question: "Where is KingIT Labs located?",
    //         answer: "Our mission is to empower businesses with cutting-edge Web3 software solutions, focusing on Blockchain, Decentralized applications, and Tokenomics.",
    //     },
    //     {
    //         question: "How long has KingIT Labs been in Operation?",
    //         answer: "Our mission is to empower businesses with cutting-edge Web3 software solutions, focusing on Blockchain, Decentralized applications, and Tokenomics.",
    //     },
    //     {
    //         question: "Who are your Key Clients?",
    //         answer: "Our mission is to empower businesses with cutting-edge Web3 software solutions, focusing on Blockchain, Decentralized applications, and Tokenomics.",
    //     },
    //     {
    //         question: "How can I collaborate with KingIT Labs?",
    //         answer: "Our mission is to empower businesses with cutting-edge Web3 software solutions, focusing on Blockchain, Decentralized applications, and Tokenomics.",
    //     },
    // ];

    // STATES & REFS
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    // FUCTIONS
    const toggleAnswer = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div
            className={`${className} bg-[#0E0E0E] flex flex-col py-1 xl:px-[9rem] lg:px-[1.5rem] md:px-[1.5rem] px-[0.8rem]`}
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Center Text */}
            <div className="mt-[2rem] mb-[2.5rem]">
                <div className="w-fit xl:text-left lg:text-left md:text-left text-left xl:text-[4rem] lg:text-[4rem] md:text-[3rem] text-[2rem] font-[200] bg-gradient-to-r from-[#ffffff80] via-[#FFFFFF] to-[#ffffff80] bg-clip-text text-transparent xl:mb-[1rem] lg:mb-[1rem]">
                    Frequently Asked Questions
                </div>
                {
                    window.location.href.includes('solution') ?
                        <p className="xl:text-left lg:text-left md:text-left text-left xl:text-[2rem] lg:text-[2rem] md:text-[1.5rem] text-[1rem] font-[150] text-white xl:mb-[1rem] lg:mb-[1rem]">
                            About Whitelabel
                        </p> :
                        <></>
                }
            </div>

            {/* FAQ Questions and Answers */}
            <div className="w-full text-white ml-0 sm:ml-0">
                {faqData.map((item, index) => (
                    <div key={index} className="text-left mb-6 rounded-lg shadow-md w-full border-b border-[#393939] pb-3">
                        {/* Question */}
                        <div
                            onClick={() => toggleAnswer(index)}
                            className="text-blue-500 cursor-pointer flex items-center justify-between"
                        >
                            <p className="xl:text-[1.5rem] lg:text-[1.5rem] md:text-[1.5rem] text-[1.1rem]">{item.question}</p>
                            {activeIndex === index ? <FaChevronUp className="text-blue-500" /> : <FaChevronDown className="text-blue-500" />}
                        </div>

                        {/* Answer */}
                        {activeIndex === index && (
                            <p className="mt-3 xl:text-[1rem] lg:text-[1rem] md:text-[1rem] text-[0.75rem] font-extralight break-all text-[#FFFFFF] leading-relaxed">
                                {item.answer}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;

// TYPES
type TFaqData = Array<{
    question: string;
    answer: string;
}>;
interface Props {
    className?: string;
    faqData: TFaqData;
}
