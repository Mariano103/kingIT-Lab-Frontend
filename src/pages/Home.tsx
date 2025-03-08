/* eslint-disable @typescript-eslint/no-explicit-any */
// COMPONENTS
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import FormSection from "../components/Services/FormSection";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import TopSection from "../components/Home/TopSection";
import SeeOurWork from "../components/Home/SeeOurWork";
import SuitesYourNeeds from "../components/Home/SuitesYourNeeds";
import MarketReadyScripts from "../components/Home/MarketReadyScripts";
import OurProducts from "../components/Home/OurProducts";
import YourVision from "../components/Home/YourVision";
import WhatTheySay from "../components/Home/WhatTheySay";

const Home = () => {
    // FUNCTIONS
    const scrollTo = (moveId: string) => {
        function findPosition() {
            let obj: any = document.getElementById(moveId);
            let currenttop = 0;
            if (obj.offsetParent) {
                do {
                    currenttop += obj.offsetTop;
                } while ((obj = obj.offsetParent));
                return currenttop - 60;
            } else {
                return 0;
            }
        }
        window.scroll(0, findPosition());
    };
    // MOCK DATA
    const faqData: TFaqData = [
        {
            question: "What is KingIT Labs?",
            answer: "KingIT Labs is a tech platform specializing in whitelabel solutions, proof-of-concept services, MVP development, and live production services tailored for businesses seeking scalable and innovative digital solutions.",
        },
        {
            question: "How is KingIT Labs different from KingIT Solutions?",
            answer: "While KingIT Solutions focuses on broader IT services, KingIT Labs emphasizes cutting-edge Web3 software solutions, including blockchain, decentralized applications, and tokenomics.",
        },
        {
            question: "Who can benefit from KingIT Labs?",
            answer: "Startups, SMEs, and enterprises looking to launch scalable blockchain platforms, NFT marketplaces, decentralized exchanges, or other digital innovations can benefit from our services.",
        },
        {
            question: "What industries does KingIT Labs cater to?",
            answer: "We cater to industries such as fintech, gaming, blockchain, entertainment, and other sectors requiring innovative digital solutions.",
        },
        {
            question: "How can I get started with KingIT Labs?",
            answer: "You can reach out to us via our inquiry form on the website or email us directly. Our team will guide you through selecting and customizing the best solutions for your needs.",
        },
    ];

    return (
        <Layout>
            <Navbar scrollTo={scrollTo} />
            <TopSection scrollTo={scrollTo} />
            <SeeOurWork />
            <SuitesYourNeeds />
            <MarketReadyScripts />
            <OurProducts />
            <YourVision />
            <WhatTheySay />
            <FormSection />
            <FAQ faqData={faqData} />
            <Footer />
        </Layout>
    );
};

export default Home;

// TYPES
type TFaqData = Array<{
    question: string;
    answer: string;
}>;