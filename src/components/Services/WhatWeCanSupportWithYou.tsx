import { useState } from "react";

// COMPONENTS
import ApplicationSupportCard from "./ApplicationSupportCard";
import HostingSupportCard from "./HostingSupportCard";

const WhatWeCanSupportWithYou = () => {
    // MOCK DATA
    const whyChooseData: Array<TWhyCHooseData> = [
        {
            id: 1,
            title: "Expertise You Can Trust",
            description: [
                {
                    title: "",
                    desc: "A team of certified professionals with expertise in AWS cloud and application support.",
                },
                {
                    title: "",
                    desc: "Proven experience in managing diverse and complex IT environments.",
                },
            ],
        },
        {
            id: 2,
            title: "Customer-Centric Approach",
            description: [
                {
                    title: "Flexible Support Plans",
                    desc: "24/7, 16/5, or 8/5 support to align with operational needs.",
                },
                {
                    title: "Customized Services",
                    desc: "Tailored to address specific client challenges and goals.",
                },
                {
                    title: "Transparent Communication",
                    desc: "Regular updates and proactive engagement for peace of mind.",
                },
            ],
        },
        {
            id: 3,
            title: "End-to-End Support",
            description: [
                {
                    title: "Comprehensive Coverage",
                    desc: "From architecture design and deployment to continuous monitoring and incident resolution.",
                },
                {
                    title: "Ongoing Maintenance",
                    desc: "Ensuring seamless application operations.",
                },
            ],
        },
        {
            id: 4,
            title: "Scalable and Cost-Efficient Solutions",
            description: [
                {
                    title: "Adaptability",
                    desc: "Scalable support services designed to grow with your business.",
                },
                {
                    title: "Cost Savings",
                    desc: "AWS cost optimization strategies to maximize budgets.",
                },
            ],
        },
        {
            id: 5,
            title: "Functional & Technical Excellence",
            description: [
                {
                    title: "Comprehensive Support",
                    desc: "Includes optional functional support for specific application needs (Conditions Apply).",
                },
                {
                    title: "Integrated Approach",
                    desc: "Covers both technical and functional aspects for holistic support.",
                },
            ],
        },
        {
            id: 6,
            title: "Proven Results",
            description: [
                {
                    title: "",
                    desc: "Trusted by clients worldwide for ensuring application reliability and cost efficiency.",
                },
                {
                    title: "",
                    desc: "Case studies and testimonials showcase our ability to deliver exceptional outcomes.",
                },
            ],
        },
    ];

    // STATES
    const [selectedService, setSelectedService] = useState(0);

    // FUNCTIONS
    const selectServiceHandler = (value: number) => {
        setSelectedService(value);
    };

    return (
        <>
            <p className="text-center text-[2.5rem] bg-gradient-to-r from-[#ffffff00] via-[#FFFFFF] to-[#ffffff00] bg-clip-text text-transparent">What Can We Support You With?</p>
            <div className="flex items-center gap-[1.5rem] mt-[3rem]">
                <button
                    onClick={() => selectServiceHandler(0)}
                    className={`${selectedService === 0 ? "bg-[#202020] border-[1px] border-[#808080]" : "font-extralight"
                        } py-[1.5rem] text-white w-full text-center rounded-md`}
                >
                    Application Support
                </button>
                <button
                    onClick={() => selectServiceHandler(1)}
                    className={`${selectedService === 1 ? "bg-[#202020] border-[1px] border-[#808080]" : "font-extralight"
                        } py-[1.5rem] text-white w-full text-center rounded-md`}
                >
                    Hosting Cost Analysis & Management
                </button>
            </div>

            {selectedService === 0 && <ApplicationSupportCard />}
            {selectedService === 1 && <HostingSupportCard />}

            <div className="mb-[3.5rem] mt-[7rem]">
                <p className="bg-gradient-to-r from-[#ffffff00] via-[#FFFFFF] to-[#ffffff00] bg-clip-text text-transparent text-[2.5rem] font-extralight text-center mb-[2rem]">Why Choose Us</p>
                <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-[1.188rem]">
                    {whyChooseData.map((item) => {
                        return (
                            <div className="w-full min-h-[18.188rem] bg-[#202020] border-[1px] border-[#808080] p-[1.5rem] rounded-md">
                                <p className="text-white font-bold text-[1.5rem]">{item.title}</p>
                                <ul className="list-disc text-white ml-7 mt-[1rem]">
                                    {item.description.map((element) => {
                                        return (
                                            <li>
                                                {element.title && <p className="text-lg text-white font-medium">{element.title}</p>}
                                                <p className="text-lg font-extralight text-white">{element.desc}</p>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default WhatWeCanSupportWithYou;

// TYPES

type TWhyCHooseData = {
    id: number;
    title: string;
    description: Array<{
        title: string;
        desc: string;
    }>;
};
