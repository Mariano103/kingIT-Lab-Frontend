// IMAGES
import FDPHeadingImage from "../../assets/images/fdp_heading.png";
import EnhanceUserExp from "../../assets/images/enhance_user_exp.png";
import StrongerMarketPosition from "../../assets/images/stronger_market_position.png";
import HappyCustomer from "../../assets/images/happy_customer.png";
import EffectiveMarketing from "../../assets/images/effective_marketing.png";

import PlaningAndAnalysis from "../../assets/images/planing_and_analysis.png";
import DesignAndDevelopment from "../../assets/images/design_and_development.png";
import TestingAndRefinement from "../../assets/images/testing_and_refinement.png";
import LaunchAndMaintanance from "../../assets/images/launch_and_maintanance.png";

// COMPONENTS
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WrapperLayout from "../../components/WrapperLayout";
import Breadcrumb from "../../components/BlogArticle/Breadcrumb";
import FAQ from "../../components/FAQ";
import Heading from "../../components/Services/Heading";
import WhySection from "../../components/Services/WhySection";
import HowWeDoSection from "../../components/Services/HowWeDoSection";
import WhatWillYouGet from "../../components/Services/WhatWillYouGet";
import FormSection from "../../components/Services/FormSection";

const FDP = () => {
    const whyChooseData: Array<TPOCCommonItem> = [
        {
            id: 1,
            title: "Enhanced User Experience",
            description: "Improvements based on MVP feedback ensure your product meets user needs and expectations.",
            logo: EnhanceUserExp,
        },
        {
            id: 2,
            title: "Stronger Market Position",
            description: "A polished, feature-rich product stands out against competitors still in MVP.",
            logo: StrongerMarketPosition,
        },
        {
            id: 3,
            title: "Happier Customers",
            description: "A more refined product leads to better experiences, higher satisfaction, and stronger loyalty.",
            logo: HappyCustomer,
        },
        {
            id: 4,
            title: "Effective Marketing",
            description: "Showcase your product’s full potential with impactful marketing strategies tailored to its strengths.",
            logo: EffectiveMarketing,
        },
    ];
    const howWeDoData: Array<TPOCCommonItem> = [
        {
            id: 1,
            title: "Planning & Analysis",
            description: "Define the product vision, set goals, gather requirements, and create a roadmap to guide development.",
            logo: PlaningAndAnalysis,
        },
        {
            id: 2,
            title: "Design & Development",
            description: "Build the product’s architecture, design user interfaces, and develop core functionalities with a focus on user needs.",
            logo: DesignAndDevelopment,
        },
        {
            id: 3,
            title: "Testing & Refinement",
            description:
                "Conduct thorough testing to identify and fix issues, gather feedback, and improve the product for a seamless user experience.",
            logo: TestingAndRefinement,
        },
        {
            id: 4,
            title: "Launch & Maintenance",
            description: "Release the product, monitor performance, gather user insights, and provide updates to ensure long-term success.",
            logo: LaunchAndMaintanance,
        },
    ];
    const whatWillYougetData: Array<TWhatWillYouGetItem> = [
        {
            id: 1,
            title: "Maintenance Plan",
            description: "Post-launch support strategy, including updates, monitoring, and troubleshooting.",
        },
        {
            id: 2,
            title: "Developed Product",
            description: "A fully functional product with all key features implemented.",
        },
        {
            id: 3,
            title: "Testing Reports",
            description: "Results of quality assurance, bug fixes, and performance optimization.",
        },
        {
            id: 4,
            title: "Launch Plan",
            description:
                "A strategy for release, including marketing and user onboarding.",
        },
        {
            id: 5,
            title: "User Documentation",
            description: "Guides and FAQs to support users in navigating the product",
        },
        {
            id: 6,
            title: "Performance Analytics",
            description: "Tools or reports to track user engagement, performance, and feedback post-launch.",
        },
    ];

    // MOCK DATA
    const faqData: TFaqData = [
        {
            question: "What is Live Production?",
            answer: "Live Production is the process of deploying your platform in a real-world environment for end-user access.",
        },
        {
            question: "How long does Live Production take?",
            answer: "We aim to transition products to live environments within 14 weeks, including testing and optimization.",
        },
        {
            question: "What support is offered during Live Production?",
            answer: "Our team ensures seamless deployment, performance monitoring, and ongoing support to handle real-world demands.",
        },
        {
            question: "What security measures are implemented?",
            answer: "We incorporate robust encryption, regular audits, and performance optimization to maintain platform security.",
        },
        {
            question: "Can Live Production scale with user growth?",
            answer: "Yes, our solutions are built to scale, ensuring consistent performance as your user base expands.",
        },
    ];
    return (
        <Layout>
            <Navbar />
            <WrapperLayout>
                <Breadcrumb text1="Services" text2="Full-Deployment Production" />
                <Heading
                    title="Full Deployment Production"
                    description="Your big idea is built, but is it ready for the spotlight? We specialize in preparing products for market launch with strategies that set you up for success."
                    image={FDPHeadingImage}
                />
                <WhySection heading="Why Choose Market-Ready Development?" cardData={whyChooseData} />
                <HowWeDoSection heading="How We Do It" cardData={howWeDoData} />
                <WhatWillYouGet heading="What You’ll Get" cardData={whatWillYougetData} />
            </WrapperLayout>
            <FormSection />
            <FAQ faqData={faqData} />
            <Footer />
        </Layout>
    );
};

export default FDP;

// TYPES
type TPOCCommonItem = {
    id: number;
    title: string;
    description: string;
    logo: string;
};
type TWhatWillYouGetItem = { id: number; title: string; description: string };
// TYPES
type TFaqData = Array<{
    question: string;
    answer: string;
}>;