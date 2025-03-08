// IMAGES
import PocHeadingImage from "../../assets/images/poc_heading.png";
import ReduceRiskAndLossImage from "../../assets/images/reduce_risk_and_loss.png";
import FoundationGrowthImage from "../../assets/images/foundation_growth.png";
import EveryoneOnBoardImage from "../../assets/images/everyone_on_board.png";
import ShortTestingPhaseImage from "../../assets/images/short_testing_phase.png";
import ConfirmScopeImage from "../../assets/images/confirm_scope.png";
import SetGoalAndTimeImage from "../../assets/images/set_goal_and_time.png";
import ExecuteAndPlanImage from "../../assets/images/execute_and_plan.png";
import AnalyzeAndScaleImage from "../../assets/images/analyze_and_scale.png";

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

const POC = () => {
    const whyPocData: Array<TPOCCommonItem> = [
        {
            id: 1,
            title: "Reduce Risks and Loss",
            description: "It helps you spot any bumps and rocks in the road early on, saving you from bigger headaches later.",
            logo: ReduceRiskAndLossImage,
        },
        {
            id: 2,
            title: "Foundation for Growth",
            description: "It sets the stage for development by identifying key requirements and refining the solution.",
            logo: FoundationGrowthImage,
        },
        {
            id: 3,
            title: "Get Everyone on Board",
            description: "A solid PoC can help convince stakeholders and investors that your idea is worth pursuing.",
            logo: EveryoneOnBoardImage,
        },
        {
            id: 4,
            title: "Short Testing Phase",
            description: "You’ll get feedback and results in no more than 2 months. Allowing you to decide before committing costly development.",
            logo: ShortTestingPhaseImage,
        },
    ];
    const howWePocData: Array<TPOCCommonItem> = [
        {
            id: 1,
            title: "Confirm Scope",
            description:
                "We’ll talk to understand your vision and our team digs into the details to see what’s feasible and what could make your idea successful.",
            logo: ConfirmScopeImage,
        },
        {
            id: 2,
            title: "Set Goals & Time",
            description:
                "Define specific objectives, success metrics, outline key milestones, and timeline to guide the research & exploration effectively.",
            logo: SetGoalAndTimeImage,
        },
        {
            id: 3,
            title: "Execute & Plan",
            description:
                "We whip up a prototype that brings your idea to life, showing how it works in practice to real users in order to get their feedback.",
            logo: ExecuteAndPlanImage,
        },
        {
            id: 4,
            title: "Analyze & Scale",
            description:
                "After gathering feedback, we synthesize the result and share a report with our findings and suggestions for your next steps.",
            logo: AnalyzeAndScaleImage,
        },
    ];
    const whatWillYougetData: Array<TWhatWillYouGetItem> = [
        {
            id: 1,
            title: "Proof of Concept Plan",
            description: "A detailed outline that defines the objectives, success criteria, and timeline for the PoC.",
        },
        {
            id: 2,
            title: "Research Findings",
            description: "Documentation of user interviews, market research, and pain points identified from potential users.",
        },
        {
            id: 3,
            title: "Prototype Design",
            description: "A working model or prototype that demonstrates the core functionality of the idea being tested.",
        },
        {
            id: 4,
            title: "Implementation Plan",
            description: "A strategy for how the PoC will be executed, including resources needed and roles assigned.",
        },
        {
            id: 5,
            title: "Testing Documentation",
            description: "This includes test cases, scripts, and results that provide insights into the prototype’s performance.",
        },
        {
            id: 6,
            title: "Final Report",
            description: "A document summarizing findings, feedback from testing, and recommendations for next steps.",
        },
    ];

    // MOCK DATA
    const faqData: TFaqData = [
        {
            question: "What is a Proof of Concept (PoC) service?",
            answer: "Our PoC service validates ideas within 2-8 weeks, showcasing feasibility and potential while minimizing risks.",
        },
        {
            question: "What are the benefits of PoC services?",
            answer: "Benefits include feasibility testing, rapid prototyping, stakeholder alignment, iterative refinement, and cost-effective validation.",
        },
        {
            question: "What industries use PoC services?",
            answer: "Industries like fintech, healthcare, blockchain, and gaming leverage PoC services to test innovative ideas and gain stakeholder confidence.",
        },
        {
            question: "How do you ensure the PoC meets my goals?",
            answer: "We collaborate closely with your team to align the PoC design and functionality with your business objectives.",
        },
        {
            question: " Can PoCs transition into full-scale products?",
            answer: "Yes, our team ensures a seamless transition from PoC to MVP or full-scale development.",
        },
    ];

    return (
        <Layout>
            <Navbar />
            <WrapperLayout>
                <Breadcrumb text1="Services" text2="Proof of Concept" />
                <Heading
                    title="Proof of Concept"
                    description="Need a way to test out your idea in under 8 weeks? Proof of Concept helps you see if your product or technology can really work in the real world. Think of it as a sneak peek that shows whether your concept has potential."
                    image={PocHeadingImage}
                />
                <WhySection heading="Why Go for a PoC?" cardData={whyPocData} />
                <HowWeDoSection heading="How We Do PoCs" cardData={howWePocData} />
                <WhatWillYouGet heading="What You’ll Get" cardData={whatWillYougetData} />
            </WrapperLayout>
            <FormSection />
            <FAQ faqData={faqData} />
            <Footer />
        </Layout>
    );
};

export default POC;

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