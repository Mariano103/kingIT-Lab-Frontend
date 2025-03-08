/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../navigation/routes";

// COMPONENTS
import WrapperLayout from "../../WrapperLayout";
import { useEffect, useState } from "react";
import { API_URL } from "../../../Constants/config";

const OtherProducts = (param: { id: string }) => {
    const id = param.id;
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(API_URL + '/api/whitelabel/?sort=createdAt');
            const data = await response.json();
            const otherProducts = data.docs.filter((product: { id: string }) => product.id !== id);
            console.log(otherProducts);

            setProducts(otherProducts);
        }
        fetchData();
    }, [])

    // FUNCTIONS
    const learnMoreHandler = (id: number) => {
        navigate(`${ROUTES.SOLUTION.WHITELABEL.PATH}/${id}`);
    };

    if (id && products)
        return (
            <div className="mt-16">
                <WrapperLayout>
                    <p className="text-white font-normal text-[2.5rem] mb-[1.5rem]">See Other Whitelabel Products</p>
                    <div className="flex flex-nowrap overflow-x-scroll no-scrollbar gap-5 p-1">
                        {products.map((product: any) => {
                            return (
                                <div
                                    key={product.id}
                                    className="flex justify-center items-center w-[26.313rem] h-[11.25rem] border-2 border-[#515151] rounded-lg"
                                >
                                    <div className="w-[11.25rem] h-full rounded-lg overflow-hidden">
                                        <img src={API_URL + product.logo.url} className="object-fill" />
                                    </div>
                                    <div className="bg-gradient-to-r from-[#080808] to-[#333333] flex justify-center items-center p-[0.8rem] w-[15.063rem] h-full rounded-tr-lg rounded-br-lg">
                                        <div className="h-full flex flex-col justify-between">
                                            <div className="flex flex-col gap-1">
                                                <p className="text-white font-medium text-lg line-clamp-1">{product.title}</p>
                                                <p className="text-white font-light text-sm line-clamp-3">{product.desc}</p>
                                            </div>
                                            <div className="flex justify-end items-center">
                                                <button
                                                    onClick={() => learnMoreHandler(product.id)}
                                                    className="border-2 border-white rounded-lg text-white font-normal text-sm py-1 px-2"
                                                >
                                                    Learn More
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </WrapperLayout>
            </div>
        );
};

export default OtherProducts;
