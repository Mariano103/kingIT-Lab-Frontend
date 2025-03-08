import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// IMAGES
import img1Full from "../../assets/images/img1.png";
import img2Full from "../../assets/images/img2.png";
import img3Full from "../../assets/images/img3.png";
import img4Full from "../../assets/images/img4.png";
import columnLine from "../../assets/images/columnLine.png";
import columnLine2 from "../../assets/images/CloumnLine2.png";

// COMPONENTS
import MainHeading from "../MainHeading";

const WelcomeToKingItLabs = () => {
    // MOCK DATA
    const customImages = [
        { img: img1Full, title: "1" },
        { img: img2Full, title: "2" },
        { img: img3Full, title: "3" },
        { img: img4Full, title: "4" },
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
        <div className="text-white text-center">
            <MainHeading text="Welcome to KingITLabs" />
            <p className="xl:text-[1.25rem] lg:text-[1.25rem] md:text-[1.25rem] text-[1rem] font-extralight leading-[1.5rem] font-inter mt-4 px-6 sm:px-8 md:px-12 text-center hidden md:block">
                We envision a future where technology drives growth and creativity, connecting talented professionals <br /> with forward-thinking
                clients to turn ideas into reality and foster lasting partnerships built on trust, <br /> innovation, and excellence. Let’s embark on
                this exciting journey together!
            </p>
            <p className="xl:text-[1.25rem] lg:text-[1.25rem] md:text-[1.25rem] text-[1rem] font-extralight mt-4 px-6 sm:px-8 md:px-12 text-center block md:hidden">
                We build decentralized applications that empower users and get to market 30% faster with our agile approach.
            </p>
            {/* Help Button - Visible only on mobile */}
            <button className="block md:hidden mt-4 px-6 py-2 text-sm text-black bg-white border border-black rounded-md mx-auto">
                Let's Get Started
            </button>
            {/* 4-column layout */}
            {/* XL & LG */}
            <div className="flex justify-center items-center">
                <div className="xl:w-[70%] lg:w-[80%] md:w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-12 px-6 sm:px-8 md:px-12 lg:px-16">
                    <div className="text-center relative">
                        <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-500">60+</div>
                        <div className="xl:text-lg lg:text-base md:text-base text-sm lg:font-extralight md:font-extralight font-extralight mt-2">
                            Professionals
                        </div>
                        <div className="absolute right-0 xl:top-0 lg:top-0 md:top-14 h-full">
                            {/* Column Line for Mobile (L and M) */}
                            <img
                                src={columnLine2} // This will be shown on mobile L and M
                                alt=""
                                className="h-12 sm:h-16 md:h-20 object-contain block lg:hidden" // 'lg:hidden' ensures it's hidden on tablet/desktop
                            />
                            {/* Column Line for Larger Screens (Tablet and Above) */}
                            <img
                                src={columnLine} // This will be shown on larger screens
                                alt=""
                                className="h-12 sm:h-16 md:h-20  object-contain hidden lg:block" // 'hidden lg:block' ensures it's visible only on large screens and above
                            />
                        </div>
                    </div>

                    <div className="text-center relative">
                        <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-500 xl:mt-auto lg:mt-auto md:mt-auto mt-5">10</div>
                        <div className="xl:text-lg lg:text-base md:text-base text-sm xl:font-normal lg:font-extralight md:font-extralight font-extralight mt-2">
                            Years of Experience
                        </div>
                        <div className="absolute right-0 xl:top-0 lg:top-0 md:top-14 h-full">
                            {/* Column Line for Mobile (L and M) */}
                            <img src={columnLine2} alt="" className="h-12 sm:h-16 md:h-20 object-contain block lg:hidden" />
                            {/* Column Line for Larger Screens (Tablet and Above) */}
                            <img src={columnLine} alt="" className="h-12 sm:h-16 md:h-20 object-contain hidden lg:block" />
                        </div>
                    </div>

                    <div className="text-center relative">
                        <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-500 xl:mt-auto lg:mt-auto md:mt-auto mt-5">8</div>
                        <div className="xl:text-lg lg:text-base md:text-base text-sm xl:font-normal lg:font-extralight md:font-extralight font-extralight mt-2">
                            Different Countries
                        </div>
                        <div className="absolute right-0 xl:top-0 lg:top-0 md:top-14 h-full">
                            {/* Column Line for Mobile (L and M) */}
                            <img src={columnLine2} alt="" className="h-12 sm:h-16 md:h-20 object-contain block lg:hidden" />
                            {/* Column Line for Larger Screens (Tablet and Above) */}
                            <img src={columnLine} alt="" className="h-12 sm:h-16 md:h-20 object-contain hidden lg:block" />
                        </div>
                    </div>

                    <div className="text-center relative">
                        <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-500 xl:mt-auto lg:mt-auto md:mt-auto mt-5">5</div>
                        <div className=" xl:text-lg lg:text-base md:text-base text-sm xl:font-normal lg:font-extralight md:font-extralight font-extralight mt-2">
                            Years in Industry
                        </div>
                        <div className="absolute right-0 xl:top-0 lg:top-0 md:top-14 xl:hidden lg:hidden md:block hidden h-full">
                            {/* Column Line for Mobile (L and M) */}
                            <img src={columnLine2} alt="" className="h-12 sm:h-16 md:h-20 object-contain block lg:hidden" />
                            {/* Column Line for Larger Screens (Tablet and Above) */}
                            <img src={columnLine} alt="" className="h-12 sm:h-16 md:h-20 object-contain hidden lg:block" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Image Carousel */}
            <div className="relative mt-12 mb-10">
                <Slider {...sliderSettings}>
                    {customImages.map((item, index) => {
                        return (
                            <div key={index} className="px-3 relative">
                                <img src={item.img} alt="Carousel Image" className="w-full object-cover custom-border backdrop:blur-xl " />

                                {/* <div className="absolute bottom-0 left-0 right-0 mx-3 px-10 bg-gradient-to-b from-transparent to-black">
                                    <div className="mb-2 lg:mb-10">
                                        <p className="text-left font-bold text-xs lg:text-2xl">Growth and Development</p>

                                        <p className="text-left text-xs lg:text-lg leading-tight">
                                            We invest in your growth through mentorship programs, skill-building workshops, and opportunities to work
                                            with industry-leading experts.
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

export default WelcomeToKingItLabs;
