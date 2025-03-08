// IMAGES
import LeftBgImage from "../../assets/images/home_topleft.png";
import RightBgImage from "../../assets/images/home_topright.png";
import LeftBgImageSmall from "../../assets/images/home_topleft_small.png";
import RightBgImageSmall from "../../assets/images/home_topright_small.png";
import BottomBgImage from "../../assets/images/home_top_umbrella_point.png";
import BottomBgImageSmall from "../../assets/images/home_top_umbrella_point_small.png";

// 
import Img1 from "../../assets/images/landingpage/1.png"
import Img2 from "../../assets/images/landingpage/2.png"
import Img3 from "../../assets/images/landingpage/3.png"
import Img4 from "../../assets/images/landingpage/4.png"
import Img5 from "../../assets/images/landingpage/5.png"
import Img6 from "../../assets/images/landingpage/6.png"
import Img7 from "../../assets/images/landingpage/7.png"
import Img8 from "../../assets/images/landingpage/8.png"
import Img9 from "../../assets/images/landingpage/9.png"
import Img10 from "../../assets/images/landingpage/10.png"
import Img11 from "../../assets/images/landingpage/11.png"
import Img12 from "../../assets/images/landingpage/12.png"
import Img13 from "../../assets/images/landingpage/13.png"
import Img14 from "../../assets/images/landingpage/14.png"
import Img15 from "../../assets/images/landingpage/15.png"

const TopSection = ({ scrollTo = (moveId: string) => { console.log(moveId) } }) => {
    return (
        <div className="mt-[2rem]">
            <div className="relative w-full justify-between items-center">
                <img src={LeftBgImage} className="absolute top-[170px] left-0 xl:block lg:block md:block hidden animate-[bounce_5s_infinite]" />
                <img src={RightBgImage} className="absolute right-0 xl:block lg:block md:block hidden animate-[bounce_5s_infinite]" />
                <img src={LeftBgImageSmall} className="absolute left-0 xl:mt-0 lg:mt-0 md:mt-0 mt-12 xl:hidden lg:hidden md:hidden block animate-[bounce_5s_infinite]" />
                <img src={RightBgImageSmall} className="absolute right-0 xl:hidden lg:hidden md:hidden block animate-[bounce_5s_infinite]" />
                <div className=" w-full xl:px-8 lg:px-8 md:px-4 px-4">
                    <p className="xl:text-8xl lg:text-7xl md:text-6xl text-5xl text-center bg-gradient-to-r from-[#ffffff00] via-[#FFFFFF] to-[#ffffff00] bg-clip-text text-transparent xl:leading-[8rem] lg:leading-[7rem] md:leading-[5rem] leading-[4rem]">
                        We Revolutionize
                        <br /> Web3 Projects
                    </p>

                    <p className="text-[#CACACA] xl:text-[1.5rem] lg:text-[1.2rem] md:lg:text-[1.2rem] font-extralight text-center xl:mt-3 lg:mt-3 md:mt-3 mt-6">
                        We build decentralized applications that empower users
                        <br /> and get to market 30% faster with our agile approach.
                    </p>
                    <div className="w-full flex justify-center items-center xl:mt-[2.5rem] lg:mt-[2.5rem] md:mt-[2.5rem] mt-[2rem]">
                        <button className="bg-white px-[2rem] py-[0.75rem] rounded-xl font-medium" onClick={() => scrollTo('Contact_Form')}>Let’s Get Started</button>
                    </div>
                </div>
                <div className="mt-5">
                    <img src={BottomBgImage} className="w-full xl:block lg:block md:block hidden" />
                    <img src={BottomBgImageSmall} className="w-full xl:hidden lg:hidden md:hidden block" />
                    {/* <img src={BrandListImage} className="w-full absolute bottom-10 xl:block lg:block md:block hidden" />
                    <img src={BrandListImageSmall} className="w-full absolute bottom-0 xl:hidden lg:hidden md:hidden block" /> */}

                    <div className="w-full absolute bottom-10 xl:flex lg:flex md:flex flex scrolling-images">
                        <div className="flex gap-32">
                            <img src={Img1} className="" />
                            <img src={Img2} className="" />
                            <img src={Img3} className="" />
                            <img src={Img4} className="" />
                            <img src={Img5} className="" />
                            <img src={Img6} className="" />
                            <img src={Img7} className="" />
                            <img src={Img8} className="" />
                            <img src={Img9} className="" />
                            <img src={Img10} className="" />
                            <img src={Img11} className="" />
                            <img src={Img12} className="" />
                            <img src={Img1} className="" />
                            <img src={Img2} className="" />
                            <img src={Img3} className="" />
                            <img src={Img4} className="" />
                            <img src={Img5} className="" />
                            <img src={Img6} className="" />
                            <img src={Img7} className="" />
                            <img src={Img8} className="" />
                            <img src={Img9} className="" />
                            <img src={Img10} className="" />
                            <img src={Img11} className="" />
                            <img src={Img12} className="" />
                            <img src={Img1} className="" />
                            <img src={Img2} className="" />
                            <img src={Img3} className="" />
                            <img src={Img4} className="" />
                            <img src={Img5} className="" />
                            <img src={Img6} className="" />
                            <img src={Img7} className="" />
                            <img src={Img8} className="" />
                            <img src={Img9} className="" />
                            <img src={Img10} className="" />
                            <img src={Img11} className="" />
                            <img src={Img12} className="" />
                            <img src={Img13} className="" />
                            <img src={Img14} className="" />
                            <img src={Img15} className="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-24"></div>
        </div>
    );
};

export default TopSection;
