/* eslint-disable @typescript-eslint/no-explicit-any */

// COMPONENTS
import { API_URL } from "../../../Constants/config";
import WrapperLayout from "../../WrapperLayout";

const TopSection = (param: any) => {

    const project = param.project;

    if (project)
        return (
            <WrapperLayout className="mt-8">
                <div className="flex xl:flex-row lg:flex-row md:flex-col-reverse flex-col-reverse">
                    <div className="xl:w-[50%] lg:w-[50%] md:w-full w-full flex flex-col gap-[1.5rem]">
                        <p className="xl:text-[3rem] lg:text-[2.5rem] md:text-[2rem] text-[2rem] text-white">
                            {project.title}
                        </p>
                        <p className="text-white font-light text-[1rem]">
                            {project.about_project}
                        </p>
                        <div className="flex flex-wrap gap-[1rem]">
                            {
                                project.badge && project.badge.map((badge: { title: string }, id: number) =>
                                    <p key={id} className="bg-[#47474759] text-center py-[0.2rem] px-[0.7rem] text-white rounded-md font-light">{badge.title}</p>
                                )
                            }
                        </div>
                        <div>
                            <button className="text-white py-[0.4rem] px-[0.9rem] border-2 rounded-xl">Visit Website</button>
                        </div>
                    </div>
                    <div className="xl:w-[50%] lg:w-[50%] md:w-full w-full flex justify-center items-center">
                        <img src={API_URL + project.logo.url} className="" />
                    </div>
                </div>
            </WrapperLayout>
        );
};

export default TopSection;
