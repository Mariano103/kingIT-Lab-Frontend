/* eslint-disable @typescript-eslint/no-explicit-any */
// IMAGES
import OurSolutionBgImg from "../../../assets/images/grid.png";
import { API_URL } from "../../../Constants/config";
import WrapperLayout from "../../WrapperLayout";

// COMPONENTS

const OurSolution = (param: any) => {

    const project = param.project;
    if (project)
        return (
            <div className="relative mt-[5rem] flex justify-center items-center">
                <img src={OurSolutionBgImg} className="absolute" />
                <WrapperLayout className="z-10">
                    <p className="md:text-[6rem] text-[3rem] text-center bg-gradient-to-r from-[#ffffff00] via-[#FFFFFF] to-[#ffffff00] bg-clip-text text-transparent">
                        Our Solution
                    </p>
                    <div className="flex justify-center">
                        <img src={API_URL + project.solution_img.url} className="" />
                    </div>
                    <ol className="list-decimal mt-10">
                        {
                            project.solution && project.solution.map((solution: { content: string }, id: number) =>
                                <li className="text-white font-extralight text-[1rem]" key={id}>
                                    {solution.content}
                                </li>
                            )
                        }
                    </ol>
                </WrapperLayout>
            </div>
        );
};

export default OurSolution;
