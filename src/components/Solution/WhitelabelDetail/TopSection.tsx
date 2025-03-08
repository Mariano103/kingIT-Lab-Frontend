import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// IMAGES
import sliderImg1 from "../../../assets/images/whitelabel_detail_slider_img1.png";

// COMPONENTS
import WrapperLayout from "../../WrapperLayout";
import Breadcrumb from "../../BlogArticle/Breadcrumb";
import MainHeading from "../../MainHeading";

const TopSection = () => {
    // MOCK DATA
    const customImages = [{ img: sliderImg1 }, { img: sliderImg1 }];

    // SLIDER CONFIG
    const sliderSettings = {
        slidesToShow: 1,
        autoplay: true,
        speed: 1500,
        centerMode: false,
        arrows: false,
        centerPadding: "60px",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
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
        <div>
            <WrapperLayout>
                <Breadcrumb text1="Whitelabel" text2="NFT Marketplace" />
                <MainHeading text="NFT Marketplace" />
            </WrapperLayout>
            <Slider {...sliderSettings} className="relative mt-12 mb-10">
                {customImages.map((item, index) => {
                    return (
                        <div key={index} className="xl:px-[8rem] lg:px-[4rem] md:px-[3rem] px-0 relative">
                            <img src={item.img} className="w-full object-contain backdrop:blur-xl xl:h-[37rem] lg:h-[37rem] md:h-[35rem] h-auto" />
                        </div>
                    );
                })}
            </Slider>
            <WrapperLayout className="mt-[5rem] xl:mb-[7rem] lg:mb-[7rem] md:mb-[7rem] mb-[2rem]">
                <p className="text-white font-extralight text-[1.5rem]">
                    Build your own NFT Marketplace as the world of digital treasures equipped with full-fledge functions to buy, sell, and trade
                    unique and limited digital items like artwork, music, or collectibles.
                </p>
                <p className="text-white font-extralight text-[1.5rem] mt-10">
                    Our Whitelabel NFT Marketplace developed in a cutting-edge blockchain technology to ensure your ownership security and all trading
                    activities are safe for everyone.
                </p>
            </WrapperLayout>
        </div>
    );
};

export default TopSection;
