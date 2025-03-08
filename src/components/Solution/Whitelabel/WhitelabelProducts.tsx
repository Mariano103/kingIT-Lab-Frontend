/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../navigation/routes";

// IMAGES
// import Product1Img from "../../../assets/images/whitelabel_product1.png";
// import Product2Img from "../../../assets/images/whitelabel_product2.png";
// import Product3Img from "../../../assets/images/whitelabel_product3.png";
// import Product4Img from "../../../assets/images/whitelabel_product4.png";
// import Product5Img from "../../../assets/images/whitelabel_product5.png";
import ProductCommingSoonImg from "../../../assets/images/whitelabel_product_comming_soon.png";
import BgRightImg from "../../../assets/images/our_products_bg_right.png";
import BgRightSmallImg from "../../../assets/images/our_products_bg_right_small.png";
import BgRight2Img from "../../../assets/images/our_products_bg_right2.png";
import BgRight2SmallImg from "../../../assets/images/our_products_bg_right2small.png";

// COMPONENTS
import WrapperLayout from "../../WrapperLayout";
import { useEffect, useState } from "react";
import { API_URL } from "../../../Constants/config";

const WhitelabelProducts = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(API_URL + '/api/whitelabel/?sort=createdAt');
            const data = await response.json();
            setProducts(data.docs);
        }
        fetchData();
    }, [])

    // MOCK DATA
    // const productData = [
    //     {
    //         id: 1,
    //         title: "NFT Marketplace",
    //         desc: "Trading platform for unique digital products and collectibles. Securely build within blockchain technology.",
    //         logo: Product1Img,
    //     },
    //     {
    //         id: 2,
    //         title: "Casino",
    //         desc: "Trading platform for unique digital products and collectibles. Securely build within blockchain technology.",
    //         logo: Product2Img,
    //     },
    //     {
    //         id: 3,
    //         title: "Whitelabel NFT/Token Launchpad",
    //         desc: "Trading platform for unique digital products and collectibles. Securely build within blockchain technology.",
    //         logo: Product3Img,
    //     },
    //     {
    //         id: 4,
    //         title: "DEX",
    //         desc: "Trading platform for unique digital products and collectibles. Securely build within blockchain technology.",
    //         logo: Product4Img,
    //     },
    //     {
    //         id: 5,
    //         title: "Token/NFT-Based Crowdsale Contract",
    //         desc: "Trading platform for unique digital products and collectibles. Securely build within blockchain technology.",
    //         logo: Product5Img,
    //     },
    // ];

    // FUNCTIONS
    const learnMoreHandler = (id: number) => {
        navigate(`${ROUTES.SOLUTION.WHITELABEL.PATH}/${id}`);
    };

    return (
        <div className="relative mb-[3.5rem]">
            <WrapperLayout>
                <p className="xl:mb-[3.75rem] lg:mb-[3.75rem] md:mb-[3.75rem] mb-[2rem] bg-gradient-to-r from-[#ffffff00] via-[#FFFFFF] to-[#ffffff00] bg-clip-text text-transparent xl:text-[3.5rem] lg:text-[3.5rem] md:text-[3.5rem] text-[1.5rem] text-center">
                    Find out all whitelabel products.
                </p>
                <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-[1.5rem] mb-[2.5rem]">
                    {products && products.map((product: any) => {
                        return (
                            <div key={product.id} className="flex w-full bg-black bg-opacity-20 rounded-2xl overflow-hidden border-[1px] border-[#808080]">
                                <div className="w-[40%] overflow-hidden h-full flex justify-center items-center">
                                    <img src={API_URL + product.logo.url} className="w-full h-full object-fill" />
                                </div>
                                <div className="w-[60%] p-[1rem] flex flex-col justify-between">
                                    <div className="flex flex-col gap-[0.8rem]">
                                        <p className="xl:text-[1.5rem] lg:text-[1.2rem] md:text-[1.2rem]text-base text-white font-bold">{product.title}</p>
                                        <p className="xl:text-[1.1rem] lg:text-[1rem] md:text-[1rem] text-xs font-extralight text-[#F0F0F0]">
                                            {product.desc}
                                        </p>
                                    </div>
                                    <div className="flex justify-end items-center mt-[1rem]">
                                        <button
                                            onClick={() => learnMoreHandler(product.id)}
                                            className="w-fit border-2 border-white text-white bg-black py-1 px-[1rem] text-center rounded-lg xl:text-base lg:text-base md:text-base text-xs"
                                        >
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    <div className="flex flex-col p-[1rem] justify-center items-center w-full rounded-2xl overflow-hidden border-[1px] border-[#808080] gap-[1rem]">
                        <p className="text-center xl:text-[1.5rem] lg:text-[1.5rem] md:text-[1.5rem] text-[1.3rem] font-extralight text-[#F0F0F0]">
                            We are preparing more products.
                        </p>
                        <div className="flex justify-center items-center">
                            <img src={ProductCommingSoonImg} className="w-[20rem]  h-[7.813rem]" />
                        </div>
                    </div>
                </div>
            </WrapperLayout>
            <img src={BgRightImg} className="absolute right-0 bottom-14 xl:block lg:block md:block hidden animate-[bounce_5s_infinite]" />
            <img src={BgRightSmallImg} className="absolute right-0 bottom-24 xl:hidden lg:hidden md:hidden block animate-[bounce_5s_infinite]" />

            <img
                src={BgRight2Img}
                className="absolute xl:right-[8rem] lg:right-[1rem] right-[1rem] -bottom-[16rem] xl:block lg:block md:hidden hidden animate-[bounce_5s_infinite]"
            />
            <img src={BgRight2SmallImg} className="absolute right-0 -bottom-[11rem] xl:hidden lg:hidden md:block block animate-[bounce_5s_infinite]" />
        </div>
    );
};

export default WhitelabelProducts;
