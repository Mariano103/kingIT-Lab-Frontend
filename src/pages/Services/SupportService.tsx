// COMPONENTS
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import WrapperLayout from "../../components/WrapperLayout";
import Breadcrumb from "../../components/BlogArticle/Breadcrumb";
import FormSection from "../../components/Services/FormSection";
import FAQ from "../../components/FAQ";
import Footer from "../../components/Footer";
import Heading from "../../components/Services/Heading";
import WhatWeCanSupportWithYou from "../../components/Services/WhatWeCanSupportWithYou";

const SupportService = () => {
    const faqData: TFaqData = [
        {
            question: "What type of support does KingIT Labs offer?",
            answer: "We offer 24/7 support for technical assistance, system updates, and real-time issue resolution",
        },
        {
            question: "How can I reach the support team?",
            answer: "You can contact our support team through email, phone, or the website’s chat feature.",
        },
        {
            question: "Is Onboarding support included?",
            answer: "Yes, Onboarding support is part of our services to help you and your team use our solutions effectively.",
        },
        {
            question: "Do you offer proactive monitoring?",
            answer: "Yes, we provide proactive monitoring to identify and address issues before they affect your operations.",
        },
        {
            question: "Is 24/7 support available for all services?",
            answer: "Yes, 24/7 support is available for all products and services to ensure uninterrupted operations.",
        },
    ];
    return (
        <Layout>
            <Navbar />
            <WrapperLayout>
                <Breadcrumb text1="Services" text2="Support Services" />
                <Heading
                    title="Support Services"
                    description="We’re here to keep your business running smoothly with expert IT support tailored to your needs. Let us handle the technical details so you can focus on growing your business."
                />
                <WhatWeCanSupportWithYou />
            </WrapperLayout>
            <FormSection />
            <FAQ faqData={faqData} />
            <Footer />
        </Layout>
    );
};

export default SupportService;

// TYPES
type TFaqData = Array<{
    question: string;
    answer: string;
}>;