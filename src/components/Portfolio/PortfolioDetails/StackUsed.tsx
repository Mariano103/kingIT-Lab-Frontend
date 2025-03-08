/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_URL } from "../../../Constants/config";

// COMPONENTS
import WrapperLayout from "../../WrapperLayout";

const StackUsed = (param: any) => {

    const project = param.project;
    if (project && project.stack && project.stack[0].stack)
        return (
            <WrapperLayout className="mt-[8rem] mb-[4rem]">
                <p className="text-center text-white text-[2.5rem]">Stack Used</p>
                <div className="flex justify-center flex-wrap mt-[2rem] gap-20 w-[90%] mx-auto">
                    {
                        project.stack.map((stack: any, id: number) =>
                            <img src={API_URL + stack.stack.url} className="max-h-[200px]" key={id} />
                        )
                    }
                </div>
            </WrapperLayout>
        );
};

export default StackUsed;
