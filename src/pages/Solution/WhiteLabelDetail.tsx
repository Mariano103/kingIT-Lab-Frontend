// COMPONENTS
import FAQ from "../../components/FAQ";
import Footer from "../../components/Footer";
import TopSection from "../../components/Solution/WhitelabelDetail/TopSection";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Features from "../../components/Solution/WhitelabelDetail/Features";
import OtherProducts from "../../components/Solution/WhitelabelDetail/OtherProducts";
import FormSection from "../../components/Solution/WhitelabelDetail/FormSection";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_URL } from "../../Constants/config";

const WhiteLabelDetail = () => {

    const { id } = useParams();
    const [product, setProduct] = useState<{ id: string }>();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${API_URL}/api/whitelabel/` + id);
            const data = await response.json();
            setProduct(data);
        }
        fetchData();
    }, [])

    // MOCK DATA
    const faqData: TFaqData = [
        {
            question: "What is Whitelabel solution?",
            answer: "A whitelabel solution is a ready-made product or service that can be rebranded and customized to represent your company's identity, such as your logo, colors, and name.",
        },
        {
            question: "How does a Whitelabel product work?",
            answer: "A whitelabel solution is a ready-made product or service that can be rebranded and customized to represent your company's identity, such as your logo, colors, and name.",
        },
        {
            question: "Can I add or remove features from a Whitelabel product?",
            answer: "A whitelabel solution is a ready-made product or service that can be rebranded and customized to represent your company's identity, such as your logo, colors, and name.",
        },
        {
            question: "Is the platform compatible with third-party integrations?",
            answer: "A whitelabel solution is a ready-made product or service that can be rebranded and customized to represent your company's identity, such as your logo, colors, and name.",
        },
        {
            question: "Can I use my own logo an branding with the whitelabel platform?",
            answer: "A whitelabel solution is a ready-made product or service that can be rebranded and customized to represent your company's identity, such as your logo, colors, and name.",
        },
        {
            question: "Are there options to customize the design and user interface?",
            answer: "A whitelabel solution is a ready-made product or service that can be rebranded and customized to represent your company's identity, such as your logo, colors, and name.",
        },
    ];

    if (product)
        return (
            <Layout>
                <Navbar />
                <TopSection />
                <Features product={product} />
                <FAQ className="xl:px-[7rem] lg:px-[4rem] md:px-[3rem] px-[1rem]" faqData={faqData} />
                <OtherProducts id={product.id} />
                <FormSection />
                <Footer />
            </Layout>
        );
};

export default WhiteLabelDetail;

// TYPES
type TFaqData = Array<{
    question: string;
    answer: string;
}>;
