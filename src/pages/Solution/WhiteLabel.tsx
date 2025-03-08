// COMPONENTS
import FAQ from "../../components/FAQ";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import LaunchYourProduct from "../../components/Solution/Whitelabel/LaunchYourProduct";
import WhatIsWhiteLabel from "../../components/Solution/Whitelabel/WhatIsWhiteLabel";
import WhitelabelProducts from "../../components/Solution/Whitelabel/WhitelabelProducts";

const WhiteLabel = () => {

    // MOCK DATA
    const faqData: TFaqData = [
        {
            question: "What whitelabel solutions does KingIT Labs offer?",
            answer: "We offer NFT Marketplaces, Token/NFT Launchpads, customizable Casinos, and Decentralized Exchange (DEX) platforms, among others.",
        },
        {
            question: "What are the key features of the NFT Marketplace?",
            answer: "Our NFT Marketplace includes custom branding, multi-chain support, feature-rich functionality, user-friendly interfaces, and secure, scalable design.",
        },
        {
            question: "How does the Whitelabel Casino solution work?",
            answer: "Our casino solution provides customizable branding, a wide selection of games, Crypto and fiat support, and integrated bonuses and rewards.",
        },
        {
            question: "Can the DEX platform integrate with other systems?",
            answer: "Yes, the DEX platform supports multi-chain compatibility, liquidity management, and integration with existing Blockchain ecosystems.",
        },
        {
            question: "Are these Whitelabel solutions scalable?",
            answer: "All our Whitelabel solutions are designed with scalability and flexibility to accommodate your business growth.",
        },
    ];
    return (
        <Layout>
            <Navbar />
            <LaunchYourProduct />
            <WhatIsWhiteLabel />
            <WhitelabelProducts />
            <FAQ faqData={faqData} />
            <Footer />
        </Layout>
    );
};

export default WhiteLabel;

// TYPES
type TFaqData = Array<{
    question: string;
    answer: string;
}>;
