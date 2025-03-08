// IMAGES
import ApplicationSupportBanner from "../../assets/images/application_support_banner.png";

const ApplicationSupportCard = () => {
    return (
        <div className="bg-[#202020] border-[1px] border-[#808080] p-[2rem] rounded-md mt-[3rem]">
            <p className="text-white text-[3rem] font-extralight text-center">Application Support</p>
            <div className="w-full flex justify-center items-center mt-[1.5rem]">
                <img src={ApplicationSupportBanner} className=" w-full" />
            </div>
            <div>
                <div>
                    <p className="font-bold text-white text-[1.5rem] mt-[1rem] mb-[0.5rem]">24/7 Monitoring and Support</p>
                    <div className="ml-10">
                        <p className="text-white font-medium flex">
                            <p className="text-lg">a.&nbsp;</p>
                            <p className="text-lg">Proactive Monitoring</p>
                        </p>
                        <p className="ml-4 font-extralight text-white">Continuous monitoring to ensure application uptime and optimal performance.</p>
                    </div>
                    <div className="ml-10">
                        <p className="text-white font-medium flex">
                            <p className="text-lg">b.&nbsp;</p>
                            <p className="text-lg">Rapid Incident Resolution</p>
                        </p>
                        <p className="ml-4 font-extralight text-white">
                            Expert incident management for quick identification and resolution of issues.
                        </p>
                    </div>
                    <div className="ml-10">
                        <p className="text-white font-medium flex">
                            <p className="text-lg">c.&nbsp;</p>
                            <p className="text-lg">Seamless Team Integration</p>
                        </p>
                        <p className="ml-4 font-extralight text-white">
                            Collaboration with your internal teams to deliver a seamless support experience.
                        </p>
                    </div>
                </div>


                <div>
                    <p className="font-bold text-white text-[1.5rem] mt-[1rem] mb-[0.5rem]">Functional Support (Optional) </p>

                    <div className="ml-10">
                        <p className="text-white font-medium text-lg flex">
                            <p>a.&nbsp;</p>
                            <p>Tailared Functional Assistance</p>
                        </p>
                        <p className="ml-4 font-extralight text-white">
                            Provide additional functional support if requried by the application owner.
                        </p>
                    </div>

                    <div className="ml-10">
                        <p className="text-white font-medium text-lg flex">
                            <p>b.&nbsp;</p>
                            <p>Dedicated Experts</p>
                        </p>
                        <p className="ml-4 font-extralight text-white">
                            Functional experts to address application-specific challenges, configurations, and workflows.
                        </p>
                    </div>

                    <div className="ml-10">
                        <p className="text-white font-medium text-lg flex">
                            <p>c.&nbsp;</p>
                            <p>Enhanced Support Scope</p>
                        </p>
                        <p className="ml-4 font-extralight text-white">
                            Going beyond infrastructure and technical issues to help with application functionality.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ApplicationSupportCard;
