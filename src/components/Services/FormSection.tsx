import { FC, useEffect, useState } from "react";

// IMAGES
import FormBGLeftImage from "../../assets/images/form_bg_left.png";
import FormBGRightImage from "../../assets/images/form_bg_right.png";

// COMPONENTS
import Dropdown from "../Inputs/Dropdown";
import TextBox from "../Inputs/InputBox";
import TextArea from "../Inputs/TextArea";
import { API_URL } from "../../Constants/config";

type consultationType = {
    idea: string;
    name: string;
    phone: string;
    email: string;
    telegram: string;
    budget: string;
    hear: string
}
const FormSection: FC<Props> = ({ className = "" }) => {

    const [consultation, setConsultation] = useState<consultationType>({
        idea: '',
        name: '',
        phone: '',
        email: '',
        telegram: '',
        budget: '',
        hear: ''
    });
    const [consultHistoryCount, setConsultHistoryCount] = useState<number>(0);

    useEffect(() => {
        const fetchData = async () => {
            const currentDate = new Date();
            const startOfMonth = new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                1
            );
            const req = await fetch(`${API_URL}/api/consultations?where[createdAt][greater_than_equal]=${startOfMonth.toDateString()}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            const data = await req.json();
            setConsultHistoryCount(data.totalDocs);
            console.log(data.totalDocs);

        };
        fetchData();
    }, []);

    const handleSubmit = async () => {
        try {
            const req = await fetch(`${API_URL}/api/consultations`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(consultation),
            })
            const data = await req.json();
            if (data.message === "Consultation successfully created.")
                setConsultHistoryCount(consultHistoryCount + 1);

        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className={`${className} w-full bg-[#0E0E0E]  relative pt-[10rem] flex justify-center items-center pb-20`} id="Contact_Form">
            <img src={FormBGLeftImage} className="absolute top-0 left-0 mt-[10rem] animate-[bounce_5s_infinite]" />
            <div className="z-10 w-full xl:px-[8rem] lg:px-[4rem] md:px-[3rem] px-[1rem]">
                <div className="bg-[#202020] p-[2rem] rounded-lg border-[1px] border-[#808080]" id="ContactUs">
                    <div className="mb-[1.5rem]">
                        <p className="text-white font-medium text-[2rem] mb-[1rem]">Let’s Turn Your Ideas Into Reality</p>
                        <p className="text-[#EAEAEA] text-[1.125rem] font-extralight">
                            Share your project details — goals, challenges, and timelines with us and let’s craft the perfect solution together. We’ll
                            respond within 24 hours. NDA? We’ll sign it and start the discussion.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-x-[1rem]">
                        <div className="col-span-2 flex flex-col gap-[0.5rem] mb-[1.25rem]">
                            <TextArea value={consultation?.idea} onChange={(e) => setConsultation({ ...consultation, idea: e.target.value })} placeholder="Type your message here" title="Describe Your Idea" />
                            <p className="text-sm text-[#A5A5A5]">Tell us more about your project, goals, or challenges.</p>
                        </div>
                        <TextBox
                            value={consultation.name}
                            onChange={(e) => setConsultation({ ...consultation, name: e.target.value })}
                            type="text"
                            placeholder="Name"
                            title="Name"
                            className="mb-[1.25rem] xl:col-span-1 lg:col-span-1 md:col-span-2 col-span-2"
                        />
                        <TextBox
                            value={consultation.phone}
                            onChange={(e) => setConsultation({ ...consultation, phone: e.target.value })}
                            type="tel"
                            placeholder="+1 123 456 7890"
                            title="Phone Number"
                            className="mb-[1.25rem] xl:col-span-1 lg:col-span-1 md:col-span-2 col-span-2"
                        />
                        <TextBox
                            value={consultation.email}
                            onChange={(e) => setConsultation({ ...consultation, email: e.target.value })}
                            type="email"
                            placeholder="name@office.com"
                            title="Email"
                            className="mb-[1.25rem] xl:col-span-1 lg:col-span-1 md:col-span-2 col-span-2"
                        />
                        <TextBox
                            value={consultation.telegram}
                            onChange={(e) => setConsultation({ ...consultation, telegram: e.target.value })}
                            type="text"
                            placeholder="@username"
                            title="Telegram"
                            className="mb-[1.25rem] xl:col-span-1 lg:col-span-1 md:col-span-2 col-span-2"
                        />

                        <Dropdown
                            value={consultation.budget}
                            onChange={(e) => setConsultation({ ...consultation, budget: e.target.value })}
                            title="What’s your budget range?"
                            optionList={[
                                { title: '0 - 10,000', value: '0 - 10,000' },
                                { title: '10,000 - 50,000', value: '10,000 - 50,000' },
                                { title: '50,000 - 150,000', value: '50,000 - 150,000' },
                                { title: '150,000 <', value: '150,000 <' }]}
                            className="mb-[1.25rem] xl:col-span-1 lg:col-span-1 md:col-span-2 col-span-2"
                        />
                        <Dropdown
                            value={consultation.hear}
                            onChange={(e) => setConsultation({ ...consultation, hear: e.target.value })}
                            title="How did you hear about us?"
                            optionList={[
                                { title: 'Email', value: 'Email' },
                                { title: 'Linkedin', value: 'Linkedin' },
                                { title: 'Telegram', value: 'Telegram' },
                                { title: 'X', value: 'X' },
                                { title: 'Partnerships', value: 'Partnerships' },
                            ]}
                            className="xl:col-span-1 lg:col-span-1 md:col-span-2 col-span-2"
                        />

                        <div className="w-full flex justify-end col-span-2">
                            <div>
                                <button className="bg-white text-black font-medium text-[1.125rem] rounded-lg sm:w-fit py-[0.5rem] px-[2rem] mt-[4rem] w-full" onClick={handleSubmit}>
                                    {
                                        window.location.href.includes('poc') ?
                                            "Enquire POC" :
                                            window.location.href.includes('mvp') ?
                                                "Enquire MVP" :
                                                window.location.href.includes('fdp') ?
                                                    "Enquire Full-Deployment Production" :
                                                    window.location.href.includes('support') ?
                                                        "Enquire Support Services" :
                                                        consultHistoryCount < 5 ?
                                                            "Get Your Free Consultation" :
                                                            "Get your Consultation"
                                    }
                                </button>
                                {
                                    consultHistoryCount < 5 ?
                                        <p className="text-white">{`${5 - consultHistoryCount} free seats consultations for this month!`}</p> :
                                        <></>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src={FormBGRightImage} className="absolute right-0 bottom-0 mb-[5rem] animate-[bounce_5s_infinite]" />
        </div>
    );
};

export default FormSection;

// TYPES
interface Props {
    className?: string;
}
