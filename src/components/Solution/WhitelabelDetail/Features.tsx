/* eslint-disable @typescript-eslint/no-explicit-any */
// IMAGES
import FeatureBGImage from "../../../assets/images/whitelabel_detail_feature_bg_img.png";

// COMPONENTS
import WrapperLayout from "../../WrapperLayout";
import FeatureCard from "./FeatureCard";

const Features = (param: any) => {

    const product = param.product;
    console.log(product);

    if (product)
        return (
            <div className="relative h-auto">
                <img src={FeatureBGImage} className="absolute w-full h-full -top-[20rem] right-0" />
                <WrapperLayout>
                    <FeatureCard title="Core Features" cardData={product.coreFeatures} />
                    <FeatureCard title="Advance Features" cardData={product.advanceFeatures} />
                    <div className="z-50 xl:flex lg:flex mb:flex justify-center items-center py-[2rem] rounded-lg gap-[1.5rem] mb-[3.75rem]">
                        <p className="text-white z-10 text-[2rem] font-normal text-center">Let’s try it!</p>
                        <button className="cursor-pointer z-10 bg-white text-black rounded-xl font-normal text-[2rem py-[0.5rem] px-[1rem] xl:w-auto lg:w-auto md:w-auto w-full">
                            Request Demo
                        </button>
                    </div>
                </WrapperLayout>
            </div>
        );
};

export default Features;
