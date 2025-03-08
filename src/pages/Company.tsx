// COMPONENTS
import FAQ from "../components/FAQ";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatWeDo from "../components/Company/WhatWeDo";
import JoinKingItLabs from "../components/Company/JoinKingItLabs";
import WhosBehindKingItLab from "../components/Company/WhosBehindKingItLab";
import WelcomeToKingItLabs from "../components/Company/WelcomeToKingItLabs";
import Layout from "../components/Layout";

const Company = () => {
    const faqData: TFaqData = [
        {
            question: "What is KingIT Labs’ mission?",
            answer: "Our mission is to empower businesses with cutting-edge Web3 software solutions, focusing on Blockchain, Decentralized applications, and Tokenomics.",
        },
        {
            question: "Where is KingIT Labs located?",
            answer: "KingIT Labs operates globally, with headquarters located in [Location].",
        },
        {
            question: "How long has KingIT Labs been in Operation?",
            answer: "KingIT Labs was established to deliver specialized Web3 and blockchain solutions under the KingIT Solutions umbrella.",
        },
        {
            question: "Who are your Key Clients?",
            answer: "Our clients include startups, SMEs, and enterprises from fintech, gaming, blockchain, and E-commerce sectors.",
        },
        {
            question: "How can I collaborate with KingIT Labs?",
            answer: "For partnerships or collaborations, please contact us via our website or email us at (Email here).",
        },
    ];
    return (
        <Layout>
            <Navbar />
            <WelcomeToKingItLabs />
            <WhatWeDo />
            <WhosBehindKingItLab />
            <JoinKingItLabs />
            <FAQ faqData={faqData} />
            <Footer />
        </Layout>
    );
};

export default Company;

// TYPES
type TFaqData = Array<{
    question: string;
    answer: string;
}>;