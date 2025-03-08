import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// IMAGES
import WhatTheySayBg from "../../assets/images/what_they_say_bg.png";
import WhatTheySayUser1 from "../../assets/images/what_they_say_user1.png";
import WhatTheySayUser2 from "../../assets/images/what_they_say_user2.png";
// import WhatTheySayUser3 from "../../assets/images/what_they_say_user3.png";

// COMPONENTS
import WrapperLayout from "../WrapperLayout";

const WhatTheySay = () => {
    // MOCK DATA
    const customImages = [
        {
            img: WhatTheySayUser1,
            name: "Robert Garcia",
            profession: "Cybersecurity Analyst",
            description:
                "KingITLabs innovative abilities and problem-solving skills in design projects are exceptional and providing efficient and practical design solutions. ",
        },
        {
            img: WhatTheySayUser2,
            name: "Isabelle Fletcher",
            profession: "Robotics Engineer",
            description:
                "KingITLabs ability in time management and project execution is equally admirable. Even under tight deadlines, you can complete tasks efficiently.",
        },
    ];

    // SLIDER CONFIG
    const sliderSettings = {
        slidesToShow: 2,
        autoplay: true,
        speed: 1000,
        centerMode: true,
        arrows: false,
        centerPadding: "60px",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    centerMode: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    centerMode: false,
                },
            },
        ],
        dots: true,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        appendDots: (dots: any) => <ul> {dots} </ul>,
    };

    return (
        <div className="bg-[#0E0E0E] relative xl:h-[40rem] lg:h-auto md:h-[40rem] h-auto overflow-hidden">
            <img src={WhatTheySayBg} className="absolute w-full xl:block lg:block md:block hidden" />
            <WrapperLayout>
                <p className="xl:text-[4rem] lg:text-[4rem] md:text-[3rem] text-[3rem] bg-gradient-to-r from-[#ffffff00] via-[#FFFFFF] to-[#ffffff00] bg-clip-text text-transparent text-center mb-[3rem]">Hear What They Say</p>
            </WrapperLayout>
            <div className="relative">
                <Slider {...sliderSettings}>
                    {customImages.map((item, index) => {
                        return (
                            <div key={index} className="px-3">
                                <div className="grid xl:grid-cols-2 p-6 xl:gap-6 lg:gap-0 md:gap-0 gap-3 bg-[#202020] rounded-lg shadow-md border border-[#4F4F4F]">
                                    <div className="w-full xl:h-[20rem] lg:h-[20rem] md:h-[15rem] h-fit flex flex-col">
                                        <div className="w-full h-[70%] rounded-xl overflow-hidden">
                                            <img src={item.img} className="w-full h-full" />
                                        </div>
                                        <div className="w-full xl:h-[30%] flex justify-center items-end xl:mt-0 lg:mt-2 md:mt-1 mt-2">
                                            <div className="flex flex-col text-center xl:gap-1">
                                                <span className="text-[#4AB4FF] font-bold xl:text-3xl lg:text-2xl md:text-xl text-2xl line-clamp-1">
                                                    {item.name}
                                                </span>
                                                <span className="text-[#B0B0B0] font-extralight xl:text-2xl lg:text-xl md:text-base text-base line-clamp-1">
                                                    {item.profession}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full xl:h-[20rem]">
                                        <span className="text-white xl:text-3xl lg:text-xl font-extralight">{item.description}</span>
                                    </div>
                                </div>
                                {/* <div className="flex xl:gap-10 lg:gap-10 md:gap-5 gap-5 xl:flex-row lg:flex-row md:flex-row flex-col w-full p-[1rem] xl:h-[20rem] lg:h-auto md:h-auto h-auto bg-[#202020] rounded-lg shadow-md border border-[#4F4F4F]">
                                    <div className="xl:w-[40%] lg:w-[40%] md:w-[50%] w-full">
                                        <div className="xl:h-[13rem] lg:h-[8rem] md:h-auto h-auto overflow-hidden rounded-xl">
                                            <img src={item.img} className="w-full h-full" />
                                        </div>
                                        <div className="flex flex-col justify-center items-center xl:mt-[1.5rem] lg:mt-[1.5rem] md:mt-0 mt-[1rem] gap-[0.2rem]">
                                            <p className="line-clamp-1 text-center xl:text-lg lg:text-lg md:text-[0.8rem] text-2xl font-bold text-[#4AB4FF]">
                                                {item.name}
                                            </p>
                                            <p className="line-clamp-1 text-center text-[#B0B0B0] xl:text-sm lg:text-sm md:text-[0.6rem] text-xl font-extralight">
                                                {item.profession}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="xl:w-[60%] lg:w-[60%] md:w-[50%] w-full">
                                        <p className="text-white xl:text-[1.5rem] lg:text-[1rem] md:text-[0.8rem] font-extralight">
                                            {item.description}
                                        </p>
                                    </div>
                                </div> */}
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default WhatTheySay;
