// IMAGES
import { useNavigate } from "react-router-dom";
import HomeBgNeedsLeft from "../../assets/images/home_bg_needs_left.png";
import HomeBgNeedsRight from "../../assets/images/home_bg_needs_right.png";

// COMPONENTS
import WrapperLayout from "../WrapperLayout";
import ROUTES from "../../navigation/routes";

const SuitesYourNeeds = () => {

    const navigate = useNavigate();
    return (
        <div className="bg-[#0E0E0E] relative pt-10">
            <WrapperLayout>
                <img src={HomeBgNeedsRight} className="absolute right-0 top-[8rem] xl:hidden lg:hidden md:hidden block" />

                <p className="xl:text-[4rem] lg:text-[4rem] md:text-[3rem] text-[3rem] bg-gradient-to-r from-[#ffffff00] via-[#FFFFFF] to-[#ffffff00] bg-clip-text text-transparent text-center mb-[3rem]">
                    Project That Suits Your Needs
                </p>

                <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-[2rem] xl:mb-[10rem] lg:mb-[6rem] md: mb-[2rem]">
                    {/* CARD #1 */}
                    <div className="z-10 w-full flex flex-col justify-between bg-[#202020] text-white relative p-[1.5rem] rounded-lg shadow-md border border-[#4F4F4F]">
                        <div>
                            <p className="text-[#4AB4FF] text-[2rem] font-bold">PROOF OF CONCEPT</p>
                            <p className="text-[1.3rem] font-lexend font-thin mt-[1rem] mb-[1rem]">
                                Demonstrate the feasibility or potential value of your idea or approach to validate it before committing significant
                                resources to its development.
                            </p>
                            <ul className="list-disc ml-8">
                                <li className="text-[1.3rem] font-lexend font-thin mb-[2rem] mt-[2rem]">Early-stage and self-funded teams</li>
                                <li className="text-[1.3rem] font-lexend font-thin mb-[2rem] mt-[2rem]">Low cost</li>
                                <li className="text-[1.3rem] font-lexend font-thin mb-[2rem] mt-[2rem]">Tool to secure venture funding</li>
                                <li className="text-[1.3rem] font-lexend font-thin mb-[2rem] mt-[2rem]">Tool to demonstrate product value to stakeholders</li>
                            </ul>
                            <button className="bg-[#47474759] rounded-md text-white text-base px-[0.75rem] py-[0.3rem] text-center">
                                Typical delivery time 2 to 8 weeks
                            </button>
                        </div>
                        <button className="text-white border-2 border-white w-full py-[0.62rem] rounded-xl mt-[2rem] xl:block lg:block md:block hidden" onClick={() => navigate(ROUTES.SERVICES.POC.PATH)}>
                            Inquire for POC
                        </button>
                        <button className="text-black bg-white font-medium w-full py-[0.62rem] rounded-xl mt-[2rem] xl:hidden lg:hidden md:hidden block" onClick={() => navigate(ROUTES.SERVICES.POC.PATH)}>
                            Inquire for POC
                        </button>
                    </div>

                    {/* CARD #2 */}
                    <div className="z-10 flex flex-col justify-between w-full bg-[#202020] text-white relative p-[1.3rem] rounded-lg shadow-md border border-[#4F4F4F]">
                        <div>
                            <p className="text-[#4AB4FF] text-[2rem] font-bold">MVP</p>
                            <p className="text-[1.3rem] font-lexend font-thin mt-[1rem] mb-[1rem]">
                                A cost-effective way to validate market demand and gather feedback on your product or service, it’s a great way to
                                showcase your value proposition to target customers and improve chances of success.
                            </p>
                            <ul className="list-disc ml-8">
                                <li className="text-[1.3rem] font-lexend font-thin mb-[2rem] mt-[2rem]">
                                    Suitable for teams with seed funding, ready to launch their first live product
                                </li>
                                <li className="text-[1.3rem] font-lexend font-thin mb-[2rem] mt-[2rem]">
                                    Low cost strategy for quickly bringing a product to market
                                </li>
                                <li className="text-[1.3rem] font-lexend font-thin mb-[2rem] mt-[2rem]">Establish a foundation for future feature iterations</li>
                            </ul>
                            <button className="bg-[#47474759] rounded-md text-white text-base px-[0.75rem] py-[0.3rem] text-center">
                                Typical delivery time 12 weeks
                            </button>
                        </div>
                        <button className="text-white border-2 border-white w-full py-[0.62rem] rounded-xl mt-[2rem] xl:block lg:block md:block hidden" onClick={() => navigate(ROUTES.SERVICES.MVP.PATH)}>
                            Inquire for MVP
                        </button>
                        <button className="text-black bg-white font-medium w-full py-[0.62rem] rounded-xl mt-[2rem] xl:hidden lg:hidden md:hidden block" onClick={() => navigate(ROUTES.SERVICES.MVP.PATH)}>
                            Inquire for MVP
                        </button>
                    </div>

                    {/* CARD #3 */}
                    <div className="z-10 flex flex-col justify-between w-full bg-[#202020] text-white relative p-[1.3rem] rounded-lg shadow-md border border-[#4F4F4F]">
                        <div>
                            <p className="text-[#4AB4FF] text-[2rem] font-bold">FULL DEPLOYMENT</p>
                            <p className="text-[1.3rem] font-lexend font-thin mt-[1rem] mb-[1rem]">
                                The production version is the final, fully tested product, ready for live use at scale, with ongoing developer support
                                for bugs and updates.
                            </p>
                            <ul className="list-disc ml-8">
                                <li className="text-[1.3rem] font-lexend font-thin mb-[2rem] mt-[2rem]">
                                    Suitable for teams with sufficient funding, ready to scale up
                                </li>
                                <li className="text-[1.3rem] font-lexend font-thin mb-[2rem] mt-[2rem]">Deploy robust, industry-leading software</li>
                                <li className="text-[1.3rem] font-lexend font-thin mb-[2rem] mt-[2rem]">
                                    Required for existing production systems rolling out additional features
                                </li>
                            </ul>
                            <button className="bg-[#47474759] rounded-md text-white text-base px-[0.75rem] py-[0.3rem] text-center">
                                Typical delivery time 14+ weeks
                            </button>
                        </div>
                        <button className="text-white border-2 border-white w-full py-[0.62rem] rounded-xl mt-[2rem] xl:block lg:block md:block hidden" onClick={() => navigate(ROUTES.SERVICES.FDP.PATH)}>
                            Inquire for Full Deployment
                        </button>
                        <button className="text-black bg-white font-medium w-full py-[0.62rem] rounded-xl mt-[2rem] xl:hidden lg:hidden md:hidden block" onClick={() => navigate(ROUTES.SERVICES.FDP.PATH)}>
                            Inquire for Full Deployment
                        </button>
                    </div>
                </div>
                <img src={HomeBgNeedsLeft} className="absolute bottom-4 left-0 xl:hidden lg:hidden md:hidden block" />
            </WrapperLayout>
        </div>
    );
};

export default SuitesYourNeeds;
