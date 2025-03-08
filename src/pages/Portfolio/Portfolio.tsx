// COMPONENTS
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import PortfolioProjects from "../../components/Portfolio/PortfolioProjects";
import TopSection from "../../components/Portfolio/TopSection";
import FormSection from "../../components/Services/FormSection";
import WrapperLayout from "../../components/WrapperLayout";

const Portfolio = () => {
    return (
        <Layout>
            <Navbar />
            <WrapperLayout>
                <TopSection />
                <PortfolioProjects />
            </WrapperLayout>
            <FormSection />
            <Footer />
        </Layout>
    );
};

export default Portfolio;
