/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../navigation/routes";

// COMPONENTS
import PortfolioProjectCard from "../PortfolioProjectCard";
import WrapperLayout from "../../WrapperLayout";
import { useEffect, useState } from "react";
import { API_URL } from "../../../Constants/config";

const PortfolioProjects = (param: { id: string }) => {
    const id = param.id;
    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(API_URL + '/api/projects/?sort=createdAt');
            const data = await response.json();
            const otherProjects = data.docs.filter((project: any) => project.id !== id);
            setProjects(otherProjects.slice(0, 2));
        }
        fetchData();
    }, [])

    // FUNCTIONS
    const cardClickHandler = (id: number) => {
        navigate(`${ROUTES.PORTFOLIO.PATH}/${id}`);
    };

    if (id && projects)
        return (
            <WrapperLayout className="mb-10">
                <div className="bg-gradient-to-r from-[#ffffff80] via-[#FFFFFF] to-[#ffffff80] bg-clip-text text-transparent text-[3rem] text-center mb-16 w-fit mx-auto">Other Project to See</div>
                <div className="grid xl:grid-cols-2 lg:grid-cols-2 gap-x-5 xl:gap-y-12 lg:gap-y-[6rem] md:gap-y-14 gap-y-14">
                    {
                        projects.map((project: any) =>
                            <PortfolioProjectCard
                                key={project.id}
                                image={API_URL + project.logo.url}
                                text1={project.name}
                                text2={project.desc_title}
                                text3={project.desc_detail}
                                tagList={project.badge.map((badge: any) => badge.title)}
                                backgroundColor={project.color}
                                buttonText="Learn More"
                                imageClassName="xl:-top-[4.5rem] lg:-top-[3.5rem] md:-top-[4.7rem] -top-[3rem]"
                                onClick={() => cardClickHandler(project.id)}
                            />
                        )
                    }
                    {/* <PortfolioProjectCard
                    image={cardImg6}
                    text1="Aurum Vestra Asset"
                    text2="Optimal Investments with Analytics and Advisory Tools"
                    text3="Aurum Vestra, powered by King IT’s expertise, delivers advanced portfolio tools and analytics to investors and advisors, enabling strategic growth and financial success."
                    tagList={["Asset Management", "Extension"]}
                    className="bg-gradient-to-b from-[#171714] to-[#1E1D0E]"
                    buttonText="Visit JollyWhale"
                    imageClassName="xl:-top-[5.3rem] lg:-top-[4.5rem] md:-top-[5rem] -top-[3.5rem]"
                    onClick={() => cardClickHandler(6)}
                />

                <PortfolioProjectCard
                    image={cardImg4}
                    text1="CasiNeo"
                    text2="Raised $150k and Gained 450 Wallets Participation"
                    text3="CasiNeo redefines the casino experience by bringing transparency, security, and innovation through Web3 technology. Built on blockchain by KingIT, CasiNeo offers fair games, instant payouts, and true ownership of digital assets."
                    tagList={["Token Crowdsale", "Casino"]}
                    className="bg-gradient-to-b from-[#1A191A] to-[#211320]"
                    buttonText="Visit CasiNeo"
                    imageClassName="xl:-top-[1.7rem] lg:-top-[1.3rem] md:-top-[1.5rem] -top-[1.5rem]"
                    onClick={() => cardClickHandler(4)}
                /> */}
                </div>
            </WrapperLayout>
        );
};

export default PortfolioProjects;
