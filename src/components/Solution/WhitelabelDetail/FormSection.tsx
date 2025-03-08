// COMPONENTS
import Dropdown from "../../Inputs/Dropdown";
import TextBox from "../../Inputs/InputBox";
import TextArea from "../../Inputs/TextArea";
import WrapperLayout from "../../WrapperLayout";

const FormSection = () => {
    return (
        <WrapperLayout className="mt-[8rem] mb-[6.25rem]">
            <div className="mb-[1.5rem]">
                <p className="text-white font-medium text-[2rem] mb-[1rem]">Not sure what product you should get? Let’s discuss</p>
                <p className="text-[#EAEAEA] text-[1.125rem] font-extralight">
                    Let’s discuss your business objectives with our team to determine what product that suit you the most. This is a free of charge
                    service.
                </p>
            </div>
            <div className="grid grid-cols-2 gap-x-[1rem]">
                <div className="col-span-2 flex flex-col gap-[0.5rem] mb-[1.25rem]">
                    <TextArea rows={5} placeholder="Type your message here" title="Tell Us Your Enquiries" />
                </div>
                <TextBox type="text" placeholder="Name" title="Name" className="mb-[1.25rem] xl:col-span-1 lg:col-span-1 md:col-span-2 col-span-2" />
                <TextBox
                    type="tel"
                    placeholder="+1 123 456 7890"
                    title="Phone Number"
                    className="mb-[1.25rem] xl:col-span-1 lg:col-span-1 md:col-span-2 col-span-2"
                />
                <TextBox
                    type="email"
                    placeholder="name@office.com"
                    title="Email"
                    className="mb-[1.25rem] xl:col-span-1 lg:col-span-1 md:col-span-2 col-span-2"
                />
                <TextBox
                    type="text"
                    placeholder="@username"
                    title="Telegram"
                    className="mb-[1.25rem] xl:col-span-1 lg:col-span-1 md:col-span-2 col-span-2"
                />

                <Dropdown
                    title="What’s your budget range?"
                    optionList={[]}
                    className="mb-[1.25rem] xl:col-span-1 lg:col-span-1 md:col-span-2 col-span-2"
                />
                <Dropdown title="How did you hear about us?" optionList={[]} className="xl:col-span-1 lg:col-span-1 md:col-span-2 col-span-2" />

                <div className="w-full flex justify-end col-span-2">
                    <button className="bg-white text-black font-medium text-[1.125rem] rounded-lg w-fit py-[0.5rem] px-[2rem] mt-[1rem]">
                        Submit
                    </button>
                </div>
            </div>
        </WrapperLayout>
    );
};

export default FormSection;
