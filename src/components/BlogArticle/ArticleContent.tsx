/* eslint-disable @typescript-eslint/no-explicit-any */
// IMAGES
import faceBook from "../../assets/images/facebook.png";
import x from "../../assets/images/x.png";
import instagram from "../../assets/images/instagram.png";
import linkedIn from "../../assets/images/linkedIn.png";
import youtube from "../../assets/images/youtube.png";
import spotify from "../../assets/images/spotify.png";

// COMPONENTS
import SocialMedia from "./SocialMedia";
import RichTextRenderer from "../RichTextRender";
import { useState } from "react";
import { API_URL } from "../../Constants/config";

const ArticleContent = (param: any) => {

    const blog = param.blog;
    // MOCK DATA
    const followUsOnData: Array<TFollowUsOnData> = [
        {
            id: 1,
            Icon: faceBook,
            value: "207",
        },
        {
            id: 2,
            Icon: x,
            value: "510",
        },
        {
            id: 3,
            Icon: instagram,
            value: "2k",
        },
        {
            id: 4,
            Icon: linkedIn,
            value: "1.3k",
        },
        {
            id: 5,
            Icon: youtube,
            value: "656",
        },
        {
            id: 6,
            Icon: spotify,
            value: "24k",
        },
    ];

    const [subscriber, setSubscriber] = useState<string>('');

    const handleSubscribe = async () => {
        try {
            const req = await fetch(`${API_URL}/api/subscribers`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: subscriber }),
            })
            const data = await req.json();
            alert(data.message);

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="grid xl:grid-cols-[70%_30%] lg:grid-cols-[70%_30%] md:grid-cols-1 text-white">
            {/* CONTENT */}
            <div className="w-full mb-[5rem]">
                <div className="flex flex-col gap-5 text-[#F0F0F0]">
                    <p className="text-[0.875rem] font-extralight text-left">
                        {blog.desc}
                    </p>
                </div>
                {
                    blog.content.map((content: any) =>
                        <>
                            <div className="mt-[2rem] mb-[2.5rem] flex items-start">
                                <svg className="mr-[0.8rem]" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path
                                        d="M21.823 30.002L19.3757 27.5534C20.5623 25.4759 21.6005 23.3983 22.4905 21.3208C23.3804 19.3174 23.8995 17.3512 24.0478 15.422L18.4858 14.1978L18.4858 3.40195H30.4998V11.1927C30.4998 15.793 29.6098 19.5029 27.83 22.3225C25.976 25.2162 23.9737 27.776 21.823 30.002ZM5.13697 30.002L2.68968 27.5534C3.87624 25.4759 4.91448 23.3983 5.80441 21.3208C6.69433 19.3174 7.21345 17.3512 7.36177 15.422L1.79976 14.1978V3.40195H13.8137V11.1927C13.8137 15.793 12.9238 19.5029 11.1439 22.3225C9.28994 25.2162 7.28761 27.776 5.13697 30.002Z"
                                        fill="#B0B0B0"
                                    />
                                </svg>
                                <span className="text-[1.75rem] italic">
                                    {content.subtitle}
                                </span>
                            </div>
                            <div className="flex flex-col gap-5 text-[#F0F0F0]">
                                <RichTextRenderer content={content.content} />
                            </div>
                        </>
                    )
                }

                {/* <div>
                    <p className="text-white text-[2rem] mt-[1rem] mb-[2.5rem]">Eu ridiculus fringilla aenean</p>
                    <div className="flex flex-col gap-5 text-[#F0F0F0]">
                        <p className="text-[0.875rem] font-extralight text-left">
                            Sociis consequat adipiscing sit curabitur donec sem luctus cras natoque vulputate dolor eget dapibus. Nec vitae eros
                            ullamcorper laoreet dapibus mus ac ante viverra. A aenean sit augue curabitur et parturient nisi sed enim. Nulla nec quis
                            sit quisque sem commodo ultricies neque. Lorem eget venenatis dui ante luctus ultricies tellus montes. Quis in sapien
                            tempus.
                        </p>
                        <ul className="list-disc pl-4">
                            <li className="text-[0.875rem] font-extralight">Crisp fresh iconic elegant timeless clean perfume</li>
                            <li className="text-[0.875rem] font-extralight">Neck straight sharp silhouette and dart detail</li>
                            <li className="text-[0.875rem] font-extralight">
                                Machine wash cold slim fit premium stretch selvedge denim comfortable low waist
                            </li>
                        </ul>
                        <p className="text-[0.875rem] font-extralight text-left">
                            See-through delicate embroidered organza blue lining luxury acetate-mix stretch pleat detailing. Leather detail shoulder
                            contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks patch pockets perennial
                            lapel collar flap chest pockets topline stitching cropped jacket. Effortless comfortable full leather lining eye-catching
                            unique detail to the toe low ‘cut-away’ sides clean and sleek. Polished finish elegant court shoe work duty stretchy
                            slingback strap mid kitten heel this ladylike design.
                        </p>
                    </div>
                </div> */}
            </div>

            {/* FOLLOW US SECTION */}
            <div className="xl:mb-0 lg:mb-0 md:mb-[2rem] mb-[2rem] w-full flex justify-end items-start">
                <div className="xl:w-[85%] lg:w-[85%] md:w-full">
                    <p className="text-white font-bold text-[1.125rem]">Follow Us</p>
                    <div className="flex items-center xl:w-fit lg:w-fit md:w-full xl:gap-[1.6rem] lg:gap-[1.6rem] md:gap-[1.6rem] gap-auto xl:justify-normal lg:justify-normal md:justify-normal justify-between ">
                        {followUsOnData.map((item) => {
                            return <SocialMedia key={item.id} Icon={item.Icon} text={item.value} />;
                        })}
                    </div>
                    <div className="flex flex-col gap-[0.75rem] mt-[2rem] xl:w-[87%] lg:w-[87%] md:w-full w-full">
                        <input
                            type="email"
                            className=" p-3 border border-[#393939] bg-[#1A1A1A] text-white placeholder-gray-500 rounded-md"
                            placeholder="Enter your email"
                            aria-label="Email input for newsletter subscription"
                            value={subscriber}
                            onChange={(e) => setSubscriber(e.target.value)}
                        />
                        <p className="text-[#B0B0B0] text-[0.75rem]">
                            Subscribe to our newsletter and receive a selection of cool articles every weeks
                        </p>
                        <button className="rounded-lg bg-white text-black py-[0.75rem] px-[4.3rem] w-fit text-[1.1rem] font-medium"
                            onClick={handleSubscribe}>
                            Subscription
                        </button>
                        <div className="flex items-start gap-[0.5rem] xl:mt-[1rem] lg:mt-[1rem] md:mt-[0.2rem] mt-[0.2rem]">
                            <input type="checkbox" className="" />
                            <span className="text-[#F0F0F0] font-extralight text-[0.625rem]">
                                By checking this box, you confirm that you have read and are agreeing to our terms of use regarding the storage of the
                                data submitted through this form.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleContent;

// TYPES
type TFollowUsOnData = {
    id: number;
    Icon: string;
    value: string;
};
